// Module ID: 16408
// Function ID: 126760
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16408 (_isNativeReflectConstruct)
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
function setDifference(arg0, has) {
  let iter2;
  const set = new Set();
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (!has.has(value)) {
        let addResult = set.add(value);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return set;
}
function makeErrorKey(type) {
  let errorContextKey;
  const obj = arg1(dependencyMap[11]).ErrorDefinitions[type.type];
  if (null != obj) {
    errorContextKey = obj.makeErrorContextKey(type);
  }
  return "" + type.type + ":" + errorContextKey;
}
let closure_3 = [];
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
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult("AVErrorManager");
let tmp4 = (arg0) => {
  class AVErrorManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, AVErrorManager);
      items1 = [...items];
      obj = closure_8(AVErrorManager);
      tmp2 = closure_7;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { MEDIA_ENGINE_SET_AUDIO_ENABLED: tmp2Result.updateActiveErrors, AUDIO_INPUT_DETECTED: tmp2Result.updateActiveErrors, AUDIO_SET_DISPLAY_SILENCE_WARNING: tmp2Result.updateActiveErrors, CERTIFIED_DEVICES_SET: tmp2Result.updateActiveErrors, AUDIO_SET_INPUT_DEVICE: tmp2Result.updateActiveErrors, AUDIO_SET_OUTPUT_DEVICE: tmp2Result.updateActiveErrors, MEDIA_ENGINE_DEVICES: tmp2Result.updateActiveErrors, RTC_CONNECTION_STATE: tmp2Result.updateActiveErrors, VOICE_STATE_UPDATES: tmp2Result.updateActiveErrors, MEDIA_ENGINE_SET_GO_LIVE_SOURCE: tmp2Result.updateActiveErrors, MEDIA_ENGINE_SOUNDSHARE_FAILED: tmp2Result.updateActiveErrors, MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: tmp2Result.updateActiveErrors, MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: tmp2Result.updateActiveErrors, MEDIA_ENGINE_VIDEO_FILTER_ERROR: tmp2Result.updateActiveErrors, MEDIA_ENGINE_VIDEO_STATE_CHANGED: tmp2Result.updateActiveErrors, NATIVE_SCREEN_SHARE_PICKER_UPDATE: tmp2Result.updateActiveErrors, NATIVE_SCREEN_SHARE_PICKER_ERROR: tmp2Result.updateActiveErrors, MEDIA_SESSION_JOINED: tmp2Result.updateActiveErrors, RTC_CONNECTION_UPDATE_ID: tmp2Result.updateActiveErrors, RTC_CONNECTION_VIDEO: tmp2Result.updateActiveErrors, RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: tmp2Result.updateActiveErrors, VIDEO_STREAM_READY_TIMEOUT: tmp2Result.updateActiveErrors, CLEAR_VIDEO_STREAM_READY_TIMEOUT: tmp2Result.updateActiveErrors, REPORT_AV_ERROR: tmp2Result.handleReportAVError, STREAM_CLOSE: tmp2Result.updateActiveErrors };
      return tmp2Result;
    }
  }
  const arg1 = AVErrorManager;
  callback2(AVErrorManager, arg0);
  let obj = {
    key: "updateActiveErrors",
    value() {
      let activeErrors;
      let iter5;
      let iter6;
      const voiceChannelId = voiceChannelId.getVoiceChannelId();
      let tmp2 = null;
      if (null != voiceChannelId) {
        tmp2 = voiceChannelId;
      }
      let tmp3 = null;
      if (null != tmp2) {
        const voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(tmp2);
        tmp3 = null;
        if (null != voiceStateForChannel) {
          tmp3 = voiceStateForChannel;
        }
      }
      const allActiveStreams = allActiveStreams.getAllActiveStreams();
      const map = new Map();
      const values = Object.values(AVErrorManager(closure_2[11]).ErrorDefinitions);
      for (let num = 0; num < values.length; num = num + 1) {
        let obj2 = values[num];
        let obj = { voiceChannelId: tmp2, voiceState: tmp3, activeStreams: allActiveStreams };
        activeErrors = obj2.getActiveErrors(obj);
        if (null != activeErrors) {
          let tmp8 = callback5;
          let tmp9 = callback5(activeErrors);
          let iter = tmp9();
          let iter2 = iter;
          let tmp10 = iter;
          let tmp11 = tmp9;
          if (!iter.done) {
            do {
              let value = iter2.value;
              let tmp12 = closure_19;
              let result = map.set(closure_19(value), value);
              let iter3 = tmp9();
              iter2 = iter3;
              let tmp14 = iter3;
              let tmp15 = tmp9;
              let done = iter3.done;
            } while (!done);
          }
        }
      }
      const activeErrors1 = activeErrors.getActiveErrors();
      if (activeErrors1 instanceof Map) {
        if (0 !== map.size) {
          const _Set = Set;
          const set = new Set(map.keys());
          const _Set2 = Set;
          const set1 = new Set(activeErrors1.keys());
          if (set.size > set1.size) {
            const tmp28 = callback5(callback6(set, set1));
            let iter4 = tmp28();
            if (!iter4.done) {
              do {
                value = map.get(iter4.value);
                if (null != value) {
                  let tmp30 = closure_0;
                  let tmp31 = closure_2;
                  let obj5 = closure_0(closure_2[12]);
                  let reportAVErrorResult = obj5.reportAVError(value);
                }
                iter5 = tmp28();
                iter4 = iter5;
              } while (!iter5.done);
            }
          }
          if (set1.size > set.size) {
            const tmp43 = callback5(callback6(set1, set));
            let iter7 = tmp43();
            if (!iter7.done) {
              do {
                value = activeErrors1.get(iter7.value);
                if (null != value) {
                  let tmp34 = closure_4;
                  let tmp35 = closure_3;
                  let tmp36 = closure_14;
                  let _JSON = JSON;
                  let _HermesInternal2 = HermesInternal;
                  let infoResult = closure_14.info("Error resolved: " + value.type + " " + JSON.stringify(closure_4(value, closure_3)));
                }
                iter6 = tmp43();
                iter7 = iter6;
              } while (!iter6.done);
            }
          }
          obj = { type: "ACTIVE_AV_ERRORS_CHANGED", activeErrors: map };
          callback(closure_2[13]).dispatch(obj);
          const obj6 = callback(closure_2[13]);
        }
      } else {
        const _Object = Object;
        const _HermesInternal = HermesInternal;
        closure_14.error("existingErrors is not a Map: " + activeErrors1 + " type: " + toString.call(activeErrors1));
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "handleReportAVError",
    value(arg0) {
      let context;
      let error;
      ({ error, context } = arg0);
      const result = AVErrorManager(closure_2[14]).sendAVErrorAnalyticsEvent(error, context);
    }
  };
  items[1] = obj;
  return callback(AVErrorManager, items);
}(importDefault(dependencyMap[15]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/errors/av_errors/AVErrorManager.tsx");

export default tmp4;
