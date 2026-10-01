// Module ID: 9440
// Function ID: 9441
// Name: VoiceSensitivity
// Dependencies: [5, 32, 19, 17, 1993, 5731, 1980, 1074, 5045, 21, 4836, 576, 4683, 1479, 504, 5451, 4891, 4541, 1115, 1177, 8053, 7726, 1364, 2]
// Exports: default

// Module 9440 (VoiceSensitivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4891 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import SpeakingStore from "SpeakingStore" /* 5731 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let c1, c2;

let ColorUtils;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
const View = react_native.View;
const AppStates = Constants.AppStates;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sensitivity: { position: "relative", height: 20 }, sensitivityBar: { position: "absolute", top: 7, left: 0, right: 0, bottom: 7, flexDirection: "row" }, sensitivityFill: rect, sensitivityCommon: { height: 6, borderRadius: 3 }, sensitivityMin: obj2, sensitivityMax: obj3, sensitivityDefault: obj4, sensitivitySpeaking: obj5, sensitivitySlider: { flex: 1, backgroundColor: "transparent", marginVertical: -10 } };
rect = { position: "absolute", backgroundColor: nativeDefault.unsafe_rawColors.WHITE, opacity: 0.5, top: 7, left: 0, right: 0, bottom: 7 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj4 = { flex: 1, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.6) };
ColorUtils = ColorUtils_mod;
obj5 = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/VoiceSensitivity.tsx");

