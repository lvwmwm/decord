// Module ID: 19808
// Function ID: 19809
// Name: SoundboardSoundCreationPreview
// Dependencies: [32, 5, 19, 17, 4914, 5963, 5814, 21, 4913, 575, 5477, 1653, 9260, 7392, 10887, 1378, 19800, 504, 5123, 8205, 15787, 5594, 1112, 7020, 19809, 19810, 5504, 5511, 2]
// Exports: default

// Module 19808 (SoundboardSoundCreationPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5123 */;
import useToken from "useToken" /* 5477 */;
import Constants from "Constants" /* 5814 */;
import SoundboardConstants from "SoundboardConstants" /* 5963 */;
import TextTrackTypeDefault from "TextTrackType" /* 9260 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size_mod from "module_2" /* 2 */;

let c4, c5, dependencyMap, diff, set;

let c10;
let closure_12;
let obj2;
let obj3;
let obj4;
let size;
let tmp3;
let unpackModuleId;
const _modDef1653 = tmp3(1653);
function PlayheadLine(arg0) {
  let items2;
  let progress;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let width;
  ({ width, progress } = arg0);
  const tmp = closure_13();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.ICON_FEEDBACK_CRITICAL);
  const items = [closure_14, width, 3, progress];
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  const obj2 = _mod1653;
  class SoundboardSoundCreationPreviewTsx1 {
    constructor() {
      obj = { left: null, opacity: null };
      diff = closure_0 - closure_1;
      obj.left = Math.max(0, Math.min(diff, closure_2.get() * closure_0 - closure_1 / 2));
      num = 1;
      if (closure_2.get() < 0) {
        num = 0;
      }
      obj.opacity = num;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  SoundboardSoundCreationPreviewTsx1.__closure = items1;
  SoundboardSoundCreationPreviewTsx1.__workletHash = 710320565142;
  SoundboardSoundCreationPreviewTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(SoundboardSoundCreationPreviewTsx1);
  const obj3 = { pointerEvents: "none", style: items2 };
  items2 = [tmp.playheadLine, animatedStyle, { backgroundColor: token }];
  return authStore(_modDef1653.View, obj3);
}
let react = react_mod;
const View = react_native.View;
const MAX_SOUND_LENGTH_SECONDS = SoundboardConstants.MAX_SOUND_LENGTH_SECONDS;
const SoundOutputChannel = Constants.SoundOutputChannel;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { waveformCard: obj2, waveformContainer: { height: 96, justifyContent: "center" }, playheadLine: size, trimError: obj3, previewButton: obj4, hiddenPlayer: { width: 0, height: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: 0, width: 3, height: 96, borderRadius: nativeDefault.radii.sm };
obj3 = { marginTop: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
let closure_14 = { code: "(function SoundboardSoundCreationPreviewTsx1(){let[width,PLAYHEAD_WIDTH,progress]=this.__closure;return{left:Math.max(0,Math.min(width-PLAYHEAD_WIDTH,progress.get()*width-PLAYHEAD_WIDTH/2)),opacity:progress.get()<0?0:1};})" };
let closure_16 = PlatformUtils.isIOS() ? (function VideoPreviewPlayer(onLoad) {
  let onEnd;
  let onError;
  let uri;
  let volume;
  onLoad = onLoad.onLoad;
  ({ uri, volume, onEnd, onError } = onLoad);
  const obj = {
    source: { uri },
    audioOnly: true,
    paused: false,
    volume,
    onLoad() {
      return onLoad();
    },
    onEnd,
    onError,
    ignoreSilentSwitch: "ignore",
    style: closure_13().hiddenPlayer
  };
  return authStore(TextTrackTypeDefault, obj);
}) : (function MobileAudioSoundPreviewPlayer(uri) {
  let onEnd;
  let onError;
  let onLoad;
  uri = uri.uri;
  let volume = uri.volume;
  ({ onLoad, onEnd, onError } = uri);
  let tmp = volume(7392)(onLoad);
  dependencyMap = tmp;
  const tmp2 = volume(7392)(onEnd);
  let closure_3 = tmp2;
  const tmp3 = volume(7392)(onError);
  let closure_4 = tmp3;
  const items = [uri, volume, tmp, tmp2, tmp3];
  const effect = react.useEffect(() => {
    let mobileAudioSound;
    function play() {
      return obj(...arguments);
    }
    let obj = function _play() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let tmp;
        let v0;
        let v1;
        if (c5 === 2) {
          c5 = 3;
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
          let c3;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                let closure_0 = tmp4;
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj4 = {
                  value: mobileAudioSound.playWithListener(() => {
                            const tmp = closure_1_1;
                            if (!tmp) {
                              closure_2();
                            }
                          }),
                  done: false
                };
                return obj4;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                closure_0 = closure_2;
                const tmp13 = closure_129_1;
                if (!tmp13) {
                  c4(tmp11);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const tmp6 = closure_129_1;
                if (!tmp6) {
                  c3();
                }
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            closure_2 = tmp17;
            if (0 === c3) {
              c5 = 3;
              throw tmp17;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    mobileAudioSound = new uri(closure_2[14]).MobileAudioSound(mobileAudioSound, "soundboard_sound", volume, constants.VOICE);
    mobileAudioSound.volume = volume;
    volume = false;
    play();
    return () => {
      c1 = true;
      mobileAudioSound.stop();
    };
  }, items);
  return null;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardSoundCreationPreview.tsx");

export default function SoundboardSoundCreationPreview(source) {
  let Button;
  let _undefined;
  let c13;
  let closure_5;
  let intl;
  let items10;
  let num2;
  let num3;
  let obj14;
  let obj16;
  let tmp14;
  let tmp37Result;
  let tmp49;
  let tmp52;
  source = source.source;
  const volume = source.volume;
  let onDurationChange = source.onDurationChange;
  const onTrimChange = source.onTrimChange;
  react = undefined;
  let num;
  let first2;
  let closure_10;
  let first3;
  let closure_12;
  c13 = undefined;
  let sharedValue;
  let stateFromStores;
  let first4;
  let closure_17;
  let memo;
  let closure_19;
  let tmp = c13();
  const uri = source.uri;
  let obj = react;
  let tmp2 = onTrimChange;
  const tmp3 = onTrimChange(react.useState(null), 2);
  react = tmp3[1];
  const first = tmp3[0];
  const tmp5 = onTrimChange(react.useState(false), 2);
  let closure_6 = tmp5[1];
  let preview = source.preview;
  const first1 = tmp5[0];
  if (preview == null) {
    preview = first;
  }
  const items = [uri, source.preview];
  const effect = obj.useEffect(() => {
    let _true;
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
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
          let c2;
          try {
            let closure_0;
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
                let closure_1 = tmp;
                closure_0 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: obj2.loadSoundboardAudioPreview(c4, _true(onDurationChange[16]).WAVEFORM_BAR_COUNT), done: false };
                obj2 = _true(onDurationChange[16]);
                return obj5;
              }
            } else {
              if (1 === c3) {
                c2 = 0;
                const tmp12 = closure_129_0;
                if (!tmp12) {
                  closure_1_6(true);
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                const tmp7 = closure_129_0;
                if (!tmp7) {
                  closure_1_5(closure_0);
                }
                c2 = 0;
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp18) {
            if (0 === c2) {
              c4 = 3;
              throw tmp18;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null == source.preview) {
      source = false;
      const tmp = load();
      return () => {
        let c0 = true;
      };
    }
  }, items);
  num = undefined;
  if (preview != null) {
    num = preview.durationMs;
  }
  if (num == null) {
    num = source.fallbackDurationMs;
  }
  if (num == null) {
    num = 0;
  }
  const items1 = [num, onDurationChange];
  const effect1 = obj.useEffect(() => {
    onDurationChange(num);
  }, items1);
  const tmp2Result = tmp2(obj.useState(null), 2);
  first2 = tmp2Result[0];
  closure_10 = tmp2Result[1];
  const tmp2Result4 = tmp2(obj.useState(false), 2);
  first3 = tmp2Result4[0];
  closure_12 = tmp2Result4[1];
  [tmp14, c13] = tmp2(obj.useState(0), 2);
  tmp2(obj.useState(0), 2);
  let obj2 = source(onDurationChange[11]);
  sharedValue = obj2.useSharedValue(-1);
  let obj3 = source(onDurationChange[17]);
  const items2 = [preview];
  stateFromStores = obj3.useStateFromStores(items2, () => preview.useReducedMotion);
  let obj4 = source(onDurationChange[11]);
  const sharedValue1 = obj4.useSharedValue(0);
  let obj5 = source(onDurationChange[11]);
  const sharedValue2 = obj5.useSharedValue(1);
  const tmp2Result6 = tmp2(obj.useState({ start: 0, end: 1 }), 2);
  first4 = tmp2Result6[0];
  closure_17 = tmp2Result6[1];
  const items3 = [first4, num];
  memo = obj.useMemo(() => {
    let tmp2;
    if (first4.start > 0) {
      tmp2 = null;
      if (num > 0) {
        tmp2 = { startMs: first4.start * num, endMs: first4.end * num };
        const obj = { startMs: first4.start * num, endMs: first4.end * num };
      }
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items3);
  if (null != memo) {
    num = memo.endMs - memo.startMs;
  }
  const items4 = [memo, onTrimChange];
  const tmp25 = num / 1000 > num;
  const effect2 = obj.useEffect(() => {
    onTrimChange(memo);
  }, items4);
  const items5 = [first2, stateFromStores, sharedValue];
  const callback = obj.useCallback((start, end) => {
    const obj = { start, end };
    closure_17(obj);
  }, []);
  const items6 = [sharedValue];
  const callback1 = obj.useCallback(() => {
    const tmp2 = null == first2 || stateFromStores || tmp.durationMs <= 0;
    if (!tmp2) {
      const result = sharedValue.set(tmp.fromRatio);
      set = sharedValue.set;
      const obj = { duration: first2.durationMs, easing: _mod1653.Easing.linear };
      const withTiming = timing_timing.withTiming;
      const toRatio = tmp.toRatio;
      timing_timing;
      const result1 = set(withTiming(toRatio, obj));
    }
  }, items5);
  const callback2 = obj.useCallback(() => {
    closure_10(null);
    const result = sharedValue.set(-1);
  }, items6);
  const tmp31 = volume(onDurationChange[19])();
  closure_19 = tmp31;
  const items7 = [uri, preview, first2, first3, memo, first4, volume, tmp31];
  let callback3 = obj.useCallback(uri(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj3;
    let obj7;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let tmp;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            source = undefined;
            tmp = undefined;
            const tmp79 = preview;
            if (null != preview) {
              if (null == first2) {
                const tmp81 = first3;
                if (!tmp81) {
                  if (null != memo) {
                    closure_12(true);
                    c3 = 2;
                    c4 = 3;
                    c5 = 1;
                    const obj5 = { value: obj7.trimSoundboardAudio(uri, tmp58), done: false };
                    obj7 = source(onDurationChange[16]);
                    return obj5;
                  } else {
                    const obj8 = { uri: null, fromRatio: 0, toRatio: 1, durationMs: null, volume: tmp(onDurationChange[20])(volume) };
                    ({ audioUri: obj6.uri, durationMs: obj6.durationMs } = tmp79);
                    closure_10(obj8);
                  }
                }
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const tmp52 = onDurationChange;
          if (closure_129_19()) {
            closure_129_12(false);
          }
          throw tmp52;
        } else {
          if (2 === c4) {
            c3 = 1;
            if (closure_129_19()) {
              const presentError = source(onDurationChange[21]).presentError;
              const tmp40 = source(onDurationChange[21]);
              const intl = source(onDurationChange[22]).intl;
              presentError(intl.string(source(onDurationChange[22]).t.M17qLj));
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (closure_129_19()) {
                closure_129_12(false);
              }
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              source = value;
              c4 = 4;
              c5 = 1;
              const obj10 = { value: obj3.loadSoundboardAudioPreview(source, 1), done: false };
              obj3 = source(onDurationChange[16]);
              return obj10;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (closure_129_19()) {
              closure_129_12(false);
            }
            c5 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            tmp = value;
            if (closure_129_19()) {
              const obj = { uri: tmp.audioUri, fromRatio: null, toRatio: null, durationMs: tmp.durationMs, volume: tmp(onDurationChange[20])(closure_129_1) };
              ({ start: obj.fromRatio, end: obj.toRatio } = closure_129_16);
              closure_129_10(obj);
              c3 = 1;
            } else {
              c3 = 0;
              if (closure_129_19()) {
                closure_129_12(false);
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c3 = 0;
          if (closure_129_19()) {
            closure_129_12(false);
          }
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp69) {
        onDurationChange = tmp69;
        if (0 === c3) {
          c5 = 3;
          throw tmp69;
        } else if (1 === tmp71) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items7);
  let waveform;
  const tmp24 = num;
  const tmp33 = null == preview && !first1;
  if (preview != null) {
    waveform = preview.waveform;
  }
  if (waveform == null) {
    waveform = source.fallbackWaveform;
  }
  let tmp39 = null;
  if (null != first2) {
    let tmp40 = closure_10;
    let obj7 = { uri: null, volume: null, onLoad: callback1, onEnd: callback2, onError: callback2 };
    ({ uri: obj6.uri, volume: obj6.volume } = first2);
    tmp39 = closure_10(first4, obj7);
  }
  const items8 = [tmp39, , ];
  let obj8 = { style: tmp.waveformCard, children: items10 };
  let obj9 = {
    style: tmp.waveformContainer,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp37Result
  };
  if (tmp33) {
    tmp37Result = tmp43(tmp15(tmp16[23]).ActivityIndicator, {});
  } else {
    let obj10 = { waveform, barCount: tmp15(tmp16[16]).WAVEFORM_BAR_COUNT, height: 96, trimStartRatio: num2, trimEndRatio: num3 };
    num2 = 0;
    const tmp30Result = volume(onDurationChange[24]);
    if (null != preview) {
      num2 = first4.start;
    }
    num3 = 1;
    if (null != preview) {
      num3 = first4.end;
    }
    const items9 = [tmp43(tmp30Result, obj10), , ];
    let tmp43Result4 = null;
    if (!stateFromStores) {
      tmp43Result4 = null;
      if (tmp14 > 0) {
        const obj11 = { width: tmp14, progress: sharedValue };
        tmp43Result4 = tmp43(stateFromStores, obj11);
      }
    }
    items9[1] = tmp43Result4;
    let tmp43Result5 = null;
    if (null != preview) {
      tmp43Result5 = null;
      if (tmp14 > 0) {
        size = { width: tmp14, height: 96, startRatio: sharedValue1, endRatio: sharedValue2, onChange: callback, disabled: tmp49 };
        tmp49 = tmp36;
        const tmp30Result2 = volume(onDurationChange[25]);
        if (null == first2) {
          tmp49 = first3;
        }
        tmp43Result5 = tmp43(tmp30Result2, size);
      }
    }
    const obj12 = { children: items9 };
    items9[2] = tmp43Result5;
    tmp37Result = tmp37(tmp38, obj12);
  }
  items10 = [tmp43(tmp42, obj9), ];
  let tmp43Result6 = null;
  if (tmp25) {
    const obj13 = { variant: "body-xs/medium", color: "text-feedback-warning", style: tmp.trimError, children: intl.format(source(onDurationChange[22]).t["e12/z4"], obj14) };
    const Text = tmp15(tmp16[26]).Text;
    intl = tmp15(tmp16[22]).intl;
    obj14 = { limit: tmp24 };
    tmp43Result6 = tmp43(Text, obj13);
  }
  items10[1] = tmp43Result6;
  items8[1] = closure_12(closure_6, obj8);
  const obj15 = { style: tmp.previewButton, children: closure_10(Button, obj16) };
  Button = tmp15(tmp16[27]).Button;
  const intl2 = tmp15(tmp16[22]).intl;
  const string = intl2.string;
  const t = tmp15(tmp16[22]).t;
  obj16 = { variant: "secondary", text: string(null != first2 ? t.hHBkuG : t.CCRKNz), onPress: callback3, disabled: tmp52, loading: first3 };
  if (null != first2) {
    callback3 = callback2;
  }
  tmp52 = null == preview || first3;
  let obj17 = { children: items8 };
  items8[2] = closure_10(closure_6, obj15);
  return closure_12(first3, obj17);
};
