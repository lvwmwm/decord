// Module ID: 15826
// Function ID: 122240
// Name: FocusedActivityAccessibilityLayer
// Dependencies: [57, 31, 27, 10015, 33, 4130, 4539, 1212, 4525, 4528, 2]
// Exports: default

// Module 15826 (FocusedActivityAccessibilityLayer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { IS_IOS } from "VoicePanelModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function FocusedActivityAccessibilityLayer(activityName) {
  let channelId;
  let children;
  activityName = activityName.activityName;
  ({ channelId, children } = activityName);
  const tmp = callback3();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  const ref = React.useRef(null);
  callback = React.useCallback(() => {
    callback(true);
  }, []);
  const callback1 = React.useCallback(() => {
    callback(false);
    let obj = callback(ref[6]);
    obj = { ref, delay: 300 };
    const result = obj.setAccessibilityFocus(obj);
  }, []);
  if (null != activityName) {
    const intl2 = _require(ref[7]).intl;
    let obj = { name: activityName };
    let formatToPlainStringResult = intl2.formatToPlainString(_require(ref[7]).t.XSfwGL, obj);
  } else {
    const intl = _require(ref[7]).intl;
    formatToPlainStringResult = intl.string(_require(ref[7]).t.KYNi2m);
  }
  obj = { style: tmp.fill };
  obj = { nativeID: "voice-panel-activity-" + channelId, accessibilityViewIsModal: first };
  let tmp15;
  if (first) {
    tmp15 = callback1;
  }
  obj.onAccessibilityEscape = tmp15;
  obj.accessibilityElementsHidden = !first;
  let str = "no-hide-descendants";
  if (first) {
    str = "auto";
  }
  obj.importantForAccessibility = str;
  obj.style = tmp.fill;
  obj.children = children;
  const items = [closure_8(_require(ref[8]).AccessibilityView, obj), ];
  const obj1 = { ref, style: absoluteFill.absoluteFill };
  let str2 = "auto";
  let str3 = "auto";
  if (first) {
    str3 = "none";
  }
  obj1.pointerEvents = str3;
  obj1.accessible = true;
  obj1.accessibilityRole = "button";
  obj1.accessibilityLabel = formatToPlainStringResult;
  const intl3 = _require(ref[7]).intl;
  obj1.accessibilityHint = intl3.string(_require(ref[7]).t["8DaKO6"]);
  obj1.accessibilityElementsHidden = first;
  if (first) {
    str2 = "no-hide-descendants";
  }
  obj1.importantForAccessibility = str2;
  obj1.onPress = callback;
  items[1] = closure_8(closure_4, obj1);
  obj.children = items;
  return closure_9(closure_6, obj);
}
({ Pressable: closure_4, StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ fill: { flex: 1 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default function ActivityAccessibilityLayer(isActivityFocused) {
  let obj = Object.create(null);
  obj.isActivityFocused = 0;
  const merged = Object.assign(isActivityFocused, obj);
  obj = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  if (IS_IOS) {
    if (obj.useIsScreenReaderEnabled()) {
      if (isActivityFocused.isActivityFocused) {
        obj = {};
        const merged1 = Object.assign(merged);
        let children = callback2(FocusedActivityAccessibilityLayer, obj);
      }
      return children;
    }
  }
  children = merged.children;
};
