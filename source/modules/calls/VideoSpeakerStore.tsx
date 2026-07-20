// Module ID: 10527
// Function ID: 82274
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10527 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
    const lastActiveStream = lastActiveStream.getLastActiveStream();
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
        let obj = arg1(dependencyMap[11]);
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
            let tmp57 = closure_11;
            tmp31 = tmp38;
            if (!closure_11.isLocalVideoDisabled(value.user.id)) {
              let tmp32 = closure_13;
              let tmp33 = closure_2;
              tmp31 = tmp38;
              if (!closure_13.isParticipantPoppedOut(closure_2, value.id)) {
                let arr = items.push(value.user.id);
                let tmp35 = closure_12;
                let speakingDuration = closure_12.getSpeakingDuration(value.user.id, timestamp);
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
          let tmp38 = tmp31;
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
            let tmp39 = duration;
          }
          num2 = num2 + 1;
          tmp40 = userId;
        } while (num2 < items1.length);
      }
      tmp = tmp40;
      if (null == tmp40) {
        if (null == tmp) {
          const first = items[0];
        }
      }
    }
  }
  if (tmp !== tmp) {
    if (flag) {
      tmp2.emitChange();
    }
  }
}
function handleChannelRTCUpdate() {
  callback3();
  return false;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const ParticipantTypes = arg1(dependencyMap[10]).ParticipantTypes;
let closure_15 = importDefault(dependencyMap[12]).throttle(updateSpeaker, 300, { trailing: true });
let tmp2 = (Store) => {
  class VideoSpeakerStoreClass {
    constructor() {
      self = this;
      tmp = closure_4(this, VideoSpeakerStoreClass);
      obj = closure_7(VideoSpeakerStoreClass);
      tmp2 = closure_6;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = VideoSpeakerStoreClass;
  callback2(VideoSpeakerStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_10, closure_12, closure_9, closure_11);
      const items = [closure_13, closure_9];
      this.syncWith(items, closure_21);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getSpeaker",
    value(arg0) {
      if (arg0 !== arg0) {
        let closure_3 = null;
        callback4(false);
      }
      if (null != closure_3) {
        let id = closure_3;
      } else {
        id = id.getId();
      }
      return id;
    }
  };
  items[1] = obj;
  return callback(VideoSpeakerStoreClass, items);
}(importDefault(dependencyMap[13]).Store);
tmp2.displayName = "VideoSpeakerStore";
tmp2 = new tmp2(importDefault(dependencyMap[14]), { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate });
const importDefaultResult = importDefault(dependencyMap[12]);
const obj = { AUDIO_SET_LOCAL_VIDEO_DISABLED: handleChannelRTCUpdate };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/calls/VideoSpeakerStore.tsx");

export default tmp2;
