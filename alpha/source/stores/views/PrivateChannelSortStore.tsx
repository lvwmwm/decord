// Module ID: 6909
// Function ID: 6910
// Name: PrivateChannelSortStore
// Dependencies: [6060, 6061, 2067, 2063, 2086, 6040, 5971, 1389, 11, 4702, 4659, 6910, 504, 584, 2]

// Module 6909 (PrivateChannelSortStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRecord from "ChannelRecord" /* 2067 */;
import _modDef4659 from "module_4659" /* 4659 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4702 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6910 */;
import MessageRequestStore from "MessageRequestStore" /* 6060 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6061 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
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
      const obj = _modDef4659(isMessageRequestTimestamp);
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
const unpackModuleId = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
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
let closure_17 = [];
const f39894 = () => {

};
const Store = get_initializedDefault.Store;
class PrivateChannelSortStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildStore, MessageRequestStore, ReadStateStore, SpamMessageRequestStore, UserGuildSettingsStore, UserStore);
    const items = [UserGuildSettingsStore, MessageRequestStore];
    this.syncWith(items, handleConnectionOpen);
  }
  getPrivateChannelIds() {
    if (typeof f39894 === "function") {
      values = secondaryIndexMap.values(constants.FAVORITE);
      values2 = secondaryIndexMap.values(constants.DEFAULT);
      const tmp4 = values === values && values2 === values2;
      if (!tmp4) {
        closure_17 = [];
        const item = values.forEach((channelId) => closure_1_17.push(channelId.channelId));
        const item1 = values2.forEach((channelId) => closure_1_17.push(channelId.channelId));
      }
      return closure_17;
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
    const item = channels.forEach((type) => {
      const hasItem = isPrivate(type.type) || map.has(type.id);
      if (hasItem) {
        const result = map.set(type.id, makeSortedChannel(type));
      }
    });
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = isPrivate(channel.type);
    if (tmp) {
      const tmp4 = channel.id !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (tmp4) {
        const result = secondaryIndexMap.set(channel.id, makeSortedChannel(channel));
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
