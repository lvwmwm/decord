// Module ID: 12517
// Function ID: 95973
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12517 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resetStore() {
  let closure_11 = {};
  let closure_12 = {};
  let closure_13 = {};
  let closure_14 = {};
}
function truncateOldMessageData(arg0) {
  if (null != closure_12[arg0]) {
    let nowResult = globalThis;
    const _Date2 = Date;
    const importDefault = importDefault(dependencyMap[8]).fromTimestamp(Date.now() - closure_10);
    const obj = importDefault(dependencyMap[8]);
    const findIndexResult = importDefault(dependencyMap[9]).findIndex(arr, (id) => callback(closure_1[8]).compare(id.id, callback) > 0);
    if (-1 === findIndexResult) {
      closure_12[arg0] = [];
    } else {
      const _Math = Math;
      const bound = Math.max(findIndexResult, arr.length - 26);
      closure_12[arg0] = importDefault(dependencyMap[9]).slice(arr, bound);
      const arr2 = importDefault(dependencyMap[9]);
    }
    const _Date = nowResult.Date;
    nowResult = _Date.now();
    closure_13[arg0] = nowResult;
    const obj2 = importDefault(dependencyMap[9]);
  }
}
function addMessage(arg0, arg1, id, userId) {
  let obj = closure_11[arg0];
  obj.add(arg1);
  let tmp3 = null == tmp2;
  if (!tmp3) {
    const _Date = Date;
    const sum = tmp2 + 300000;
    tmp3 = sum > Date.now();
  }
  if (tmp3) {
    truncateOldMessageData(arg1);
  }
  if (null == closure_12[arg1]) {
    closure_12[arg1] = [];
  }
  let arr = closure_12[arg1];
  obj = { id, userId };
  arr = arr.push(obj);
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  delete r3[r2];
  delete r1[r0];
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const isGuildHomeChannel = arg1(dependencyMap[7]).isGuildHomeChannel;
let closure_10 = 900000;
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let tmp2 = (Store) => {
  class ActiveChannelsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ActiveChannelsStore);
      obj = closure_5(ActiveChannelsStore);
      tmp2 = closure_4;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ActiveChannelsStore;
  callback2(ActiveChannelsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getActiveChannelsFetchStatus",
    value(arg0) {
      return closure_14[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveChannelIds",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannelMessageData",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[4] = {
    key: "shouldFetch",
    value(arg0) {
      let tmp = null == closure_11[arg0];
      if (tmp) {
        tmp = !(null != closure_14[arg0] && closure_14[arg0].loading);
        const tmp4 = null != closure_14[arg0] && closure_14[arg0].loading;
      }
      return tmp;
    }
  };
  return callback(ActiveChannelsStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "ActiveChannelsStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CHANNEL_SELECT: function handleRefreshChannels(guildId) {
    guildId = guildId.guildId;
    if (isGuildHomeChannel(guildId.channelId)) {
      if (null != guildId) {
        if (null == closure_11[guildId]) {
          return false;
        } else {
          const item = arr.forEach((arg0) => {
            callback(arg0);
            let length;
            if (null != closure_12[arg0]) {
              length = arr.length;
            }
            if (0 === length) {
              delete r1[r2];
            }
          });
          const _Array = Array;
          const obj = importDefault(dependencyMap[9]);
          const found = importDefault(dependencyMap[9]).chain(Array.from(arr)).filter((arg0) => arg0 in closure_12);
          const chainResult = importDefault(dependencyMap[9]).chain(Array.from(arr));
          const _Set = Set;
          const set = new Set(found.sortBy((arg0) => {
            let length;
            if (null != closure_12[arg0]) {
              length = arr.length;
            }
            let num = 0;
            if (null != length) {
              num = length;
            }
            return -num;
          }).value());
          closure_11[guildId] = set;
        }
      }
    }
    return false;
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    let author;
    let channelId;
    let id;
    let message;
    ({ channelId, message } = optimistic);
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        const channel = channel.getChannel(channelId);
        if (null == channel) {
          return false;
        } else {
          const guild_id = channel.guild_id;
          let tmp4 = null != guild_id;
          if (tmp4) {
            if (null != closure_11[guild_id]) {
              ({ id, author } = message);
              id = undefined;
              if (null != author) {
                id = author.id;
              }
              addMessage(guild_id, channelId, id, id);
              const tmp7 = addMessage;
            }
            tmp4 = tmp6;
          }
          return tmp4;
        }
      }
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete r1[r0];
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  ACTIVE_CHANNELS_FETCH_START: function handleActiveChannelsFetchStart(guildId) {
    closure_14[guildId.guildId] = { fetchedAt: Date.now() };
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function handleActiveChannelsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    const importDefault = guildId;
    const channels = guildId.channels;
    const obj = { "Null": "L", "Null": "L", fetchedAt: Date.now() };
    closure_14[guildId] = obj;
    closure_11[guildId] = new Set();
    const item = channels.forEach((arg0) => {
      let messages;
      ({ channel_id: closure_0, messages } = arg0);
      const item = messages.forEach((message_id) => {
        callback(closure_0, closure_0, message_id.message_id, message_id.user_id);
      });
    });
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function handleActiveChannelsFetchFailure(error) {
    const obj = { "Null": true, "Null": true, "Null": true, error: error.error };
    closure_14[error.guildId] = obj;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const guildId = guildId.getGuildId();
    if (null != guildId) {
      let items = tmp7;
      if (null == closure_11[guildId]) {
        items = [];
      }
      const reduced = Array.from(items).reduce((arg0, arg1) => {
        let items = obj[arg1];
        if (null == items) {
          items = [];
        }
        arg0[arg1] = items;
        return arg0;
      }, {});
      let fetchedAt;
      resetStore();
      const _Date = Date;
      const timestamp = Date.now();
      if (null != closure_14[guildId]) {
        fetchedAt = tmp5.fetchedAt;
      }
      let num = 0;
      if (null != fetchedAt) {
        num = fetchedAt;
      }
      if (timestamp - num < closure_10) {
        let obj = {};
        obj[guildId] = tmp5;
        closure_14 = obj;
        obj = {};
        obj[guildId] = tmp7;
        closure_11 = obj;
        obj = {};
        const merged = Object.assign(reduced);
        let closure_12 = obj;
      }
      const arr = Array.from(items);
    } else {
      resetStore();
    }
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_home/ActiveChannelsStore.tsx");

export default tmp2;
export const MAX_STORED_MESSAGES = 26;
