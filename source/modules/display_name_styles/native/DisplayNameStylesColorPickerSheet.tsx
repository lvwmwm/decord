// Module ID: 14289
// Function ID: 109705
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: [57, 31, 27, 1861, 653, 33, 4130, 689, 7186, 8564, 4099, 4098, 13618, 675, 5187, 5186, 1212, 2556, 4543, 22, 665, 1862, 14287, 2]
// Exports: default

// Module 14289 (DisplayNameStylesColorPickerSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { getColorPresetsForEffect } from "items3";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.presetGrid = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "row", justifyContent: "center" };
_createForOfIteratorHelperLoose.presetRow = obj2;
let obj3 = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 2, borderColor: "transparent" };
_createForOfIteratorHelperLoose.presetColor = obj3;
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.presetColorSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
let obj4 = { borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND };
_createForOfIteratorHelperLoose.buttonsContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.button = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  let tmp = _createForOfIteratorHelperLoose();
  let callback = tmp;
  let obj = selectedColor(onSelectColor[8]);
  let tmp2 = selectedEffectId(onSelectColor[9])()[selectedEffectId];
  const React = tmp2;
  let items = [selectedEffectId];
  const memo = React.useMemo(() => memo1(selectedEffectId).map((arg0) => arg0[0]), items);
  const tmp3 = callback(React.useState(selectedColor), 2);
  const first = tmp3[0];
  let closure_6 = tmp3[1];
  const items1 = [first, selectedColor];
  const memo1 = React.useMemo(() => first !== selectedColor, items1);
  let closure_8 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [first, onSelectColor];
  callback = React.useCallback(() => {
    const result = selectedColor(onSelectColor[10]).triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj = selectedColor(onSelectColor[10]);
    tmp2 = onSelectColor(tmp2[0]);
    selectedEffectId(onSelectColor[11]).hideActionSheet();
  }, items2);
  const items4 = [memo1, first, onSelectColor, tmp2];
  const callback1 = React.useCallback(() => {
    selectedEffectId(onSelectColor[12])({
      color: first,
      onSelect(arg0) {
        const result = selectedColor(onSelectColor[10]).triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        outer1_2(arg0);
        const obj = selectedColor(onSelectColor[10]);
        selectedEffectId(onSelectColor[11]).hideActionSheet();
      },
      actionButtonVariant: "primary"
    });
  }, items3);
  const callback2 = React.useCallback(() => {
    let obj = selectedColor(onSelectColor[10]);
    const result = obj.triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first);
      obj = { default: first === onSelectColor[0] };
      const items = [first];
      obj.colors = items;
      selectedEffectId(onSelectColor[13]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
      const obj2 = selectedEffectId(onSelectColor[13]);
    }
    selectedEffectId(onSelectColor[11]).hideActionSheet();
  }, items4);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef };
  obj = { style: tmp.header };
  const obj1 = {};
  const intl = selectedColor(onSelectColor[16]).intl;
  obj1.title = intl.string(selectedEffectId(onSelectColor[17])["6OxgN7"]);
  let obj2 = { style: tmp.headerTrailing };
  let obj3 = {};
  const intl2 = selectedColor(onSelectColor[16]).intl;
  obj3.text = intl2.string(selectedColor(onSelectColor[16]).t.XqMe3N);
  obj3.onPress = callback2;
  obj3.variant = "primary";
  obj3.size = "sm";
  obj2.children = callback2(selectedColor(onSelectColor[18]).Button, obj3);
  obj1.trailing = callback2(first, obj2);
  obj.children = callback2(selectedColor(onSelectColor[15]).BottomSheetTitleHeader, obj1);
  obj.header = callback2(first, obj);
  const obj4 = { style: tmp.container };
  const obj5 = { style: tmp.contentContainer };
  const obj6 = { style: tmp.presetGrid };
  let obj9 = selectedEffectId(onSelectColor[19]);
  obj6.children = obj9.chunk(memo.slice(0, 12), 6).map((arr) => {
    let closure_0 = arg1;
    return outer1_9(first, {
      style: tmp.presetRow,
      children: arr.map((color) => {
        let closure_0 = color;
        let obj = {
          onPress() {
            return outer2_8(closure_0);
          }
        };
        const items = [outer1_3.presetColor, , ];
        obj = { backgroundColor: selectedColor(onSelectColor[20]).int2hex(color) };
        items[1] = obj;
        let presetColorSelected = color === outer1_5;
        if (presetColorSelected) {
          presetColorSelected = outer1_3.presetColorSelected;
        }
        items[2] = presetColorSelected;
        obj.style = items;
        obj.accessibilityRole = "button";
        const obj3 = selectedColor(onSelectColor[20]);
        const tmp = outer2_9;
        const tmp2 = closure_6;
        obj.accessibilityLabel = selectedColor(onSelectColor[20]).int2hex(color);
        return tmp(tmp2, obj, 6 * closure_0 + arg1);
      })
    }, arg1);
  });
  const items5 = [callback2(first, obj6), ];
  const obj7 = { style: tmp.buttonsContainer };
  let tmp12 = selectedEffectId === selectedColor(onSelectColor[21]).DisplayNameEffect.SOLID;
  if (tmp12) {
    const obj8 = { style: tmp.button };
    obj9 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
    const intl3 = selectedColor(onSelectColor[16]).intl;
    obj9.text = intl3.string(selectedEffectId(onSelectColor[17]).gIeJTK);
    obj9.onPress = callback;
    obj8.children = callback2(selectedColor(onSelectColor[18]).Button, obj9);
    tmp12 = callback2(first, obj8);
  }
  const items6 = [tmp12, ];
  const obj10 = { style: tmp.button };
  const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = selectedColor(onSelectColor[16]).intl;
  obj11.text = intl4.string(selectedColor(onSelectColor[16]).t["FHBa/1"]);
  obj11.onPress = callback1;
  obj11.icon = callback2(selectedColor(onSelectColor[22]).EyeDropperIcon, { size: "sm" });
  obj10.children = callback2(selectedColor(onSelectColor[18]).Button, obj11);
  items6[1] = callback2(first, obj10);
  obj7.children = items6;
  items5[1] = closure_10(first, obj7);
  obj5.children = items5;
  obj4.children = closure_10(first, obj5);
  obj.children = callback2(first, obj4);
  return callback2(selectedColor(onSelectColor[14]).BottomSheet, obj);
};
