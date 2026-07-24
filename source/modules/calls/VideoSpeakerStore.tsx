// Module ID: 10573
// Function ID: 82563
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4149, 1194, 4177, 4952, 4143, 4148, 4194, 22, 566, 686, 2]

// Module 10573 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import importDefaultResult from "apply";

const require = arg1;
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
function updateSpeaker() {
  let iter;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let tmp = null;
  if (null != closure_2) {
    let selectedParticipantId = store.getSelectedParticipantId(closure_2);
    let result = null != selectedParticipantId;
    if (result) {
      result = store.isParticipantPoppedOut(closure_2, selectedParticipantId);
    }
    if (result) {
      selectedParticipantId = null;
    }
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let participant = null;
    if (null != selectedParticipantId) {
      participant = store.getParticipant(closure_2, selectedParticipantId);
    }
    let type;
    if (null != participant) {
      type = participant.type;
    }
    let tmp15 = type !== ParticipantTypes.ACTIVITY;
    if (tmp15) {
      let type1;
      if (null != participant) {
        type1 = participant.type;
      }
      let tmp18 = type1 !== ParticipantTypes.USER;
      if (!tmp18) {
        const voiceState = participant.voiceState;
        tmp18 = null != voiceState && voiceState.selfVideo;
        const tmp19 = null != voiceState && voiceState.selfVideo;
      }
      tmp15 = tmp18;
    }
    let tmp20 = selectedParticipantId;
    if (!tmp15) {
      tmp20 = null;
    }
    let tmp21 = tmp20;
    if (null != lastActiveStream) {
      tmp21 = tmp20;
      if (null == tmp20) {
        let obj = require(4194) /* isStreamKey */;
        const participant1 = store.getParticipant(closure_2, obj.encodeStreamKey(lastActiveStream));
        let id;
        if (null != participant1) {
          id = participant1.id;
        }
        let result1 = null == id;
        if (!result1) {
          result1 = store.isParticipantPoppedOut(closure_2, id);
        }
        tmp21 = tmp20;
        if (!result1) {
          tmp21 = id;
        }
      }
    }
    tmp = tmp21;
    if (null == tmp21) {
      const _Date = Date;
      const id1 = id.getId();
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const tmp56 = _createForOfIteratorHelperLoose(store.getVideoParticipants(closure_2));
      const iter3 = tmp56();
      let iter2 = iter3;
      if (!iter3.done) {
        do {
          let value = iter2.value;
          let tmp31 = tmp38;
          if (value.user.id !== id1) {
            let tmp57 = localVideoDisabled;
            tmp31 = tmp38;
            if (!localVideoDisabled.isLocalVideoDisabled(value.user.id)) {
              let tmp32 = store;
              let tmp33 = closure_2;
              tmp31 = tmp38;
              if (!store.isParticipantPoppedOut(closure_2, value.id)) {
                let arr = items.push(value.user.id);
                let tmp35 = speakingDuration;
                speakingDuration = speakingDuration.getSpeakingDuration(value.user.id, timestamp);
                tmp31 = speakingDuration;
                if (0 !== speakingDuration) {
                  obj = { userId: value.user.id, duration: speakingDuration };
                  arr = items1.push(obj);
                  tmp31 = speakingDuration;
                }
              }
            }
          }
          iter = tmp56();
          tmp38 = tmp31;
          iter2 = iter;
        } while (!iter.done);
      }
      let num2 = 0;
      let tmp40;
      if (0 < items1.length) {
        do {
          let tmp41 = items1[num2];
          let duration = tmp41.duration;
          let tmp42 = null == tmp39;
          if (!tmp42) {
            tmp42 = duration < tmp39;
          }
          if (tmp42) {
            let userId = tmp41.userId;
            tmp39 = duration;
          }
          num2 = num2 + 1;
          tmp40 = userId;
        } while (num2 < items1.length);
      }
      tmp = tmp40;
      if (null == tmp40) {
        if (null == closure_3) {
          const first = items[0];
        }
      }
    }
  }
  if (closure_3 !== tmp) {
    closure_3 = tmp;
    if (flag) {
      tmp2.emitChange();
    }
  }
}
function handleChannelRTCUpdate() {
  callback3();
  return false;
}
let closure_15 = require("apply").throttle(updateSpeaker, 300, { trailing: true });
let tmp2 = ((Store) => {
  class VideoSpeakerStoreClass {
    constructor() {
      self = this;
      tmp = outer1_4(this, VideoSpeakerStoreClass);
      obj = outer1_7(VideoSpeakerStoreClass);
      tmp2 = outer1_6;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VideoSpeakerStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_10, outer1_12, outer1_9, outer1_11);
      const items = [outer1_13, outer1_9];
      this.syncWith(items, outer1_21);
    }
  };
  let items = [obj, ];
  obj = {
    key: "getSpeaker",
    value(arg0) {
      if (outer1_2 !== arg0) {
        outer1_2 = arg0;
        const outer1_3 = null;
        outer1_20(false);
      }
      if (null != outer1_3) {
        let id = outer1_3;
      } else {
        id = outer1_10.getId();
      }
      return id;
    }
  };
  items[1] = obj;
  return callback(VideoSpeakerStoreClass, items);
})(require("initialize").Store);
tmp2.displayName = "VideoSpeakerStore";
tmp2 = new tmp2(require("dispatcher"), { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate });
let closure_16 = tmp2;
let obj = { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/calls/VideoSpeakerStore.tsx");

export default tmp2;
