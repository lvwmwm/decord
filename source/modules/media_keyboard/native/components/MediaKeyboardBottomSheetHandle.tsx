// Module ID: 9660
// Function ID: 75237
// Dependencies: [31, 27, 1552, 33, 4130, 689, 8829, 1324, 8277, 1212, 8372, 2]

// Module 9660
import get_ActivityIndicator from "get ActivityIndicator";
import { DRAG_HANDLE } from "DRAG_HANDLE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
let obj = {};
obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = "transparent";
obj["height"] = DRAG_HANDLE.slotHeight;
obj["alignItems"] = "center";
obj["bottom"] = undefined;
obj.headerHandleWrap = obj;
_createForOfIteratorHelperLoose = { backgroundColor: DRAG_HANDLE.barColor, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginTop: DRAG_HANDLE.barMarginTop, height: DRAG_HANDLE.barHeight, width: DRAG_HANDLE.barWidth };
obj.dragHandleBar = _createForOfIteratorHelperLoose;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  const tmp = callback();
  let obj = require(8829) /* useGradientBottom */;
  const gradientBottom = obj.useGradientBottom();
  let obj1 = require(8277) /* _createForOfIteratorHelperLoose */;
  const derivedStateFromSharedValue = obj1.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  if (tmp3) {
    obj = { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress };
    let tmp6Result = tmp6(require(8372) /* TwinButtons */.ActionSheetDragHandle, obj);
  } else {
    obj = { accessibilityLabel: stringResult, accessibilityRole: "button", "aria-hidden": null == onPress };
    const items = [tmp.headerHandleWrap, gradientBottom];
    obj.style = items;
    obj.onPress = onPress;
    obj1 = { style: tmp.dragHandleBar };
    obj.children = tmp6(closure_4, obj1);
    tmp6Result = tmp6(closure_3, obj);
  }
  return tmp6Result;
});
const result = require("DRAG_HANDLE").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;
