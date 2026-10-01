// Module ID: 16968
// Function ID: 16969
// Name: ActivityAccessibilityLayer
// Dependencies: [32, 19, 17, 11755, 21, 4836, 5275, 1115, 5263, 5266, 2]
// Exports: default

// Module 16968 (ActivityAccessibilityLayer)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import react_native from "react-native" /* 5275 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
function FocusedActivityAccessibilityLayer(activityName) {
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
  const tmp = closure_10();
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
  const AccessibilityView = tmp10(tmp8[8]).AccessibilityView;
  tmp16 = undefined;
  const tmp13 = closure_9;
  const tmp14 = closure_6;
  if (tmp3) {
    tmp16 = callback1;
  }
  str = "no-hide-descendants";
  if (tmp3) {
    str = "auto";
  }
  items = [closure_8(AccessibilityView, obj3), ];
  const obj4 = { ref, style: absoluteFill.absoluteFill, pointerEvents: str3, accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, accessibilityHint: intl3.string(tmp10(tmp8[7]).t["8DaKO6"]), accessibilityElementsHidden: tmp3, importantForAccessibility: str2, onPress: callback };
  str2 = "auto";
  str3 = "auto";
  const tmp17 = closure_4;
  if (tmp3) {
    str3 = "none";
  }
  intl3 = tmp10(tmp8[7]).intl;
  if (tmp3) {
    str2 = "no-hide-descendants";
  }
  items[1] = closure_8(tmp17, obj4);
  return tmp13(tmp14, obj2);
}
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = react_native2);
const IS_IOS = VoicePanelConstants.IS_IOS;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ fill: { flex: 1 } });
let result = size.fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default function ActivityAccessibilityLayer(isActivityFocused) {
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
        children = metroImportAll(FocusedActivityAccessibilityLayer, obj2);
      }
      return children;
    }
  }
  children = merged.children;
};
