// Module ID: 11135
// Function ID: 86584
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 6927, 653, 664, 5604, 507, 686, 566, 2]

// Module 11135 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { SlowmodeType } from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getTypingUsers(channelId) {
  let tmp = dependencyMap[channelId];
  if (null == tmp) {
    tmp = closure_17;
  }
  return tmp;
}
function _getTypingUsersByGuild(guildId) {
  let tmp = dependencyMap2[guildId];
  if (null == tmp) {
    tmp = closure_18;
  }
  return tmp;
}
function getGuildIdForChannel(channelId) {
  channel = channel.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let tmp2;
  if (null != guildId) {
    tmp2 = guildId;
  }
  return tmp2;
}
function handleTypingStart(arg0) {
  let channelId;
  let guildId;
  let userId;
  ({ channelId, userId, guildId } = arg0);
  let obj = {};
  const merged = Object.assign(_getTypingUsers(channelId));
  clearTimeout(obj[userId]);
  const tmp3 = (function scheduleClear(channelId, userId, guildId) {
    let closure_0 = channelId;
    let closure_1 = userId;
    let closure_2 = guildId;
    return setTimeout(() => {
      let obj = outer2_1(outer2_2[12]);
      obj = { type: "TYPING_STOP", channelId: closure_0, userId: closure_1, guildId: closure_2 };
      obj.dispatch(obj);
    }, outer1_13);
  })(channelId, userId, guildId);
  obj[userId] = tmp3;
  closure_15[channelId] = obj;
  if (null != guildId) {
    obj = {};
    const merged1 = Object.assign(_getTypingUsersByGuild(guildId));
    obj = {};
    let tmp7 = obj[channelId];
    if (null == tmp7) {
      tmp7 = closure_17;
    }
    const merged2 = Object.assign(tmp7);
    const _clearTimeout = clearTimeout;
    clearTimeout(obj[userId]);
    obj[userId] = tmp3;
    obj[channelId] = obj;
    closure_16[guildId] = obj;
  }
}
function handleTypingStop(arg0) {
  let channelId;
  let guildId;
  let userId;
  ({ channelId, userId, guildId } = arg0);
  if (null != dependencyMap[channelId]) {
    if (null != tmp6[userId]) {
      let obj = {};
      const merged = Object.assign(tmp6);
      const _clearTimeout = clearTimeout;
      clearTimeout(obj[userId]);
      delete tmp5[tmp3];
      dependencyMap[channelId] = obj;
      if (null != guildId) {
        if (null != dependencyMap2[guildId]) {
          if (null != tmp22[channelId]) {
            if (null != tmp23[userId]) {
              obj = {};
              const merged1 = Object.assign(tmp23);
              delete tmp5[tmp3];
              obj = {};
              const merged2 = Object.assign(tmp22);
              const _Object = Object;
              if (0 === Object.keys(obj).length) {
                delete tmp3[tmp4];
              } else {
                obj[channelId] = obj;
              }
              const _Object2 = Object;
              if (0 === Object.keys(obj).length) {
                delete tmp[tmp2];
              } else {
                dependencyMap2[guildId] = obj;
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function handleConnectionOpen() {
  let closure_15 = {};
  let closure_16 = {};
}
let closure_13 = 10 * require("set").Millis.SECOND;
let closure_14 = 1.5 * require("set").Millis.SECOND;
let closure_15 = {};
let closure_16 = {};
let closure_17 = Object.freeze({});
let closure_18 = Object.freeze({});
let tmp2 = ((Store) => {
  class TypingStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, TypingStore);
      obj = outer1_6(TypingStore);
      tmp2 = outer1_5;
      if (outer1_19()) {
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
  callback2(TypingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTypingUsers",
    value(arg0) {
      return outer1_20(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getTypingUsersByGuild",
    value(arg0) {
      return outer1_21(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isTyping",
    value(arg0, arg1) {
      return null != outer1_20(arg0)[arg1];
    }
  };
  return callback(TypingStore, items);
})(require("initialize").Store);
tmp2.displayName = "TypingStore";
tmp2 = new tmp2(require("dispatcher"), {
  TYPING_START: handleTypingStart,
  TYPING_STOP: handleTypingStop,
  TYPING_START_LOCAL: function handleTypingStartLocal(channelId) {
    channelId = channelId.channelId;
    const id = store.getId();
    if (null == id) {
      return false;
    } else if (channelId === channelId(5604).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      return false;
    } else {
      let tmp3 = null != obj;
      if (tmp3) {
        tmp3 = obj.channelId !== channelId;
      }
      if (tmp3) {
        if (null != obj.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj.timeout);
        }
        obj = null;
      }
      const _Date = Date;
      const timestamp = Date.now();
      const result = 0.8 * closure_13;
      if (null != obj) {
        return false;
      }
      if (null == obj) {
        let num3 = closure_14;
      } else {
        num3 = 0;
      }
      const _setTimeout = setTimeout;
      obj = {
        channelId,
        timeout: setTimeout(() => {
            let tmp = null != obj;
            if (tmp) {
              tmp = obj.channelId === channelId;
            }
            if (tmp) {
              tmp = id === outer1_8.getId();
            }
            if (tmp) {
              tmp = null != obj.timeout;
            }
            if (tmp) {
              obj.timeout = null;
              const tmp10 = outer1_20(channelId);
              let num = 0;
              if (tmp10 !== outer1_17) {
                const _Object = Object;
                num = Object.keys(tmp10).length;
              }
              if (num <= 5) {
                const HTTP = channelId(outer1_2[11]).HTTP;
                obj = { url: outer1_11.TYPING(channelId), oldFormErrors: true, rejectWithError: true };
                HTTP.post(obj).then((status) => {
                  if (200 === status.status) {
                    const message_send_cooldown_ms = status.body.message_send_cooldown_ms;
                    let num = 0;
                    if (null != message_send_cooldown_ms) {
                      num = message_send_cooldown_ms;
                    }
                    const thread_create_cooldown_ms = status.body.thread_create_cooldown_ms;
                    let num2 = 0;
                    if (null != thread_create_cooldown_ms) {
                      num2 = thread_create_cooldown_ms;
                    }
                    if (num > 0) {
                      let obj = id(outer2_2[12]);
                      obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: outer1_0, slowmodeType: outer2_10.SendMessage, cooldownMs: num };
                      obj.dispatch(obj);
                    }
                    if (num2 > 0) {
                      obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: outer1_0, slowmodeType: outer2_10.CreateThread, cooldownMs: num2 };
                      id(outer2_2[12]).dispatch(obj);
                      const obj3 = id(outer2_2[12]);
                    }
                  }
                });
                const postResult = HTTP.post(obj);
              }
            }
          }, num3),
        prevSend: timestamp
      };
      obj = { channelId, userId: id, guildId: getGuildIdForChannel(channelId) };
      handleTypingStart(obj);
    }
  },
  TYPING_STOP_LOCAL: function handleTypingStopLocal(channelId) {
    channelId = channelId.channelId;
    const id = store.getId();
    let tmp2 = null != id;
    if (tmp2) {
      let tmp4 = null != config;
      if (tmp4) {
        tmp4 = config.channelId === channelId;
      }
      if (tmp4) {
        tmp4 = null != config.timeout;
      }
      if (tmp4) {
        const _clearTimeout = clearTimeout;
        clearTimeout(config.timeout);
        config = null;
        const obj = { channelId, userId: id, guildId: getGuildIdForChannel(channelId) };
        tmp4 = handleTypingStop(obj);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    let channelId;
    let guildId;
    ({ channelId, guildId } = message);
    const author = message.message.author;
    if (message.optimistic) {
      if (null != config) {
        if (config.channelId === channelId) {
          if (null != config.timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(config.timeout);
          }
          config = null;
        }
      }
    }
    let tmp9Result = null != author;
    if (tmp9Result) {
      const obj = { channelId, userId: author.id };
      if (null == guildId) {
        guildId = getGuildIdForChannel(channelId);
      }
      obj.guildId = guildId;
      tmp9Result = handleTypingStop(obj);
      const tmp9 = handleTypingStop;
    }
    return tmp9Result;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/TypingStore.tsx");

export default tmp2;
