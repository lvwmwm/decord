// Module ID: 12682
// Function ID: 98450
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 3947, 1355, 21, 22, 566, 686, 2]

// Module 12682 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { isGuildHomeChannel } from "set";

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
  if (null != dependencyMap2[arg0]) {
    let nowResult = globalThis;
    const _Date2 = Date;
    importDefault = importDefault(21).fromTimestamp(Date.now() - c10);
    const obj = importDefault(21);
    const findIndexResult = importDefault(22).findIndex(arr, (id) => callback(outer1_1[8]).compare(id.id, callback) > 0);
    if (-1 === findIndexResult) {
      dependencyMap2[arg0] = [];
    } else {
      const _Math = Math;
      const bound = Math.max(findIndexResult, arr.length - 26);
      dependencyMap2[arg0] = importDefault(22).slice(arr, bound);
      const arr2 = importDefault(22);
    }
    const _Date = nowResult.Date;
    nowResult = _Date.now();
    closure_13[arg0] = nowResult;
    const obj2 = importDefault(22);
  }
}
function addMessage(arg0, arg1, id, userId) {
  let obj = dependencyMap[arg0];
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
  if (null == dependencyMap2[arg1]) {
    dependencyMap2[arg1] = [];
  }
  let arr = dependencyMap2[arg1];
  obj = { id, userId };
  arr = arr.push(obj);
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  delete tmp4[tmp3];
  delete tmp2[tmp];
}
let c10 = 900000;
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let tmp2 = ((Store) => {
  class ActiveChannelsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ActiveChannelsStore);
      obj = outer1_5(ActiveChannelsStore);
      tmp2 = outer1_4;
      if (outer1_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ActiveChannelsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getActiveChannelsFetchStatus",
    value(arg0) {
      return outer1_14[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveChannelIds",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannelMessageData",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[4] = {
    key: "shouldFetch",
    value(arg0) {
      let tmp = null == outer1_11[arg0];
      if (tmp) {
        tmp = !(null != outer1_14[arg0] && outer1_14[arg0].loading);
        const tmp4 = null != outer1_14[arg0] && outer1_14[arg0].loading;
      }
      return tmp;
    }
  };
  return callback(ActiveChannelsStore, items);
})(require("initialize").Store);
tmp2.displayName = "ActiveChannelsStore";
tmp2 = new tmp2(require("dispatcher"), {
  CHANNEL_SELECT: function handleRefreshChannels(guildId) {
    guildId = guildId.guildId;
    if (isGuildHomeChannel(guildId.channelId)) {
      if (null != guildId) {
        if (null == dependencyMap[guildId]) {
          return false;
        } else {
          const item = arr.forEach((arg0) => {
            outer1_17(arg0);
            let length;
            if (null != outer1_12[arg0]) {
              length = arr.length;
            }
            if (0 === length) {
              delete tmp[tmp2];
            }
          });
          const _Array = Array;
          const obj = importDefault(22);
          const found = importDefault(22).chain(Array.from(arr)).filter((arg0) => arg0 in outer1_12);
          const chainResult = importDefault(22).chain(Array.from(arr));
          const _Set = Set;
          const set = new Set(found.sortBy((arg0) => {
            let length;
            if (null != outer1_12[arg0]) {
              length = arr.length;
            }
            let num = 0;
            if (null != length) {
              num = length;
            }
            return -num;
          }).value());
          dependencyMap[guildId] = set;
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
        channel = channel.getChannel(channelId);
        if (null == channel) {
          return false;
        } else {
          const guild_id = channel.guild_id;
          let tmp4 = null != guild_id;
          if (tmp4) {
            if (null != dependencyMap[guild_id]) {
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
    delete tmp2[tmp];
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  ACTIVE_CHANNELS_FETCH_START: function handleActiveChannelsFetchStart(guildId) {
    const obj = { loading: true, error: null, fetchedAt: Date.now() };
    closure_14[guildId.guildId] = obj;
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function handleActiveChannelsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    const channels = guildId.channels;
    const obj = { loading: false, error: null, fetchedAt: Date.now() };
    closure_14[guildId] = obj;
    closure_11[guildId] = new Set();
    let item = channels.forEach((arg0) => {
      let guildId;
      let messages;
      ({ channel_id: guildId, messages } = arg0);
      const item = messages.forEach((message_id) => {
        outer2_18(outer1_0, closure_0, message_id.message_id, message_id.user_id);
      });
    });
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function handleActiveChannelsFetchFailure(error) {
    const obj = { loading: false, error: error.error, fetchedAt: null };
    closure_14[error.guildId] = obj;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    guildId = guildId.getGuildId();
    if (null != guildId) {
      let items = tmp7;
      if (null == obj[guildId]) {
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
      if (null != obj[guildId]) {
        fetchedAt = tmp5.fetchedAt;
      }
      let num = 0;
      if (null != fetchedAt) {
        num = fetchedAt;
      }
      if (timestamp - num < c10) {
        obj = {};
        obj[guildId] = tmp5;
        obj = {};
        obj[guildId] = tmp7;
        obj = {};
        const merged = Object.assign(reduced);
      }
      const arr = Array.from(items);
    } else {
      resetStore();
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_home/ActiveChannelsStore.tsx");

export default tmp2;
export const MAX_STORED_MESSAGES = 26;
