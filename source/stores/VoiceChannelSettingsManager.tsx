// Module ID: 16238
// Function ID: 125959
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 1194, 4200, 1348, 1906, 12809, 653, 686, 5078, 2]

// Module 16238 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { VideoQualityMode } from "ME";
import tmp2 from "AutomaticLifecycleManager";

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
function updateVoiceSettings() {
  const voiceChannelId = store2.getVoiceChannelId();
  if (null != voiceChannelId) {
    const channel = store.getChannel(voiceChannelId);
    if (tmp5) {
      let obj = importDefault(686);
      obj = { type: "SET_CHANNEL_BITRATE", bitrate: channel.bitrate };
      obj.dispatch(obj);
    }
    tmp5 = null != channel && tmp2 !== channel.bitrate;
  }
  const voiceChannelId1 = store2.getVoiceChannelId();
  if (null != voiceChannelId1) {
    const channel1 = store.getChannel(voiceChannelId1);
    if (null != channel1) {
      let AUTO = channel1.videoQualityMode;
      if (null == AUTO) {
        AUTO = VideoQualityMode.AUTO;
      }
      if (tmp10 !== AUTO) {
        obj = { type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: AUTO };
        importDefault(686).dispatch(obj);
        const obj3 = importDefault(686);
      }
    }
  }
}
function handleChannelUpdates(channels) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = store2;
      if (store2.getVoiceChannelId() === iter.value.id) {
        let tmp3 = updateVoiceSettings;
        let tmp4 = updateVoiceSettings();
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((sessionId) => {
    if (outer1_7.getSessionId() === sessionId.sessionId) {
      outer1_16();
    }
  });
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default tmp2;
