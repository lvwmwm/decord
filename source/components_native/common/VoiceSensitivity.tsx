// Module ID: 10743
// Function ID: 83585
// Name: VoiceSensitivity
// Dependencies: [5, 57, 31, 27, 4177, 4952, 6651, 653, 4344, 33, 4130, 689, 3974, 1450, 566, 4675, 4227, 3843, 1212, 1273, 7636, 7658, 477, 2]
// Exports: default

// Module 10743 (VoiceSensitivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_12;
let closure_13;
const require = arg1;
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { sensitivity: { position: "relative", height: 20 }, sensitivityBar: { position: "absolute", top: 7, left: 0, right: 0, bottom: 7, flexDirection: "row" } };
_createForOfIteratorHelperLoose = { position: "absolute", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, opacity: 0.5, top: 7, left: 0, right: 0, bottom: 7 };
_createForOfIteratorHelperLoose.sensitivityFill = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sensitivityCommon = { height: 6, borderRadius: 3 };
_createForOfIteratorHelperLoose.sensitivityMin = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300 };
_createForOfIteratorHelperLoose.sensitivityMax = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
let obj3 = { flex: 1 };
obj3.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400, 0.6);
_createForOfIteratorHelperLoose.sensitivityDefault = obj3;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
_createForOfIteratorHelperLoose.sensitivitySpeaking = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
_createForOfIteratorHelperLoose.sensitivitySlider = { flex: 1, backgroundColor: "transparent", marginVertical: -10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
const result = require("result").fileFinishedImporting("components_native/common/VoiceSensitivity.tsx");

export default function VoiceSensitivity(auto) {
  let AppStates;
  let tmp14;
  auto = auto.auto;
  const onThresholdChange = auto.onThresholdChange;
  const tmp = _createForOfIteratorHelperLoose();
  const sum = auto.threshold + 100;
  const ref = stateFromStores.useRef(null);
  const ref1 = stateFromStores.useRef(null);
  const tmp6 = width(stateFromStores.useState(first2.isCurrentUserSpeaking()), 2);
  const first = tmp6[0];
  let _isNativeReflectConstruct = tmp6[1];
  width = onThresholdChange(first[13])().width;
  let obj = auto(first[14]);
  const items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => state.getState(), []);
  const tmp9 = width(stateFromStores.useState(0), 2);
  const first1 = tmp9[0];
  let closure_7 = tmp9[1];
  const tmp11 = width(stateFromStores.useState(sum), 2);
  first2 = tmp11[0];
  closure_9 = tmp11[1];
  const ref2 = stateFromStores.useRef(null);
  [tmp14, AppStates] = width(stateFromStores.useState(first2 / 100), 2);
  const tmp15 = width(stateFromStores.useState(width * (1 - first1 / -100)), 2);
  let closure_11 = tmp15[1];
  const items1 = [auto, first2];
  const effect = stateFromStores.useEffect(() => {
    if (!auto) {
      callback3(first2 / 100);
    }
  }, items1);
  const items2 = [auto, first1, width];
  const effect1 = stateFromStores.useEffect(() => {
    if (!auto) {
      callback4(width * (1 - first1 / -100));
    }
  }, items2);
  let callback = stateFromStores.useCallback((arg0, arg1) => {
    callback(arg1);
    callback2(arg0);
  }, []);
  const items3 = [callback, stateFromStores];
  const callback1 = stateFromStores.useCallback((arg0) => {
    state(arg0);
  }, []);
  const effect2 = stateFromStores.useEffect(() => {
    function _listenOnlyIfWeHavePermission() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    if (stateFromStores === outer1_10.ACTIVE) {
      let c0 = false;
      (function listenOnlyIfWeHavePermission() {
        return _listenOnlyIfWeHavePermission(...arguments);
      })();
      return () => {
        let c0 = true;
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.removeListener(auto(first[16]).MediaEngineEvent.VoiceActivity, outer1_12);
      };
    }
  }, items3);
  callback = stateFromStores.useRef(false);
  _createForOfIteratorHelperLoose = stateFromStores.useRef(false);
  let closure_15 = stateFromStores.useRef(null);
  const items4 = [auto, first];
  const effect3 = stateFromStores.useEffect(() => {
    if (ref.current) {
      if (auto) {
        if (tmp3.current) {
          if (first) {
            if (null != tmp5.current) {
              let _clearTimeout = clearTimeout;
              clearTimeout(ref2.current);
              ref2.current = null;
            }
            let AccessibilityAnnouncer = auto(first[17]).AccessibilityAnnouncer;
            let intl = auto(first[18]).intl;
            AccessibilityAnnouncer.announce(intl.string(auto(first[18]).t.haLKZ0));
          } else {
            const _setTimeout = setTimeout;
            tmp5.current = setTimeout(() => {
              outer1_15.current = null;
              const AccessibilityAnnouncer = auto(first[17]).AccessibilityAnnouncer;
              const intl = auto(first[18]).intl;
              AccessibilityAnnouncer.announce(intl.string(auto(first[18]).t.X2hJL7));
            }, 1000);
          }
          return () => {
            if (null != outer1_15.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(outer1_15.current);
              outer1_15.current = null;
            }
          };
        }
      } else {
        tmp3.current = false;
      }
    } else {
      ref.current = true;
    }
  }, items4);
  if (auto) {
    obj = {};
    obj = { accessible: true, role: "meter", "aria-label": null, "aria-valuenow": null, "aria-valuemin": 0, "aria-valuemax": 100 };
    let intl = auto(first[18]).intl;
    obj["aria-label"] = intl.string(auto(first[18]).t.yZcOjo);
    let num5 = 0;
    if (first) {
      num5 = 100;
    }
    obj["aria-valuenow"] = num5;
    const intl2 = auto(first[18]).intl;
    const string = intl2.string;
    const t = auto(first[18]).t;
    if (first) {
      let stringResult = string(t.haLKZ0);
    } else {
      stringResult = string(t.X2hJL7);
    }
    obj["aria-valuetext"] = stringResult;
    obj.onAccessibilityFocus = function onAccessibilityFocus() {
      closure_14.current = true;
    };
    obj.onAccessibilityBlur = function onAccessibilityBlur() {
      closure_14.current = false;
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
    };
    obj.style = tmp.sensitivity;
    const obj1 = { style: tmp.sensitivityBar };
    const obj2 = {};
    const items5 = [tmp.sensitivityCommon, first ? tmp.sensitivitySpeaking : tmp.sensitivityDefault];
    obj2.style = items5;
    obj1.children = callback(first1, obj2);
    obj.children = callback(first1, obj1);
    const items6 = [callback(auto(first[19]).AccessibilityFocusView, obj), ];
    const obj3 = { inset: true };
    const intl3 = auto(first[18]).intl;
    obj3.children = intl3.string(auto(first[18]).t.W3K5Im);
    items6[1] = callback(auto(first[20]).FormHint, obj3);
    obj.children = items6;
    return callback(first1, obj);
  } else {
    const obj4 = { style: tmp.sensitivity };
    const obj5 = { style: tmp.sensitivityBar };
    const obj6 = { ref };
    const items7 = [, , ];
    ({ sensitivityCommon: arr6[0], sensitivityMin: arr6[1] } = tmp);
    const obj7 = { flex: tmp14 };
    items7[2] = obj7;
    obj6.style = items7;
    const items8 = [callback(first1, obj6), ];
    const obj8 = { ref: ref1 };
    const items9 = [, , ];
    ({ sensitivityCommon: arr8[0], sensitivityMax: arr8[1] } = tmp);
    const obj9 = { flex: 1 - tmp14 };
    items9[2] = obj9;
    obj8.style = items9;
    items8[1] = callback(first1, obj8);
    obj5.children = items8;
    const items10 = [callback(first1, obj5), , ];
    let obj10 = { ref: ref2 };
    const items11 = [tmp.sensitivityFill, ];
    const obj11 = { left: tmp15[0] };
    items11[1] = obj11;
    obj10.style = items11;
    items10[1] = callback(first1, obj10);
    const obj12 = {
      style: tmp.sensitivitySlider,
      value: sum,
      minimumValue: 0,
      maximumValue: 100,
      minimumTrackTintColor: "transparent",
      maximumTrackTintColor: "transparent",
      onValueChange: callback1,
      onSlidingComplete: function handleSlidingComplete(arg0) {
          onThresholdChange(-1 * (100 - arg0));
        }
    };
    obj10 = auto(first[22]);
    let fn;
    if (obj10.isAndroid()) {
      fn = () => true;
    }
    obj12.onResponderGrant = fn;
    items10[2] = callback(onThresholdChange(first[21]), obj12);
    obj4.children = items10;
    return callback(first1, obj4);
  }
  const tmp13 = width(stateFromStores.useState(first2 / 100), 2);
};
