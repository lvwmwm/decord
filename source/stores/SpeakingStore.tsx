// Module ID: 4952
// Function ID: 42500
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1348, 4177, 4202, 1906, 653, 4191, 3763, 4953, 566, 686, 2]

// Module 4952 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import DesktopSources from "DesktopSources";

let closure_14;
let closure_15;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
          let tmp7 = c17;
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
    map = new Map();
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
  let c19 = null;
}
({ SpeakingFlags: closure_14, MediaEngineContextTypes: closure_15 } = DesktopSources);
let map = new Map();
let c17 = null;
let c18 = null;
let c19 = null;
let c20 = false;
let tmp4 = ((Store) => {
  class SpeakingStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SpeakingStore);
      obj = outer1_6(SpeakingStore);
      tmp2 = outer1_5;
      if (outer1_21()) {
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
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_12);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getSpeakingDuration",
    value(arg0, arg1) {
      let DEFAULT = arg2;
      if (arg2 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      let value = outer1_16.get(DEFAULT);
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
        DEFAULT = outer1_15.DEFAULT;
      }
      const value = outer1_16.get(DEFAULT);
      let keys;
      if (null != value) {
        keys = value.keys();
      }
      if (null == keys) {
        keys = [];
      }
      return Array.from(keys).filter((arg0) => outer2_25(DEFAULT, arg0, outer2_14.VOICE));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSpeaking",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      return outer1_25(DEFAULT, arg0, outer1_14.VOICE);
    }
  };
  items[4] = {
    key: "isPrioritySpeaker",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      return outer1_25(DEFAULT, arg0, outer1_14.PRIORITY);
    }
  };
  items[5] = {
    key: "isSoundSharing",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      return outer1_25(DEFAULT, arg0, outer1_14.SOUNDSHARE);
    }
  };
  items[6] = {
    key: "isAnyoneElseSpeaking",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      return outer1_26(DEFAULT, outer1_14.VOICE, true);
    }
  };
  items[7] = {
    key: "isCurrentUserSpeaking",
    value() {
      let DEFAULT = arg0;
      const self = this;
      if (arg0 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      let isSpeakingResult = null != outer1_17;
      if (isSpeakingResult) {
        isSpeakingResult = self.isSpeaking(outer1_17, DEFAULT);
      }
      return isSpeakingResult;
    }
  };
  items[8] = {
    key: "isCurrentUserPTTActive",
    value() {
      return outer1_20;
    }
  };
  items[9] = {
    key: "isAnyonePrioritySpeaking",
    value() {
      let DEFAULT = arg0;
      if (arg0 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      return outer1_26(DEFAULT, outer1_14.VOICE | outer1_14.PRIORITY);
    }
  };
  items[10] = {
    key: "isCurrentUserPrioritySpeaker",
    value() {
      let DEFAULT = arg0;
      const self = this;
      if (arg0 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      let isPrioritySpeakerResult = null != outer1_17;
      if (isPrioritySpeakerResult) {
        isPrioritySpeakerResult = self.isPrioritySpeaker(outer1_17, DEFAULT);
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
        DEFAULT = outer1_15.DEFAULT;
      }
      let isPrioritySpeakerResult = null != outer1_17;
      if (isPrioritySpeakerResult) {
        isPrioritySpeakerResult = self.isPrioritySpeaker(outer1_17, DEFAULT);
      }
      if (isPrioritySpeakerResult) {
        isPrioritySpeakerResult = self.isSpeaking(outer1_17, DEFAULT);
      }
      return isPrioritySpeakerResult;
    }
  };
  items[12] = {
    key: "getVoiceVolume",
    value(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = outer1_15.DEFAULT;
      }
      const config = SpeakingStore(outer1_2[13]).getConfig({ location: "SpeakingStore" });
      let num = -Infinity;
      if (config.enabled) {
        num = -Infinity;
        if (!config.disableUI) {
          let value = outer1_16.get(DEFAULT);
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
})(require("initialize").Store);
tmp4.displayName = "SpeakingStore";
tmp4 = new tmp4(require("dispatcher"), {
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
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      if (null != channel) {
        let obj = importAll(3763);
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
      let tmp2 = userId === outer1_17;
      if (tmp2) {
        tmp2 = sessionId === outer1_18;
      }
      if (tmp2) {
        let tmp4 = null;
        if (null != channelId) {
          tmp4 = channelId;
        }
        const outer1_19 = tmp4;
      }
      let flag = false;
      if (outer1_19 !== outer1_19) {
        flag = outer1_16.delete(outer1_15.DEFAULT) || false;
        const tmp7 = outer1_16.delete(outer1_15.DEFAULT) || false;
      }
      if (null == channelId) {
        if (userId !== outer1_17) {
          let tmp23 = outer1_24(outer1_15.DEFAULT, userId) || flag;
        }
        tmp23 = outer1_16.delete(outer1_15.DEFAULT) || flag;
        const tmp26 = outer1_16.delete(outer1_15.DEFAULT) || flag;
      } else {
        if (userId === outer1_17) {
          if (sessionId !== outer1_18) {
            let tmp12 = outer1_16.delete(outer1_15.DEFAULT) || flag;
            const tmp18 = outer1_16.delete(outer1_15.DEFAULT) || flag;
          }
          if (!tmp12) {
            tmp12 = arg0;
          }
          return tmp12;
        }
        let tmp10 = userId !== outer1_17;
        if (tmp10) {
          tmp10 = channelId !== outer1_11.getChannelId();
        }
        tmp12 = flag;
        if (tmp10) {
          tmp12 = outer1_24(outer1_15.DEFAULT, userId) || flag;
          const tmp15 = outer1_24(outer1_15.DEFAULT, userId) || flag;
        }
      }
    }, false);
  },
  PUSH_TO_TALK_STATE_CHANGE: function handlePushToTalkStateChange(isActive) {
    isActive = isActive.isActive;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SpeakingStore.tsx");

export default tmp4;
