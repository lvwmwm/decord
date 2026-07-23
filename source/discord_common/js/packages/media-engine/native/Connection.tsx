// Module ID: 4237
// Function ID: 37140
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 102, 18, 4191, 4229, 4179, 4227, 4238, 4267, 4270, 4, 4272, 4273, 4274, 4236, 4276, 4277, 4279, 4280, 2]

// Module 4237 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import closure_5 from "DesktopSources";
import filterParsedVideoCodecs from "filterParsedVideoCodecs";
import convertAudioLevel from "convertAudioLevel";
import _get from "_get";
import STATS_INTERVAL from "STATS_INTERVAL";
import DesktopSources from "DesktopSources";
import AudioSubsystems from "AudioSubsystems";
import tmp4 from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
const require = arg1;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeRTXSSRC(arg0) {
  let num = 0;
  if (null != arg0) {
    num = 0;
    if (0 !== arg0) {
      num = arg0 + 1;
    }
  }
  return num;
}
({ StatsFilter: closure_10, ExperimentFlags: closure_11, DESKTOP_BITRATE_ENHANCED: closure_12, DESKTOP_BITRATE: closure_13, MEDIA_SINK_WANTS_PROPERTIES: closure_14, MediaTypes: closure_15, SIMULCAST_HQ_QUALITY: closure_16 } = DesktopSources);
({ NATIVE_MODE_VALUES: closure_17, InputModes: closure_18, ConnectionStates: closure_19, Codecs: closure_20, MediaEngineContextTypes: closure_21, SpeakingFlags: closure_22, ResolutionTypes: closure_23, NativeFeatures: closure_24, NoiseCancellerError: closure_25, DEFAULT_VOLUME: closure_26, DEFAULT_STREAM_VOLUME: closure_27, DEFAULT_SOUNDSHARE_VOICE_BITRATE: closure_28, DEFAULT_CALL_BITRATE: closure_29, DEFAULT_CALL_MIN_BITRATE: closure_30, DEFAULT_CALL_MAX_BITRATE: closure_31, DEFAULT_PRIORITY_SPEAKER_DUCKING: closure_32, PING_INTERVAL: closure_33 } = AudioSubsystems);
let c34 = 0;
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/media-engine/native/Connection.tsx");

export default tmp4;
