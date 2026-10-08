// Module ID: 17594
// Function ID: 17595
// Name: ActivityAccessibilityLayer
// Dependencies: [109, 32, 19, 17, 11989, 21, 5090, 558, 576, 5369, 1126, 5357, 5360, 2]

// Module 17594 (ActivityAccessibilityLayer)
import react2 from "react" /* 576 */;
import react_native from "react-native" /* 5369 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11989 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const useIsScreenReaderEnabled = tmp(5360);
let closure_2 = ["isActivityFocused"];
({ Pressable: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native2);
const IS_IOS = VoicePanelConstants.IS_IOS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ fill: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedActivityAccessibilityLayer(channelId) {
  let activityName;
  let children;
  let ref;
  let require;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(22);
  ({ activityName, children } = channelId);
  channelId = channelId.channelId;
  const tmp4 = closure_12();
  [tmp6, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      _require(true);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
    cResult[1] = R;
  } else {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
  }
  if (cResult[2] !== activityName) {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
    cResult[2] = activityName;
    cResult[3] = tmp11;
  } else {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
  }
  const combined = "voice-panel-activity-" + channelId;
  if (tmp6) {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
  }
  if (tmp6) {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
  }
  if (cResult[4] === children) {
    class R {
      constructor() {
        _require(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }
    }
  }
  let obj2 = { nativeID: combined, accessibilityViewIsModal: tmp6, onAccessibilityEscape: tmp13, accessibilityElementsHidden: tmp14, importantForAccessibility: str, style: tmp4.fill, children };
  cResult[4] = children;
  cResult[5] = tmp6;
  cResult[6] = tmp4.fill;
  cResult[7] = combined;
  cResult[8] = undefined;
  cResult[9] = !tmp6;
  cResult[10] = "no-hide-descendants";
  cResult[11] = closure_10(require("AccessibilityView").AccessibilityView, obj2);
  closure_10(require("AccessibilityView").AccessibilityView, obj2);
}) : (function FocusedActivityAccessibilityLayer(activityName) {
  let _undefined;
  let c0;
  let channelId;
  let children;
  let formatToPlainStringResult;
  let intl3;
  let items;
  let str;
  let str2;
  let str3;
  let tmp10;
  let tmp16;
  let tmp3;
  let tmp8;
  activityName = activityName.activityName;
  _require = undefined;
  ({ channelId, children } = activityName);
  const tmp = closure_12();
  [tmp3, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const ref = react.useRef(null);
  const callback = react.useCallback(() => {
    _undefined(true);
  }, []);
  const callback1 = react.useCallback(() => {
    _undefined(false);
    const obj = react_native;
    const obj2 = { ref, delay: 300 };
    const result = obj.setAccessibilityFocus(obj2);
  }, []);
  if (null != activityName) {
    const intl2 = require("intl").intl;
    let obj = { name: activityName };
    formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.XSfwGL, obj);
    tmp8 = ref;
    tmp10 = _require;
  } else {
    tmp8 = ref;
    const intl = require("intl").intl;
    formatToPlainStringResult = intl.string(require("intl").t.KYNi2m);
    tmp10 = _require;
  }
  let obj2 = { style: tmp.fill, children: items };
  const obj3 = { nativeID: "voice-panel-activity-" + channelId, accessibilityViewIsModal: tmp3, onAccessibilityEscape: tmp16, accessibilityElementsHidden: !tmp3, importantForAccessibility: str, style: tmp.fill, children };
  const AccessibilityView = tmp10(tmp8[11]).AccessibilityView;
  tmp16 = undefined;
  const tmp13 = closure_11;
  const tmp14 = closure_8;
  if (tmp3) {
    tmp16 = callback1;
  }
  str = "no-hide-descendants";
  if (tmp3) {
    str = "auto";
  }
  items = [closure_10(AccessibilityView, obj3), ];
  const obj4 = { ref, style: absoluteFill.absoluteFill, pointerEvents: str3, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, accessibilityHint: intl3.string(tmp10(tmp8[10]).t["8DaKO6"]), accessibilityElementsHidden: tmp3, importantForAccessibility: str2, onPress: callback };
  str2 = "auto";
  str3 = "auto";
  const tmp17 = closure_6;
  if (tmp3) {
    str3 = "none";
  }
  intl3 = tmp10(tmp8[10]).intl;
  if (tmp3) {
    str2 = "no-hide-descendants";
  }
  items[1] = closure_10(tmp17, obj4);
  return tmp13(tmp14, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityAccessibilityLayer(isActivityFocused) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== isActivityFocused) {
    isActivityFocused = isActivityFocused.isActivityFocused;
    const tmp8 = _objectWithoutProperties(isActivityFocused, closure_2);
    cResult[0] = isActivityFocused;
    cResult[1] = isActivityFocused;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = isActivityFocused;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = IS_IOS;
  const tmpResult = useIsScreenReaderEnabled;
  if (tmp9) {
    if (tmpResult.useIsScreenReaderEnabled()) {
      let children;
      if (tmp4) {
        let tmp10;
        if (cResult[3] !== tmp5) {
          const obj2 = {};
          const merged = Object.assign(tmp5);
          const tmp16 = authStore(closure_13, obj2);
          cResult[3] = tmp5;
          cResult[4] = tmp16;
          tmp10 = tmp16;
        } else {
          tmp10 = cResult[4];
        }
        children = tmp10;
      }
      return children;
    }
  }
  children = tmp5.children;
}) : (function ActivityAccessibilityLayer(isActivityFocused) {
  isActivityFocused = isActivityFocused.isActivityFocused;
  const merged = Object.assign(isActivityFocused, Object.assign({ isActivityFocused: 0 }));
  const obj = useIsScreenReaderEnabled;
  const tmp2 = IS_IOS;
  if (tmp2) {
    if (obj.useIsScreenReaderEnabled()) {
      let children;
      if (isActivityFocused) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        children = authStore(closure_13, obj2);
      }
      return children;
    }
  }
  children = merged.children;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default tmp4;
