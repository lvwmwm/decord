// Module ID: 7382
// Function ID: 7383
// Name: PrivateChannelSortStore
// Dependencies: [6843, 6844, 4861, 4857, 4879, 6829, 6762, 1389, 4864, 11, 4932, 2047, 7383, 504, 584, 2]

// Module 7382 (PrivateChannelSortStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef2047 from "module_2047" /* 2047 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import ChannelConstants from "ChannelConstants" /* 4864 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4932 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7383 */;
import MessageRequestStore from "MessageRequestStore" /* 6843 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6844 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildStore from "GuildStore" /* 4879 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6762 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

function makeSortedChannel(channel, id) {
  let isMessageRequestResult;
  let tmp = id;
  if (id === undefined) {
    id = ReadStateStore.lastMessageId(channel.id);
    if (id == null) {
      id = channel.lastMessageId;
    }
    if (id == null) {
      id = channel.id;
    }
    const isMessageRequestTimestamp = channel.isMessageRequestTimestamp;
    let tmp2 = id;
    if (null != isMessageRequestTimestamp) {
      const obj = _modDef2047(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      const obj2 = SnowflakeUtilsDefault;
      let fromTimestampResult = obj2.fromTimestamp(valueOfResult);
      const obj3 = SnowflakeUtilsDefault;
      if (obj3.compare(id, fromTimestampResult) > 0) {
        fromTimestampResult = id;
      }
      tmp2 = fromTimestampResult;
    }
    tmp = tmp2;
  }
  const obj4 = { channelId: channel.id, lastMessageId: tmp, isFavorite: UserGuildSettingsStore.isMessagesFavorite(channel.id), isRequest: isMessageRequestResult };
  isMessageRequestResult = MessageRequestStore.isMessageRequest(channel.id) || SpamMessageRequestStore.isSpam(channel.id);
  return obj4;
}
function handleConnectionOpen() {
  secondaryIndexMap.clear();
  values = Object.values(ChannelStore.getMutablePrivateChannels());
  const item = values.forEach((id) => {
    const result = secondaryIndexMap.set(id.id, makeSortedChannel(id));
  });
}
function handleCacheLoaded() {
  const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
  for (const key10006 in mutablePrivateChannels) {
    let result = secondaryIndexMap.set(key10006, makeSortedChannel(mutablePrivateChannels[key10006]));
    continue;
  }
}
const isPrivate = ChannelRecord.isPrivate;
const ChannelFlags = ChannelConstants.ChannelFlags;
const authStore2 = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(function indexBy(value) {
  let items;
  if (value.isRequest) {
    items = [];
  } else {
    items = [tmp ? constants.FAVORITE : constants.DEFAULT];
  }
  return items;
}, function sortBy(lastMessageId) {
  lastMessageId = lastMessageId.lastMessageId;
  const obj = SnowflakeUtilsDefault;
  return -obj.extractTimestamp(lastMessageId);
});
let values = [];
let values2 = [];
let closure_18 = [];
const f42125 = () => {

};
const Store = get_initializedDefault.Store;
class PrivateChannelSortStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildStore, MessageRequestStore, ReadStateStore, SpamMessageRequestStore, UserGuildSettingsStore, UserStore);
    const items = [UserGuildSettingsStore, MessageRequestStore];
    this.syncWith(items, handleConnectionOpen);
  }
  getPrivateChannelIds() {
    if (typeof f42125 === "function") {
      values = secondaryIndexMap.values(constants.FAVORITE);
      values2 = secondaryIndexMap.values(constants.DEFAULT);
      const tmp4 = values === values && values2 === values2;
      if (!tmp4) {
        closure_18 = [];
        const item = values.forEach((channelId) => closure_1_18.push(channelId.channelId));
        const item1 = values2.forEach((channelId) => closure_1_18.push(channelId.channelId));
      }
      return closure_18;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getSortedChannels() {
    const items = [secondaryIndexMap.values(constants.FAVORITE), secondaryIndexMap.values(constants.DEFAULT)];
    return items;
  }
  serializeForOverlay() {
    const obj = {};
    values = secondaryIndexMap.values();
    const item = values.forEach((channelId) => {
      obj[channelId.channelId] = channelId.lastMessageId;
    });
    return obj;
  }
}
const prototype = PrivateChannelSortStore.prototype;
PrivateChannelSortStore.displayName = "PrivateChannelSortStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleCacheLoaded,
  CACHE_LOADED_LAZY: handleCacheLoaded,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((hasFlag) => {
      if (!hasFlag.hasFlag(constants.UNLISTED)) {
        const hasItem = isPrivate(hasFlag.type) || map.has(hasFlag.id);
        if (hasItem) {
          const result = map.set(hasFlag.id, makeSortedChannel(hasFlag));
        }
      }
    });
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = isPrivate(channel.type);
    if (tmp) {
      let tmp4 = channel.id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (tmp4) {
        const tmp7 = !channel.hasFlag(ChannelFlags.UNLISTED);
        if (tmp7) {
          const result = secondaryIndexMap.set(channel.id, makeSortedChannel(channel));
        }
        tmp4 = tmp7;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return secondaryIndexMap.delete(channel.channel.id);
  },
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    channelId = channelId.channelId;
    const message = channelId.message;
    const obj = secondaryIndexMap;
    if (secondaryIndexMap.has(channelId)) {
      const channel = ChannelStore.getChannel(channelId);
      const result = null != channel && obj.set(channelId, makeSortedChannel(channel, message.id));
      return result;
    } else {
      return false;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return secondaryIndexMap.delete(guild.guild.id);
  },
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
  }
};
const privateChannelSortStore = new PrivateChannelSortStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default privateChannelSortStore;
