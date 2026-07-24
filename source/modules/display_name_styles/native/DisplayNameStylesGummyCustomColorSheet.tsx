// Module ID: 14284
// Function ID: 109677
// Name: DisplayNameStylesGummyCustomColorSheet
// Dependencies: [31, 27, 1861, 33, 4130, 689, 3991, 1860, 665, 4099, 4098, 5187, 5186, 1212, 4543, 14285, 13624, 2]
// Exports: default

// Module 14284 (DisplayNameStylesGummyCustomColorSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import items3 from "items3";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: closure_5, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: closure_6 } = items3);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.huePickerInset = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 + 2, alignSelf: "stretch" };
_createForOfIteratorHelperLoose.previewWrapper = { width: "25%", padding: 2 };
let obj2 = { height: 40, flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.preview = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 + 2, alignSelf: "stretch" };
let result = require("items3").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx");

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onSelect(3991);
  let obj1 = onSelect(1860);
  let obj2 = onSelect(665);
  const sharedValue = obj.useSharedValue(obj1.wrapHue(obj2.int2hslRaw(onSelect.initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = React.useCallback(() => {
    const result = onSelect(outer1_2[9]).triggerHapticFeedback(onSelect(outer1_2[9]).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = React.useCallback(() => {
    const result = onSelect(outer1_2[9]).triggerHapticFeedback(onSelect(outer1_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = onSelect(outer1_2[9]);
    onSelect(onSelect(outer1_2[7]).hueToGummyColor(sharedValue.get()));
    const obj2 = onSelect(outer1_2[7]);
    sharedValue(outer1_2[10]).hideActionSheet();
  }, items);
  obj = {};
  obj = {};
  const intl = onSelect(1212).intl;
  obj.title = intl.string(onSelect(1212).t.WTqQ5e);
  obj1 = { variant: "primary", size: "sm" };
  const intl2 = onSelect(1212).intl;
  obj1.text = intl2.string(onSelect(1212).t.XqMe3N);
  obj1.onPress = callback1;
  obj.trailing = callback(onSelect(4543).Button, obj1);
  obj.header = callback(onSelect(5186).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.body };
  const obj3 = { style: tmp.previewWrapper, children: callback(View, { style: tmp.preview, children: callback(sharedValue(14285), { hue: sharedValue }) }) };
  const items1 = [callback(View, obj3), ];
  const obj4 = { style: tmp.preview, children: callback(sharedValue(14285), { hue: sharedValue }) };
  items1[1] = callback(View, { style: tmp.huePickerInset, children: callback(sharedValue(13624), obj6) });
  obj2.children = items1;
  obj.children = callback2(View, obj2);
  return callback(onSelect(5187).BottomSheet, obj);
};
