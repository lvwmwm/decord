// Module ID: 10518
// Function ID: 10519
// Name: MediaKeyboardBottomSheetHandle
// Dependencies: [19, 21, 8833, 1114, 8983, 2]

// Module 10518 (MediaKeyboardBottomSheetHandle)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8833 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const native = tmp(8983);
const jsx = Fragment.jsx;
const memoResult = react.memo(function MediaKeyboardBottomSheetHandle(onPress) {
  let stringResult;
  onPress = onPress.onPress;
  const animatedIndex = onPress.animatedIndex;
  const obj = useStateFromSharedValue;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(animatedIndex, (arg0) => arg0 > 0);
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (derivedStateFromSharedValue) {
    stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  return jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;
