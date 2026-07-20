// Module ID: 11091
// Function ID: 86298
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11091 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getTypingUsers(channelId) {
  let tmp = closure_15[channelId];
  if (null == tmp) {
    tmp = closure_17;
  }
  return tmp;
}
function _getTypingUsersByGuild(guildId) {
  let tmp = closure_16[guildId];
  if (null == tmp) {
    tmp = closure_18;
  }
  return tmp;
}
function getGuildIdForChannel(channelId) {
  const channel = channel.getChannel(channelId);
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
  const tmp3 = function scheduleClear(channelId, userId, guildId) {
    return setTimeout(() => {
      let obj = arg1(arg2[12]);
      obj = { type: "TYPING_STOP", channelId: arg0, userId: arg1, guildId: arg2 };
      obj.dispatch(obj);
    }, closure_13);
  }(channelId, userId, guildId);
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
  if (null != closure_15[channelId]) {
    if (null != tmp[userId]) {
      let obj = {};
      const merged = Object.assign(tmp);
      const _clearTimeout = clearTimeout;
      clearTimeout(obj[userId]);
      delete r7[r4];
      closure_15[channelId] = obj;
      if (null != guildId) {
        if (null != closure_16[guildId]) {
          if (null != tmp17[channelId]) {
            if (null != tmp18[userId]) {
              obj = {};
              const merged1 = Object.assign(tmp18);
              delete r7[r4];
              obj = {};
              const merged2 = Object.assign(tmp17);
              const _Object = Object;
              if (0 === Object.keys(obj).length) {
                delete r4[r6];
              } else {
                obj[channelId] = obj;
              }
              const _Object2 = Object;
              if (0 === Object.keys(obj).length) {
                delete r1[r2];
              } else {
                closure_16[guildId] = obj;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const SlowmodeType = arg1(dependencyMap[7]).SlowmodeType;
const Endpoints = arg1(dependencyMap[8]).Endpoints;
let closure_13 = 10 * importDefault(dependencyMap[9]).Millis.SECOND;
let closure_14 = 1.5 * importDefault(dependencyMap[9]).Millis.SECOND;
let closure_15 = {};
let closure_16 = {};
let closure_17 = Object.freeze({});
let closure_18 = Object.freeze({});
let tmp2 = (Store) => {
  class TypingStore {
    constructor() {
      self = this;
      tmp = closure_3(this, TypingStore);
      obj = closure_6(TypingStore);
      tmp2 = closure_5;
      if (closure_19()) {
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
  const arg1 = TypingStore;
  callback2(TypingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTypingUsers",
    value(arg0) {
      return callback4(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getTypingUsersByGuild",
    value(arg0) {
      return callback5(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isTyping",
    value(arg0, arg1) {
      return null != callback4(arg0)[arg1];
    }
  };
  return callback(TypingStore, items);
}(importDefault(dependencyMap[13]).Store);
tmp2.displayName = "TypingStore";
tmp2 = new tmp2(importDefault(dependencyMap[12]), {
  TYPING_START: handleTypingStart,
  TYPING_STOP: handleTypingStop,
  TYPING_START_LOCAL: function handleTypingStartLocal(channelId) {
    channelId = channelId.channelId;
    const arg1 = channelId;
    const id = store.getId();
    const importDefault = id;
    if (null == id) {
      return false;
    } else if (channelId === arg1(dependencyMap[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
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
        let obj = null;
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
              tmp = id === id.getId();
            }
            if (tmp) {
              tmp = null != obj.timeout;
            }
            if (tmp) {
              obj.timeout = null;
              const tmp10 = callback(channelId);
              let num = 0;
              if (tmp10 !== closure_17) {
                const _Object = Object;
                num = Object.keys(tmp10).length;
              }
              if (num <= 5) {
                const HTTP = channelId(closure_2[11]).HTTP;
                const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_11.TYPING(channelId) };
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
                      let obj = callback(closure_2[12]);
                      obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: closure_0, slowmodeType: closure_10.SendMessage, cooldownMs: num };
                      obj.dispatch(obj);
                    }
                    if (num2 > 0) {
                      obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: closure_0, slowmodeType: closure_10.CreateThread, cooldownMs: num2 };
                      callback(closure_2[12]).dispatch(obj);
                      const obj3 = callback(closure_2[12]);
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
        const config = null;
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
          const config = null;
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
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/TypingStore.tsx");

export default tmp2;
