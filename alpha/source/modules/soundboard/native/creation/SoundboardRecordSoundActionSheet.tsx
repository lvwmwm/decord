// Module ID: 19856
// Function ID: 19857
// Name: SoundboardRecordSoundActionSheet
// Dependencies: [32, 5, 19, 17, 2133, 6375, 12734, 21, 5558, 13029, 4792, 575, 12, 7676, 5473, 7665, 1113, 7434, 5383, 19857, 8373, 5390, 19858, 2]
// Exports: default

// Module 19856 (SoundboardRecordSoundActionSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import NativePermissionConstants from "NativePermissionConstants" /* 6375 */;
import reactDefault from "react" /* 7665 */;
import utils_TimeUtils from "utils/TimeUtils" /* 8373 */;
import VoiceMessageUtils from "VoiceMessageUtils" /* 13029 */;
import showSoundboardSoundEditModalDefault from "showSoundboardSoundEditModal" /* 19858 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 12734 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, _undefined, c3, c5, c6, dependencyMap, guildId;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp13;
let unpackModuleId;
const SoundboardWaveformDisplayDefault = tmp13(19857);
const f120183 = (waveform) => {
  let closure_1;
  const timeout = setTimeout(() => {
    obj = { uri: "", durationSecs: 0, waveform };
    return waveform(obj);
  }, 5000);
  mediaEngine = mediaEngine.getMediaEngine();
  const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
    clearTimeout(closure_1);
    obj = { uri, durationSecs: arg1 / 1000, waveform };
    waveform(obj);
  });
};
let obj = function _startSoundboardRecording() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      let c4;
      try {
        let closure_2;
        let mediaEngine;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            let closure_1 = tmp4;
            mediaEngine = MediaEngineStore.getMediaEngine();
            mediaEngine.on(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, closure_0);
            c4 = 1;
            const obj4 = { echoCancellation: MediaEngineStore.getEchoCancellation(), echoCancellationPreEcho: false, noiseSuppression: MediaEngineStore.getNoiseSuppression(), automaticGainControlConfig: obj5, noiseCancellation: MediaEngineStore.getNoiseCancellation() };
            const startLocalAudioRecording = mediaEngine.startLocalAudioRecording;
            obj5 = { enabled: MediaEngineStore.getAutomaticGainControl() };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: startLocalAudioRecording(obj4), done: false };
            return obj6;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_2 = closure_3;
          mediaEngine.removeListener(closure_130_0(closure_130_2[8]).MediaEngineEvent.VoiceActivity, closure_0);
          throw closure_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: "+60" };
        }
      } catch (tmp15) {
        closure_3 = tmp15;
        if (0 === c4) {
          c6 = 3;
          throw tmp15;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function stopSoundboardRecording(arg0, current) {
  let closure_0;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, arg0);
  const obj2 = require("VoiceMessageUtils");
  _require = obj2.generateBase64EncodedWaveform(current);
  const promise = new Promise(f120183);
  return promise;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ VOICE_RECORDING_MAX_DB: c9, VOICE_RECORDING_MIN_DB: c10, VOICE_RECORDING_MIN_DURATION_MILLIS: unpackModuleId, WAVEFORM_WAVE_MAX_VALUE: closure_12 } = VoiceMessageConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, title: obj3, waveform: obj4, elapsed: obj5, button: { width: "100%" }, nextButton: obj6 };
obj2 = { padding: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj4 = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj6 = { width: "100%", marginTop: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardRecordSoundActionSheet.tsx");

export default function SoundboardRecordSoundActionSheet(arg0) {
  let Button;
  let Button2;
  let accessibilityActions;
  let analyticsSource;
  let c14;
  let c2;
  let closure_3;
  let closure_5;
  let durationSecs;
  let first;
  let first1;
  let handleRecordPressIn;
  let intl2;
  let intl3;
  let intl5;
  let items4;
  let obj10;
  let obj7;
  let onAccessibilityAction;
  let require;
  let string2;
  let t2;
  let timeFormat;
  let tmp10;
  let tmp16Result2;
  let tmp3;
  ({ guildId: require, analyticsSource: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  react = undefined;
  c14 = undefined;
  closure_17 = undefined;
  let tmp = closure_17();
  obj = react;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  [first, _slicedToArray] = react.useState(0);
  [first1, react] = react.useState(null);
  react.useRef([]);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(false);
  let closure_9 = react.useRef(false);
  let closure_10 = react.useRef(false);
  let closure_11 = react.useRef(false);
  let closure_12 = react.useRef(null);
  const ref = react.useRef(() => {

  });
  [tmp10, c14] = _slicedToArray(react.useState(0), 2);
  const tmp9 = _slicedToArray(react.useState(0), 2);
  const memo = react.useMemo(() => {
    let ref4;
    obj = _modDef12;
    return obj.throttle((arg0) => {
      if (null != ref2.current) {
        if (ref3.current) {
          current = ref.current;
          const _Math = Math;
          const _Math2 = Math;
          current.push(Math.max(0, Math.min(closure_12, closure_12 * ((arg0 - closure_10) / (closure_9 - closure_10)))));
          const _performance = performance;
          const diff = performance.now() - tmp.current;
          closure_1_3(diff);
          closure_1_14((arg0) => arg0 + 1);
          if (diff >= 15000) {
            ref4.current();
          }
        }
      }
    }, 100);
  }, []);
  const items = [memo];
  let current = react.useCallback(first1(function*(arg0, value) {
    let v1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        let durationSecs;
        c3 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            durationSecs = undefined;
            if (null != ref2.current) {
              if (ref3.current) {
                tmp31.current = null;
                tmp20.current = false;
                closure_10.current = true;
                _undefined(false);
                _undefined = 1;
                c3 = 1;
                const obj4 = { value: current(memo, ref.current), done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          durationSecs = value;
          closure_129_10.current = false;
          if (1000 * durationSecs.durationSecs >= closure_1_11) {
            closure_129_5(durationSecs);
          } else {
            closure_129_5(closure_129_12.current);
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: "+60" };
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  }), items);
  ref.current = current;
  const items1 = [first1, memo];
  closure_17 = react.useCallback(first1(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
    let obj6;
    function isStillHeldAndIdle() {
      current = ref2.current && null == ref.current && !ref3.current;
      return current;
    }
    function startSoundboardRecording() {
      return closure_1_15(...arguments);
    }
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guildId = undefined;
            if (null == ref.current) {
              if (!ref2.current) {
                if (!ref3.current) {
                  ref3.current = true;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: obj6.requestPermission(constants.AUDIO), done: false };
                  obj6 = tmp(_undefined[13]);
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            guildId = value;
            closure_129_11.current = false;
            const tmp55 = guildId;
            if (tmp55) {
              if (isStillHeldAndIdle()) {
                closure_129_12.current = closure_129_4;
                closure_129_5(null);
                closure_129_6.current = [];
                closure_129_3(0);
                closure_129_14((arg0) => arg0 + 1);
                closure_129_2(true);
                const _performance2 = performance;
                closure_129_7.current = performance.now();
                _undefined = 1;
                c3 = 3;
                c4 = 1;
                const obj8 = { value: startSoundboardRecording(closure_129_15), done: false };
                return obj8;
              }
            }
          }
        } else if (2 === c3) {
          _undefined = 0;
          closure_129_7.current = null;
          closure_129_2(false);
          closure_129_5(closure_129_12.current);
          const obj2 = guildId(_undefined[14]);
          const result = obj2.showVoiceRecordingFailed();
          c4 = 3;
          const obj9 = { value: undefined, done: true };
          return obj9;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          _undefined = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          _undefined = 0;
          const _performance = performance;
          closure_129_7.current = performance.now();
          closure_129_8.current = true;
          if (!closure_129_9.current) {
            closure_129_13.current();
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: "+60" };
      } catch (tmp45) {
        if (0 === _undefined) {
          c4 = 3;
          throw tmp45;
        } else {
          c3 = 2;
        }
      }
    }
  }), items1);
  const tmp15 = reactDefault;
  const intl = intl6.intl;
  const string = intl.string;
  const t = intl6.t;
  const fn = () => {
    if (null != ref2.current) {
      closure_9.current = false;
      callback();
    } else {
      closure_9.current = true;
      closure_17();
    }
  };
  const items2 = [memo];
  ({ accessibilityActions, onAccessibilityAction } = tmp15(fn, string(tmp3 ? t.hHBkuG : t["/VJ/Sp"])));
  tmp15(fn, string(tmp3 ? t.hHBkuG : t["/VJ/Sp"]));
  const effect = obj.useEffect(() => (function() {
    closure_1_9.current = false;
    memo.cancel();
    current = null != ref.current;
    const tmp = memo;
    const tmp3 = ref;
    if (current) {
      current = ref2.current;
    }
    if (current) {
      tmp3.current = null;
      ref2.current = false;
      let mediaEngine = ref.getMediaEngine();
      mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, tmp);
      const obj2 = require("VoiceMessageUtils");
      let closure_0 = obj2.generateBase64EncodedWaveform([]);
      const self = this;
      new Promise(f120183);
    }
  }), items2);
  const items3 = [tmp10];
  let tmp20 = !tmp3;
  const memo1 = obj.useMemo(() => {
    obj = VoiceMessageUtils;
    return obj.generateBase64EncodedWaveform(ref.current);
  }, items3);
  if (!tmp3) {
    tmp20 = null != first1;
  }
  let waveform = memo1;
  if (tmp20) {
    waveform = first1.waveform;
  }
  if (tmp20) {
    durationSecs = first1.durationSecs;
  } else {
    durationSecs = first / 1000;
  }
  let obj2 = { style: tmp.container, children: items4 };
  const ActionSheet = tmp16(7434).ActionSheet;
  let obj3 = { variant: "heading-lg/semibold", style: tmp.title, children: intl2.string(tmp16(1113).t["/VJ/Sp"]) };
  const Text = tmp16(5383).Text;
  intl2 = tmp16(1113).intl;
  items4 = [ref(Text, obj3), , , , ];
  let obj4 = { style: tmp.waveform, children: ref(SoundboardWaveformDisplayDefault, { waveform, height: 64 }) };
  items4[1] = ref(ref, obj4);
  let obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp.elapsed, children: "" + timeFormat + " / " + tmp16Result2.getTimeFormat(15) };
  const Text2 = tmp16(5383).Text;
  const tmp16Result = utils_TimeUtils;
  timeFormat = tmp16Result.getTimeFormat(durationSecs);
  tmp16Result2 = utils_TimeUtils;
  items4[2] = ref(Text2, obj5);
  let obj6 = { style: tmp.button, children: tmp21(Button, obj7) };
  let str = "secondary";
  Button = tmp16(5390).Button;
  const tmp22 = c14;
  if (tmp3) {
    str = "destructive";
  }
  obj7 = {
    variant: str,
    text: intl3.string(tmp16(1113).t["hP6+07"]),
    accessibilityLabel: string2(tmp3 ? t2.hHBkuG : t2["/VJ/Sp"]),
    accessibilityActions,
    onAccessibilityAction,
    onPressIn: handleRecordPressIn,
    onPressOut: function handleRecordPressOut() {
      closure_9.current = false;
      if (ref3.current) {
        callback();
      }
    },
    onPress() {

    }
  };
  intl3 = tmp16(1113).intl;
  const intl4 = tmp16(1113).intl;
  string2 = intl4.string;
  t2 = tmp16(1113).t;
  let obj8 = { startExpanded: true, children: tmp22(tmp23, obj2) };
  handleRecordPressIn = function handleRecordPressIn() {
    closure_9.current = true;
    closure_17();
  };
  items4[3] = ref(ref, obj6);
  let obj9 = { style: tmp.nextButton, children: tmp21(Button2, obj10) };
  obj10 = {
    variant: "primary",
    text: intl5.string(intl6.t.PDTjLN),
    disabled: !tmp20,
    onPress: function handleNext() {
      let obj2;
      if (null != first1) {
        obj = { guildId: require, analyticsSource: importDefault, localSource: obj2 };
        obj2 = { uri: first1.uri, isOgg: true, fallbackDurationMs: 1000 * first1.durationSecs, fallbackWaveform: first1.waveform };
        showSoundboardSoundEditModalDefault(obj);
      }
    }
  };
  Button2 = tmp16(5390).Button;
  intl5 = tmp16(1113).intl;
  items4[4] = ref(ref, obj9);
  return ref(ActionSheet, obj8);
};
