// Module ID: 19813
// Function ID: 19814
// Name: SoundboardRecordSoundActionSheet
// Dependencies: [32, 5, 19, 17, 2131, 6496, 12830, 21, 5679, 13125, 4913, 575, 12, 7795, 5594, 7784, 1112, 7553, 5504, 19814, 8492, 5511, 19815, 2]
// Exports: default

// Module 19813 (SoundboardRecordSoundActionSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1112 */;
import NativePermissionConstants from "NativePermissionConstants" /* 6496 */;
import reactDefault from "react" /* 7784 */;
import utils_TimeUtils from "utils/TimeUtils" /* 8492 */;
import showSoundboardSoundEditModalDefault from "showSoundboardSoundEditModal" /* 19815 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 12830 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, _undefined, c3, c5, c6, dependencyMap, guildId;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp13;
let unpackModuleId;
const SoundboardRecordingWaveformDefault = tmp13(19814);
const f118759 = (arg0) => {
  let num = arg0;
  if (arg0 == null) {
    num = 0;
  }
  return num;
};
function getRecordedLevels(arg0) {
  return Array.from(arg0, f118759);
}
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
function stopSoundboardRecording(arg0, items, arg2) {
  let closure_2;
  _require = items;
  let closure_1 = arg2;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, arg0);
  const obj2 = require("VoiceMessageUtils");
  dependencyMap = obj2.generateBase64EncodedWaveform(items);
  const promise = new Promise((arg0) => {
    let waveform;
    let closure_0 = arg0;
    const reachedLimit = setTimeout(() => {
      obj = { uri: "", durationSecs: 0, waveform, waveformLevels: items, reachedLimit };
      return closure_0(obj);
    }, 5000);
    mediaEngine = mediaEngine.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
      clearTimeout(closure_1);
      obj = { uri, durationSecs: arg1 / 1000, waveform, waveformLevels: items, reachedLimit };
      closure_0(obj);
    });
  });
  return promise;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ VOICE_RECORDING_MAX_DB: c9, VOICE_RECORDING_MIN_DURATION_MILLIS: c10, WAVEFORM_WAVE_MAX_VALUE: unpackModuleId } = VoiceMessageConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
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
  let c2;
  let c7;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let handleRecordPressIn;
  let intl2;
  let intl3;
  let intl5;
  let items5;
  let obj10;
  let obj7;
  let onAccessibilityAction;
  let require;
  let string2;
  let t2;
  let timeFormat;
  let tmp16Result2;
  let tmp3;
  let waveformLevels;
  ({ guildId: require, analyticsSource: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  react = undefined;
  c7 = undefined;
  let callback1;
  let tmp = callback1();
  obj = react;
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c2] = tmp2;
  [first, _slicedToArray] = react.useState(0);
  [first1, react] = react.useState(null);
  const ref = react.useRef([]);
  [waveformLevels, c7] = _slicedToArray(react.useState([]), 2);
  const tmp8 = _slicedToArray(react.useState([]), 2);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(false);
  let closure_10 = react.useRef(false);
  let closure_11 = react.useRef(false);
  let closure_12 = react.useRef(false);
  let closure_13 = react.useRef(null);
  const ref4 = react.useRef(() => {

  });
  const memo = react.useMemo(() => {
    obj = _modDef12;
    return obj.throttle((arg0, arg1) => {
      let closure_0 = arg1;
      let tmp = closure_1_3(arg0);
      closure_1_7((arg0) => {
        let tmp = closure_0;
        obj = closure_2_1(closure_2_2[12]);
        if (obj.isEqual(arg0, closure_0)) {
          tmp = arg0;
        }
        return tmp;
      });
    }, 100);
  }, []);
  let items = [memo];
  const callback = react.useCallback((arg0) => {
    if (null != ref2.current) {
      if (ref3.current) {
        const _performance = performance;
        const diff = performance.now() - tmp.current;
        const _Math = Math;
        const _Math2 = Math;
        let num = 312.5;
        const bound = Math.min(31, Math.floor(diff / 312.5));
        let num3 = ref.current[bound];
        const current = ref.current;
        const _Math3 = Math;
        const tmp5 = ref;
        if (num3 == null) {
          num3 = 0;
        }
        const _Math4 = Math;
        const _Math5 = Math;
        current[bound] = max(num3, Math.max(0, Math.min(unpackModuleId, unpackModuleId * ((arg0 - -70) / (React4 - -70)))));
        if (diff >= 10000) {
          ref4.current(true);
        } else {
          const _Array = Array;
          memo(diff, Array.from(tmp5.current, f118759));
        }
      }
    }
  }, items);
  const items1 = [callback, memo];
  callback1 = react.useCallback(first1(function*(arg0, value) {
    let flag4;
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else if (null != closure_130_8.current) {
        if (closure_130_9.current) {
          const _performance = performance;
          let closure_1 = performance.now() - closure_130_8.current;
          closure_130_8.current = null;
          closure_130_9.current = false;
          closure_130_11.current = true;
          closure_130_15.cancel();
          let num7 = 10000;
          const tmp30 = closure_130_3;
          if (!flag4) {
            num7 = closure_1;
          }
          tmp30(num7);
          closure_130_2(false);
          let closure_2 = ref4(closure_130_6.current);
          c3 = 2;
          c4 = 1;
          const obj5 = { value: callback(closure_130_16, closure_2, flag4), done: false };
          return obj5;
        }
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      const durationSecs = value;
      closure_130_11.current = false;
      if (1000 * durationSecs.durationSecs >= closure_1_10) {
        closure_130_5(durationSecs);
      } else {
        closure_130_5(closure_130_13.current);
      }
    }
    yield "HermesInternal";
    closure_2 = tmp4;
    closure_1 = tmp;
    flag4 = closure_0;
    if (closure_0 === undefined) {
      flag4 = false;
    }
    return "Path";
  }), items1);
  const items2 = [callback1];
  const effect = react.useEffect(() => {
    ref4.current = callback1;
  }, items2);
  const items3 = [first1, callback];
  let closure_18 = react.useCallback(first1(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
    let obj6;
    function isStillHeldAndIdle() {
      const current = ref2.current && null == ref.current && !ref3.current;
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
        return { value: "HermesInternal", done: null };
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
                  const obj5 = { value: obj6.requestPermission(ref.AUDIO), done: false };
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
            closure_129_12.current = false;
            const tmp55 = guildId;
            if (tmp55) {
              if (isStillHeldAndIdle()) {
                closure_129_13.current = closure_129_4;
                closure_129_5(null);
                closure_129_6.current = [];
                closure_129_7([]);
                closure_129_3(0);
                closure_129_2(true);
                const _performance2 = performance;
                closure_129_8.current = performance.now();
                _undefined = 1;
                c3 = 3;
                c4 = 1;
                const obj8 = { value: startSoundboardRecording(closure_129_16), done: false };
                return obj8;
              }
            }
          }
        } else if (2 === c3) {
          _undefined = 0;
          closure_129_8.current = null;
          closure_129_2(false);
          closure_129_5(closure_129_13.current);
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
          closure_129_8.current = performance.now();
          closure_129_9.current = true;
          if (!closure_129_10.current) {
            closure_129_14.current();
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp45) {
        if (0 === _undefined) {
          c4 = 3;
          throw tmp45;
        } else {
          c3 = 2;
        }
      }
    }
  }), items3);
  const tmp15 = reactDefault;
  const intl = intl6.intl;
  const string = intl.string;
  const t = intl6.t;
  const fn = () => {
    if (null != ref2.current) {
      closure_10.current = false;
      callback1();
    } else {
      closure_10.current = true;
      closure_18();
    }
  };
  const items4 = [callback, memo];
  ({ accessibilityActions, onAccessibilityAction } = tmp15(fn, string(tmp3 ? t.hHBkuG : t["/VJ/Sp"])));
  tmp15(fn, string(tmp3 ? t.hHBkuG : t["/VJ/Sp"]));
  const effect1 = obj.useEffect(() => (function() {
    closure_1_10.current = false;
    memo.cancel();
    let current = null != ref.current;
    const tmp2 = ref;
    if (current) {
      current = ref2.current;
    }
    if (current) {
      tmp2.current = null;
      ref2.current = false;
      const items = [];
      let c1 = false;
      mediaEngine = mediaEngine.getMediaEngine();
      mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, callback);
      const obj2 = require("VoiceMessageUtils");
      let closure_2 = obj2.generateBase64EncodedWaveform(items);
      const self = this;
      new Promise((arg0) => {
        let waveform;
        let closure_0 = arg0;
        const reachedLimit = setTimeout(() => {
          obj = { uri: "", durationSecs: 0, waveform, waveformLevels: items, reachedLimit };
          return closure_0(obj);
        }, 5000);
        mediaEngine = mediaEngine.getMediaEngine();
        const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
          clearTimeout(closure_1);
          obj = { uri, durationSecs: arg1 / 1000, waveform, waveformLevels: items, reachedLimit };
          closure_0(obj);
        });
      });
    }
  }), items4);
  if (!tmp3 && null != first1) {
    waveformLevels = first1.waveformLevels;
  }
  let result = first / 1000;
  if (!tmp3 && null != first1) {
    let num = 10;
    if (!first1.reachedLimit) {
      num = first1.durationSecs;
    }
    result = num;
  }
  let obj2 = { style: tmp.container, children: items5 };
  const ActionSheet = tmp16(7553).ActionSheet;
  let obj3 = { variant: "heading-lg/semibold", style: tmp.title, children: intl2.string(tmp16(1112).t["/VJ/Sp"]) };
  const Text = tmp16(5504).Text;
  intl2 = tmp16(1112).intl;
  items5 = [closure_12(Text, obj3), , , , ];
  let obj4 = { style: tmp.waveform, children: closure_12(SoundboardRecordingWaveformDefault, { levels: waveformLevels, slotCount: 32, height: 64 }) };
  items5[1] = closure_12(ref, obj4);
  let obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp.elapsed, children: "" + timeFormat + " / " + tmp16Result2.getTimeFormat(10) };
  const Text2 = tmp16(5504).Text;
  const tmp16Result = utils_TimeUtils;
  timeFormat = tmp16Result.getTimeFormat(result);
  tmp16Result2 = utils_TimeUtils;
  items5[2] = closure_12(Text2, obj5);
  let obj6 = { style: tmp.button, children: tmp21(Button, obj7) };
  let str = "secondary";
  Button = tmp16(5511).Button;
  const tmp22 = closure_13;
  if (tmp3) {
    str = "destructive";
  }
  obj7 = {
    variant: str,
    text: intl3.string(tmp16(1112).t["hP6+07"]),
    accessibilityLabel: string2(tmp3 ? t2.hHBkuG : t2["/VJ/Sp"]),
    accessibilityActions,
    onAccessibilityAction,
    onPressIn: handleRecordPressIn,
    onPressOut: function handleRecordPressOut() {
      closure_10.current = false;
      if (ref3.current) {
        callback1();
      }
    },
    onPress() {

    }
  };
  intl3 = tmp16(1112).intl;
  const intl4 = tmp16(1112).intl;
  string2 = intl4.string;
  t2 = tmp16(1112).t;
  let obj8 = { startExpanded: true, children: tmp22(tmp23, obj2) };
  handleRecordPressIn = function handleRecordPressIn() {
    closure_10.current = true;
    closure_18();
  };
  items5[3] = closure_12(ref, obj6);
  let obj9 = { style: tmp.nextButton, children: tmp21(Button2, obj10) };
  obj10 = {
    variant: "primary",
    text: intl5.string(intl6.t.PDTjLN),
    disabled: !(!tmp3 && null != first1),
    onPress: function handleNext() {
      let obj2;
      if (null != first1) {
        obj = { guildId: require, analyticsSource: importDefault, localSource: obj2 };
        obj2 = { uri: first1.uri, isOgg: true, fallbackDurationMs: 1000 * first1.durationSecs, fallbackWaveform: first1.waveform };
        showSoundboardSoundEditModalDefault(obj);
      }
    }
  };
  Button2 = tmp16(5511).Button;
  intl5 = tmp16(1112).intl;
  items5[4] = closure_12(ref, obj9);
  return closure_12(ActionSheet, obj8);
};
