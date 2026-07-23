// Module ID: 5603
// Function ID: 47596
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5604, 5605, 1352, 1348, 1838, 4142, 4325, 1849, 21, 3754, 3712, 5606, 566, 686, 2]

// Module 5603 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_5 from "t";
import initialize from "initialize";
import dispatcher from "dispatcher";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { isPrivate } from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeSortedChannel(channel, id) {
  let tmp = id;
  if (id === undefined) {
    id = closure_13.lastMessageId(channel.id);
    if (null == id) {
      id = channel.lastMessageId;
    }
    if (null == id) {
      id = channel.id;
    }
    const isMessageRequestTimestamp = channel.isMessageRequestTimestamp;
    let tmp2 = id;
    if (null != isMessageRequestTimestamp) {
      let obj = importDefault(3712)(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      let fromTimestampResult = importDefault(21).fromTimestamp(valueOfResult);
      const obj2 = importDefault(21);
      if (obj3.compare(id, fromTimestampResult) > 0) {
        fromTimestampResult = id;
      }
      tmp2 = fromTimestampResult;
      obj3 = importDefault(21);
    }
    tmp = tmp2;
  }
  obj = { channelId: channel.id, lastMessageId: tmp, isFavorite: messagesFavorite.isMessagesFavorite(channel.id) };
  let isMessageRequestResult = messageRequest.isMessageRequest(channel.id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = spam.isSpam(channel.id);
  }
  obj.isRequest = isMessageRequestResult;
  return obj;
}
function handleConnectionOpen() {
  secondaryIndexMap.clear();
  const values = Object.values(store.getMutablePrivateChannels());
  const item = values.forEach((id) => {
    const result = outer1_17.set(id.id, outer1_23(id));
  });
}
function handleCacheLoaded() {
  const mutablePrivateChannels = store.getMutablePrivateChannels();
  for (const key10006 in mutablePrivateChannels) {
    let tmp2 = key10006;
    let tmp3 = secondaryIndexMap;
    let tmp4 = makeSortedChannel;
    let result = secondaryIndexMap.set(key10006, makeSortedChannel(mutablePrivateChannels[key10006]));
    continue;
  }
}
let closure_16 = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap(function indexBy(value) {
  if (value.isRequest) {
    let items = [];
  } else {
    items = [tmp ? closure_16.FAVORITE : closure_16.DEFAULT];
  }
  return items;
}, function sortBy(arr, items, arg2) {
  return -importDefault(21).extractTimestamp(arr.lastMessageId);
});
let closure_18 = [];
let closure_19 = [];
let closure_20 = [];
const f47606 = () => {
  let values = secondaryIndexMap.values(constants.FAVORITE);
  values = secondaryIndexMap.values(constants.DEFAULT);
  let tmp = values === values;
  if (tmp) {
    tmp = values === values;
  }
  if (!tmp) {
    let closure_20 = [];
    const item = values.forEach((channelId) => arr.push(channelId.channelId));
    const item1 = values.forEach((channelId) => arr.push(channelId.channelId));
  }
  return closure_20;
};
let tmp3 = ((Store) => {
  class PrivateChannelSortStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, PrivateChannelSortStore);
      obj = outer1_6(PrivateChannelSortStore);
      tmp2 = outer1_5;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PrivateChannelSortStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_12, outer1_8, outer1_13, outer1_9, outer1_14, outer1_15);
      const items = [outer1_14, outer1_8];
      this.syncWith(items, outer1_24);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getPrivateChannelIds",
    value() {
      return outer1_21();
    }
  };
  items[1] = obj;
  obj = {
    key: "getSortedChannels",
    value() {
      const items = [outer1_17.values(outer1_16.FAVORITE), outer1_17.values(outer1_16.DEFAULT)];
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "serializeForOverlay",
    value() {
      const obj = {};
      const values = outer1_17.values();
      const item = values.forEach((channelId) => {
        obj[channelId.channelId] = channelId.lastMessageId;
      });
      return obj;
    }
  };
  return callback(PrivateChannelSortStore, items);
})(require("initialize").Store);
tmp3.displayName = "PrivateChannelSortStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleCacheLoaded,
  CACHE_LOADED_LAZY: handleCacheLoaded,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((type) => {
      let hasItem = outer1_10(type.type);
      if (!hasItem) {
        hasItem = outer1_17.has(type.id);
      }
      if (hasItem) {
        const result = outer1_17.set(type.id, outer1_23(type));
      }
    });
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const tmp = !isPrivate(channel.type);
    let tmp2 = !tmp;
    if (!tmp) {
      const tmp5 = channel.id !== require(5606) /* FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID */.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (tmp5) {
        const result = secondaryIndexMap.set(channel.id, makeSortedChannel(channel));
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return secondaryIndexMap.delete(channel.channel.id);
  },
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    channelId = channelId.channelId;
    if (secondaryIndexMap.has(channelId)) {
      const channel = store.getChannel(channelId);
      let result = null != channel;
      if (result) {
        result = secondaryIndexMap.set(channelId, makeSortedChannel(channel, channelId.message.id));
      }
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
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default tmp3;