export default function VoiceSensitivity(auto) {
  let _undefined;
  let c10;
  let fn;
  let intl;
  let intl2;
  let intl4;
  let items10;
  let items11;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let num;
  let obj4;
  let obj5;
  let stringResult;
  let tmp17;
  auto = auto.auto;
  const onThresholdChange = auto.onThresholdChange;
  let width;
  let stateFromStores;
  let first2;
  let state;
  c10 = undefined;
  let ref;
  const threshold = auto.threshold;
  let tmp = ref();
  const sum = threshold + 100;
  stateFromStores.useRef(null);
  const ref1 = stateFromStores.useRef(null);
  stateFromStores.useRef(null);
  const tmp6 = width(stateFromStores.useState(first2.isCurrentUserSpeaking()), 2);
  const first = tmp6[0];
  let closure_3 = tmp6[1];
  width = onThresholdChange(first[13])().width;
  let obj = auto(first[14]);
  const items = [state];
  stateFromStores = obj.useStateFromStores(items, () => state.getState(), []);
  const tmp12 = width(stateFromStores.useState(0), 2);
  const first1 = tmp12[0];
  let closure_7 = tmp12[1];
  const tmp14 = width(stateFromStores.useState(sum), 2);
  first2 = tmp14[0];
  state = tmp14[1];
  const tmp16 = width(stateFromStores.useState(first2 / 100), 2);
  [tmp17, c10] = tmp16;
  const tmp18 = width(stateFromStores.useState(width * (1 - first1 / -100)), 2);
  let closure_11 = tmp18[1];
  const items1 = [auto, first2];
  const first3 = tmp18[0];
  const effect = stateFromStores.useEffect(() => {
    const tmp = auto;
    if (!tmp) {
      _undefined(first2 / 100);
    }
  }, items1);
  const items2 = [auto, first1, width];
  const effect1 = stateFromStores.useEffect(() => {
    const tmp = auto;
    if (!tmp) {
      closure_11(width * (1 - first1 / -100));
    }
  }, items2);
  const callback = stateFromStores.useCallback((arg0, arg1) => {
    closure_3(arg1);
    closure_7(arg0);
  }, []);
  const items3 = [callback, stateFromStores];
  const callback1 = stateFromStores.useCallback((arg0) => {
    state(arg0);
  }, []);
  const effect2 = stateFromStores.useEffect(() => {
    let _true;
    function listenOnlyIfWeHavePermission() {
      return obj(...arguments);
    }
    let obj = function _listenOnlyIfWeHavePermission() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                let closure_0 = tmp3;
                c1 = 1;
                c2 = 1;
                const obj4 = { value: obj3.hasPermission(constants.AUDIO, { showAuthorizationError: false }), done: false };
                obj3 = closure_2_1(first[15]);
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp4 = value && !closure_128_0;
              if (tmp4) {
                mediaEngine = mediaEngine.getMediaEngine();
                mediaEngine.on(_true(first[16]).MediaEngineEvent.VoiceActivity, closure_1_12);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp16) {
            c2 = 3;
            throw tmp16;
          }
        }
      });
      return obj(...arguments);
    };
    if (stateFromStores === _undefined.ACTIVE) {
      let c0 = false;
      listenOnlyIfWeHavePermission();
      return () => {
        let c0 = true;
        const mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, callback);
      };
    }
  }, items3);
  stateFromStores.useRef(false);
  ref = stateFromStores.useRef(false);
  const ref2 = stateFromStores.useRef(null);
  const items4 = [auto, first];
  const effect3 = stateFromStores.useEffect(() => {
    if (ref.current) {
      const tmp2 = auto;
      if (tmp2) {
        if (ref.current) {
          if (first) {
            if (null != ref.current) {
              let _clearTimeout = clearTimeout;
              clearTimeout(tmp5.current);
              ref.current = null;
            }
            let AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            let announce = AccessibilityAnnouncer.announce;
            let intl = intl5.intl;
            announce(intl.string(intl5.t.haLKZ0));
          } else {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              ref.current = null;
              const AccessibilityAnnouncer = auto(first[17]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = auto(first[18]).intl;
              announce(intl.string(auto(first[18]).t.X2hJL7));
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
      } else {
        ref.current = false;
      }
    } else {
      tmp.current = true;
    }
  }, items4);
  const tmp8 = onThresholdChange;
  if (auto) {
    let obj2 = {
      accessible: true,
      role: "meter",
      "aria-label": intl2.string(tmp10(tmp9[18]).t.yZcOjo),
      "aria-valuenow": num,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuetext": stringResult,
      onAccessibilityFocus() {
          ref.current = true;
        },
      onAccessibilityBlur() {
          ref.current = false;
          if (null != ref2.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref2.current);
            ref2.current = null;
          }
        },
      style: tmp.sensitivity,
      children: callback(first1, obj4)
    };
    const tmp30 = first ? tmp.sensitivitySpeaking : tmp.sensitivityDefault;
    const AccessibilityFocusView = tmp10(tmp9[19]).AccessibilityFocusView;
    intl2 = tmp10(tmp9[18]).intl;
    num = 0;
    const tmp31 = ref;
    if (first) {
      num = 100;
    }
    const intl3 = tmp10(tmp9[18]).intl;
    const string = intl3.string;
    const t = tmp10(tmp9[18]).t;
    if (first) {
      stringResult = string(t.haLKZ0);
    } else {
      stringResult = string(t.X2hJL7);
    }
    let obj3 = { children: items6 };
    obj4 = { style: tmp.sensitivityBar, children: callback(first1, obj5) };
    obj5 = { style: items5 };
    items5 = [tmp.sensitivityCommon, tmp30];
    items6 = [callback(AccessibilityFocusView, obj2), ];
    const obj6 = { inset: true, children: intl4.string(auto(first[18]).t.W3K5Im) };
    const FormHint = tmp10(tmp9[20]).FormHint;
    intl4 = tmp10(tmp9[18]).intl;
    items6[1] = callback(FormHint, obj6);
    return tmp31(first1, obj3);
  } else {
    const obj9 = { ref, style: items7 };
    items7 = [, , ];
    const obj7 = { style: tmp.sensitivity, children: items10 };
    const obj8 = { style: tmp.sensitivityBar, children: items8 };
    ({ sensitivityCommon: arr6[0], sensitivityMin: arr6[1] } = tmp);
    const obj10 = { flex: tmp17 };
    items7[2] = obj10;
    items8 = [callback(first1, obj9), ];
    const obj11 = { ref: ref1, style: items9 };
    items9 = [, , ];
    ({ sensitivityCommon: arr8[0], sensitivityMax: arr8[1] } = tmp);
    const obj12 = { flex: 1 - tmp17 };
    items9[2] = obj12;
    items8[1] = callback(first1, obj11);
    items10 = [ref(first1, obj8), , ];
    const obj13 = { ref: ref2, style: items11 };
    items11 = [tmp.sensitivityFill, ];
    const obj14 = { left: first3 };
    items11[1] = obj14;
    items10[1] = callback(first1, obj13);
    const obj15 = {
      style: tmp.sensitivitySlider,
      value: sum,
      minimumValue: 0,
      maximumValue: 100,
      minimumTrackTintColor: "transparent",
      maximumTrackTintColor: "transparent",
      accessibilityLabel: intl.string(auto(first[18]).t["sqUm+k"]),
      onValueChange: callback1,
      onSlidingComplete: function handleSlidingComplete(arg0) {
          onThresholdChange(-1 * (100 - arg0));
        },
      onResponderGrant: fn
    };
    const tmp8Result = tmp8(first[21]);
    intl = tmp10(tmp9[18]).intl;
    fn = undefined;
    const tmp10Result = auto(first[22]);
    const tmp26 = ref;
    const tmp27 = first1;
    const tmp28 = callback;
    if (tmp10Result.isAndroid()) {
      fn = () => true;
    }
    items10[2] = tmp28(tmp8Result, obj15);
    return tmp26(tmp27, obj7);
  }
};
