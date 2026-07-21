// Module ID: 4950
// Function ID: 42466
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4950 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function clearSpeakingFlagsInContext(arg0, arg1) {
  const value = map.get(arg0);
  if (null == value) {
    return false;
  } else {
    if (0 === value.size) {
      map.delete(arg0);
    }
    return value.delete(arg1);
  }
}
function hasSpeakingFlagInContext(arg0, arg1, arg2) {
  let value = map.get(arg0);
  let flags;
  if (null != value) {
    value = value.get(arg1);
    if (null != value) {
      flags = value.flags;
    }
  }
  if (null == flags) {
    flags = constants.NONE;
  }
  return (flags & arg2) === arg2;
}
function anyoneHasFlagInContext(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const value = map.get(arg0);
  if (null == value) {
    return false;
  } else {
    const tmp3 = _createForOfIteratorHelperLoose(value);
    let iter = tmp3();
    if (!iter.done) {
      while (true) {
        let tmp4 = callback3;
        let tmp5 = callback3(iter.value, 2);
        if (!flag) {
          if ((tmp5[1].flags & arg1) === arg1) {
            break;
          }
        } else {
          let tmp7 = closure_17;
        }
        let iter2 = tmp3();
        iter = iter2;
      }
      return true;
    }
    return false;
  }
}
function setSpeakingFlagForUserInContext(context, userId, flags, voiceDb) {
  let num = voiceDb;
  if (voiceDb === undefined) {
    num = -Infinity;
  }
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  let value = map.get(DEFAULT);
  if (null == value) {
    const _Map = Map;
    const map = new Map();
    const result = map.set(DEFAULT, map);
    value = map;
  }
  value = value.get(userId);
  flags = undefined;
  if (null != value) {
    flags = value.flags;
  }
  let num2 = 0;
  if (null != flags) {
    num2 = flags;
  }
  if (0 === num2) {
    if (0 === flags) {
      return false;
    }
  }
  if (0 === flags) {
    value.delete(userId);
    if (0 === value.size) {
      map.delete(context);
    }
  } else {
    let since;
    if (null != value) {
      since = value.since;
    }
    let tmp12 = null;
    if (null != since) {
      tmp12 = since;
    }
    if ((num2 & constants.VOICE) === constants.VOICE !== (flags & constants.VOICE) === constants.VOICE) {
      let timestamp = null;
      if (tmp17) {
        const _Date = Date;
        timestamp = Date.now();
      }
      tmp12 = timestamp;
    }
    const obj = { flags, since: tmp12, voiceDb: num };
    const result1 = value.set(userId, obj);
  }
  return true;
}
function handleConnectionOpen(user) {
  const id = user.user.id;
  const sessionId = user.sessionId;
  let closure_19 = null;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const Permissions = arg1(dependencyMap[10]).Permissions;
({ SpeakingFlags: closure_14, MediaEngineContextTypes: closure_15 } = arg1(dependencyMap[11]));
const map = new Map();
let closure_17 = null;
let closure_18 = null;
let closure_19 = null;
let closure_20 = false;
let tmp4 = (Store) => {
  class SpeakingStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SpeakingStore);
      obj = closure_6(SpeakingStore);
      tmp2 = closure_5;
      if (closure_21()) {
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
  const importDefault = SpeakingStore;
  callback2(SpeakingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.mustEmitChanges((type) => {
        let tmp = "CONNECTION_OPEN" !== type.type;
        if (tmp) {
          tmp = "VOICE_STATE_UPDATES" !== type.type;
        }
        return tmp;
      });
      this.waitFor(closure_9, closure_10, closure_11, closure_12);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getSpeakingDuration",
    value(arg0, arg1) {
      let DEFAULT = arg2;
      if (arg2 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      let value = store.get(DEFAULT);
      let since;
      if (null != value) {
        value = value.get(arg0);
        if (null != value) {
          since = value.since;
        }
      }
      let num = 0;
      if (null != since) {
        num = arg1 - since;
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSpeakers",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      const SpeakingStore = DEFAULT;
      const value = store.get(DEFAULT);
      let keys;
      if (null != value) {
        keys = value.keys();
      }
      if (null == keys) {
        keys = [];
      }
      return Array.from(keys).filter((arg0) => callback(DEFAULT, arg0, constants.VOICE));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSpeaking",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      return callback4(DEFAULT, arg0, constants.VOICE);
    }
  };
  items[4] = {
    key: "isPrioritySpeaker",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      return callback4(DEFAULT, arg0, constants.PRIORITY);
    }
  };
  items[5] = {
    key: "isSoundSharing",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      return callback4(DEFAULT, arg0, constants.SOUNDSHARE);
    }
  };
  items[6] = {
    key: "isAnyoneElseSpeaking",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      return callback5(DEFAULT, constants.VOICE, true);
    }
  };
  items[7] = {
    key: "isCurrentUserSpeaking",
    value() {
      let DEFAULT = arg0;
      const self = this;
      if (arg0 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      let isSpeakingResult = null != closure_17;
      if (isSpeakingResult) {
        isSpeakingResult = self.isSpeaking(closure_17, DEFAULT);
      }
      return isSpeakingResult;
    }
  };
  items[8] = {
    key: "isCurrentUserPTTActive",
    value() {
      return closure_20;
    }
  };
  items[9] = {
    key: "isAnyonePrioritySpeaking",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      return callback5(DEFAULT, constants.VOICE | constants.PRIORITY);
    }
  };
  items[10] = {
    key: "isCurrentUserPrioritySpeaker",
    value() {
      let DEFAULT = arg0;
      const self = this;
      if (arg0 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      let isPrioritySpeakerResult = null != closure_17;
      if (isPrioritySpeakerResult) {
        isPrioritySpeakerResult = self.isPrioritySpeaker(closure_17, DEFAULT);
      }
      return isPrioritySpeakerResult;
    }
  };
  items[11] = {
    key: "isCurrentUserPrioritySpeaking",
    value() {
      let DEFAULT = arg0;
      const self = this;
      if (arg0 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      let isPrioritySpeakerResult = null != closure_17;
      if (isPrioritySpeakerResult) {
        isPrioritySpeakerResult = self.isPrioritySpeaker(closure_17, DEFAULT);
      }
      if (isPrioritySpeakerResult) {
        isPrioritySpeakerResult = self.isSpeaking(closure_17, DEFAULT);
      }
      return isPrioritySpeakerResult;
    }
  };
  items[12] = {
    key: "getVoiceVolume",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants2.DEFAULT;
      }
      const config = SpeakingStore(closure_2[13]).getConfig({ location: "SpeakingStore" });
      let num = -Infinity;
      if (config.enabled) {
        num = -Infinity;
        if (!config.disableUI) {
          let value = store.get(DEFAULT);
          let voiceDb;
          if (null != value) {
            value = value.get(arg0);
            if (null != value) {
              voiceDb = value.voiceDb;
            }
          }
          num = -Infinity;
          if (null != voiceDb) {
            num = voiceDb;
          }
        }
      }
      return num;
    }
  };
  return callback(SpeakingStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp4.displayName = "SpeakingStore";
tmp4 = new tmp4(importDefault(dependencyMap[15]), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  SPEAKING: function handleSpeaking(arg0) {
    let context;
    let speakingFlags;
    let userId;
    let voiceDb;
    ({ context, userId, speakingFlags, voiceDb } = arg0);
    let num = speakingFlags;
    if ((speakingFlags & constants.PRIORITY) === constants.PRIORITY) {
      const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      if (null != channel) {
        let obj = importAll(dependencyMap[12]);
        obj = { permission: Permissions.PRIORITY_SPEAKER, user: userId, context: channel };
        if (obj.can(obj)) {
          store.setCanHavePriority(userId, true);
          num = speakingFlags;
        }
      }
      store.setCanHavePriority(userId, false);
      num = speakingFlags & ~constants.PRIORITY;
    }
    if ((num & constants.HIDDEN) === constants.HIDDEN) {
      num = 0;
    }
    return setSpeakingFlagForUserInContext(context, userId, num, voiceDb);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, arg1) => {
      let channelId;
      let sessionId;
      let userId;
      ({ userId, channelId, sessionId } = arg1);
      let tmp2 = userId === closure_17;
      if (tmp2) {
        tmp2 = sessionId === closure_18;
      }
      if (tmp2) {
        let tmp4 = null;
        if (null != channelId) {
          tmp4 = channelId;
        }
      }
      let flag = false;
      if (tmp4 !== tmp4) {
        flag = set.delete(constants.DEFAULT) || false;
        const tmp7 = set.delete(constants.DEFAULT) || false;
      }
      if (null == channelId) {
        if (userId !== closure_17) {
          let tmp23 = callback(constants.DEFAULT, userId) || flag;
        }
        tmp23 = set.delete(constants.DEFAULT) || flag;
        const tmp26 = set.delete(constants.DEFAULT) || flag;
      } else {
        if (userId === closure_17) {
          if (sessionId !== closure_18) {
            let tmp12 = set.delete(constants.DEFAULT) || flag;
            const tmp18 = set.delete(constants.DEFAULT) || flag;
          }
          if (!tmp12) {
            tmp12 = arg0;
          }
          return tmp12;
        }
        let tmp10 = userId !== closure_17;
        if (tmp10) {
          tmp10 = channelId !== channelId.getChannelId();
        }
        tmp12 = flag;
        if (tmp10) {
          tmp12 = callback(constants.DEFAULT, userId) || flag;
          const tmp15 = callback(constants.DEFAULT, userId) || flag;
        }
      }
    }, false);
  },
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange(isActive) {
    isActive = isActive.isActive;
  }
});
const obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  SPEAKING: function handleSpeaking(arg0) {
    let context;
    let speakingFlags;
    let userId;
    let voiceDb;
    ({ context, userId, speakingFlags, voiceDb } = arg0);
    let num = speakingFlags;
    if ((speakingFlags & constants.PRIORITY) === constants.PRIORITY) {
      const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      if (null != channel) {
        let obj = importAll(dependencyMap[12]);
        obj = { permission: Permissions.PRIORITY_SPEAKER, user: userId, context: channel };
        if (obj.can(obj)) {
          store.setCanHavePriority(userId, true);
          num = speakingFlags;
        }
      }
      store.setCanHavePriority(userId, false);
      num = speakingFlags & ~constants.PRIORITY;
    }
    if ((num & constants.HIDDEN) === constants.HIDDEN) {
      num = 0;
    }
    return setSpeakingFlagForUserInContext(context, userId, num, voiceDb);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, arg1) => {
      let channelId;
      let sessionId;
      let userId;
      ({ userId, channelId, sessionId } = arg1);
      let tmp2 = userId === closure_17;
      if (tmp2) {
        tmp2 = sessionId === closure_18;
      }
      if (tmp2) {
        let tmp4 = null;
        if (null != channelId) {
          tmp4 = channelId;
        }
      }
      let flag = false;
      if (tmp4 !== tmp4) {
        flag = set.delete(constants.DEFAULT) || false;
        const tmp7 = set.delete(constants.DEFAULT) || false;
      }
      if (null == channelId) {
        if (userId !== closure_17) {
          let tmp23 = callback(constants.DEFAULT, userId) || flag;
        }
        tmp23 = set.delete(constants.DEFAULT) || flag;
        const tmp26 = set.delete(constants.DEFAULT) || flag;
      } else {
        if (userId === closure_17) {
          if (sessionId !== closure_18) {
            let tmp12 = set.delete(constants.DEFAULT) || flag;
            const tmp18 = set.delete(constants.DEFAULT) || flag;
          }
          if (!tmp12) {
            tmp12 = arg0;
          }
          return tmp12;
        }
        let tmp10 = userId !== closure_17;
        if (tmp10) {
          tmp10 = channelId !== channelId.getChannelId();
        }
        tmp12 = flag;
        if (tmp10) {
          tmp12 = callback(constants.DEFAULT, userId) || flag;
          const tmp15 = callback(constants.DEFAULT, userId) || flag;
        }
      }
    }, false);
  },
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange(isActive) {
    isActive = isActive.isActive;
  }
};
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("stores/SpeakingStore.tsx");

export default tmp4;
