// Module ID: 5601
// Function ID: 47565
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5601 (_isNativeReflectConstruct)
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
      let obj = importDefault(dependencyMap[15])(isMessageRequestTimestamp);
      const valueOfResult = obj.valueOf();
      let fromTimestampResult = importDefault(dependencyMap[13]).fromTimestamp(valueOfResult);
      const obj2 = importDefault(dependencyMap[13]);
      if (obj3.compare(id, fromTimestampResult) > 0) {
        fromTimestampResult = id;
      }
      tmp2 = fromTimestampResult;
      const obj3 = importDefault(dependencyMap[13]);
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
    const result = closure_17.set(id.id, callback(id));
  });
}
function handleCacheLoaded() {
  const mutablePrivateChannels = store.getMutablePrivateChannels();
  for (const key10006 in mutablePrivateChannels) {
    let tmp2 = key10006;
    let tmp3 = closure_17;
    let tmp4 = closure_23;
    let result = closure_17.set(key10006, closure_23(mutablePrivateChannels[key10006]));
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const isPrivate = arg1(dependencyMap[7]).isPrivate;
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = { DEFAULT: "DEFAULT", FAVORITE: "FAVORITE" };
const secondaryIndexMap = new arg1(dependencyMap[14]).SecondaryIndexMap(function indexBy(value) {
  if (value.isRequest) {
    let items = [];
  } else {
    items = [tmp ? closure_16.FAVORITE : closure_16.DEFAULT];
  }
  return items;
}, function sortBy(arr, items, arg2) {
  return -importDefault(dependencyMap[13]).extractTimestamp(arr.lastMessageId);
});
let closure_18 = [];
let closure_19 = [];
let closure_20 = [];
const f47575 = () => {
  let values = secondaryIndexMap.values(constants.FAVORITE);
  values = secondaryIndexMap.values(constants.DEFAULT);
  let tmp = closure_18 === values;
  if (tmp) {
    tmp = closure_19 === values;
  }
  if (!tmp) {
    let closure_20 = [];
    const item = values.forEach((channelId) => arr.push(channelId.channelId));
    closure_18 = values;
    const item1 = values.forEach((channelId) => arr.push(channelId.channelId));
    closure_19 = values;
  }
  return closure_20;
};
let tmp3 = (Store) => {
  class PrivateChannelSortStore {
    constructor() {
      self = this;
      tmp = closure_3(this, PrivateChannelSortStore);
      obj = closure_6(PrivateChannelSortStore);
      tmp2 = closure_5;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PrivateChannelSortStore;
  callback2(PrivateChannelSortStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_12, closure_8, closure_13, closure_9, closure_14, closure_15);
      const items = [closure_14, closure_8];
      this.syncWith(items, closure_24);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getPrivateChannelIds",
    value() {
      return callback3();
    }
  };
  items[1] = obj;
  obj = {
    key: "getSortedChannels",
    value() {
      const items = [closure_17.values(constants.FAVORITE), closure_17.values(constants.DEFAULT)];
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "serializeForOverlay",
    value() {
      const obj = {};
      const PrivateChannelSortStore = obj;
      const values = closure_17.values();
      const item = values.forEach((channelId) => {
        obj[channelId.channelId] = channelId.lastMessageId;
      });
      return obj;
    }
  };
  return callback(PrivateChannelSortStore, items);
}(importDefault(dependencyMap[17]).Store);
tmp3.displayName = "PrivateChannelSortStore";
tmp3 = new tmp3(importDefault(dependencyMap[18]), {
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: handleCacheLoaded,
  CACHE_LOADED_LAZY: handleCacheLoaded,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((type) => {
      let hasItem = callback(type.type);
      if (!hasItem) {
        hasItem = map.has(type.id);
      }
      if (hasItem) {
        const result = map.set(type.id, callback2(type));
      }
    });
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const tmp = !isPrivate(channel.type);
    let tmp2 = !tmp;
    if (!tmp) {
      const tmp5 = channel.id !== arg1(dependencyMap[16]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
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
const result = arg1(dependencyMap[19]).fileFinishedImporting("stores/views/PrivateChannelSortStore.tsx");

export default tmp3;
