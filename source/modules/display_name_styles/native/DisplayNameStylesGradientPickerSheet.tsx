// Module ID: 14236
// Function ID: 109363
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: [57, 31, 27, 1861, 653, 33, 4130, 689, 8518, 1860, 4099, 675, 4098, 13567, 5187, 5186, 4543, 1212, 4554, 665, 14237, 22, 4660, 2]
// Exports: default

// Module 14236 (DisplayNameStylesColorPickerSheet)
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
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.gradientContainer = obj1;
let obj2 = { left: require("_createForOfIteratorHelperLoose").space.PX_24, right: require("_createForOfIteratorHelperLoose").space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.dropperContainer = obj2;
_createForOfIteratorHelperLoose.dropper = { borderColor: "white", padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1 };
let obj4 = { height: 50, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gradient = obj4;
let obj5 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.optionContainer = obj5;
_createForOfIteratorHelperLoose.swatchWrapper = { width: "25%", padding: 2 };
const obj6 = { height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
_createForOfIteratorHelperLoose.pressable = obj6;
let obj3 = { borderColor: "white", padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1 };
_createForOfIteratorHelperLoose.selected = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.option = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedEffectId) {
  selectedEffectId = selectedEffectId.selectedEffectId;
  const onSelectColors = selectedEffectId.onSelectColors;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = selectedEffectId(8518);
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj1 = selectedEffectId(1860);
  let items = [selectedEffectId];
  const effectColorCount = obj1.getEffectColorCount(selectedEffectId);
  memo = memo.useMemo(() => callback2(selectedEffectId), items);
  const tmp4 = displayNameStylesEffectConfig(memo.useState(selectedEffectId.selectedColors), 2);
  const first = tmp4[0];
  let closure_6 = tmp4[1];
  const items1 = [first, onSelectColors];
  const items2 = [memo, displayNameStylesEffectConfig.defaultColors];
  const callback = memo.useCallback(() => {
    let obj = selectedEffectId(tmp[10]);
    const result = obj.triggerHapticFeedback(selectedEffectId(tmp[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first);
    obj = { default: false, colors: first };
    onSelectColors(tmp[11]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(tmp[11]);
    onSelectColors(tmp[12]).hideActionSheet();
  }, items1);
  const items3 = [first];
  const callback1 = memo.useCallback(() => {
    let defaultColors = memo[0];
    if (null == defaultColors) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...defaultColors];
    closure_6(items);
  }, items2);
  let closure_7 = memo.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = {};
    let num = 0;
    tmp = onSelectColors(tmp[13]);
    if (null != first[arg0]) {
      num = tmp2;
    }
    obj.color = num;
    obj.onSelect = function onSelect(arg0) {
      let closure_0 = arg0;
      const result = selectedEffectId(4099).triggerHapticFeedback(selectedEffectId(4099).HapticFeedbackTypes.IMPACT_MEDIUM);
      outer1_6((arr) => arr.map((arg0, arg1) => {
        let tmp = arg0;
        if (arg1 === closure_0) {
          tmp = outer1_0;
        }
        return tmp;
      }));
    };
    obj.actionButtonVariant = "primary";
    tmp(obj, "stack");
  }, items3);
  let closure_8 = memo.useCallback((arg0) => {
    const items = [...arg0];
    callback(items);
  }, []);
  obj = {};
  obj = { title: displayNameStylesEffectConfig.name };
  obj1 = { variant: "primary", size: "sm" };
  let intl = selectedEffectId(1212).intl;
  obj1.text = intl.string(selectedEffectId(1212).t.XqMe3N);
  obj1.onPress = callback;
  obj.trailing = callback(selectedEffectId(4543).Button, obj1);
  obj.header = callback(selectedEffectId(5186).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body };
  const obj3 = { style: tmp.gradientContainer };
  const obj4 = { style: tmp.gradient, colors: first.map((color) => selectedEffectId(tmp[19]).int2hex(color)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
  const items4 = [callback(onSelectColors(4554), obj4), ];
  const obj5 = { style: tmp.dropperContainer };
  const tmp7 = onSelectColors(4554);
  obj5.children = Array.from({ length: effectColorCount }).map((arg0, arg1) => {
    let closure_0 = arg1;
    let obj = {
      style: tmp.dropper,
      onPress() {
        return outer1_7(closure_0);
      }
    };
    const intl = selectedEffectId(tmp[17]).intl;
    obj = { number: arg1 + 1 };
    obj.accessibilityLabel = intl.formatToPlainString(selectedEffectId(tmp[17]).t.n5Ve0L, obj);
    obj.accessibilityRole = "button";
    obj.children = outer1_9(selectedEffectId(tmp[20]).EyeDropperIcon, { color: "white", size: "sm" });
    return outer1_9(closure_6, obj, arg1);
  });
  items4[1] = callback(first, obj5);
  obj3.children = items4;
  const items5 = [callback2(first, obj3), , ];
  const arr = Array.from({ length: effectColorCount });
  items5[1] = callback(first, {
    style: tmp.optionContainer,
    children: memo.map((arr) => {
      let closure_0 = arr;
      let obj = onSelectColors(tmp[21]);
      let selected = obj.isEqual(arr, first);
      obj = { style: tmp.swatchWrapper };
      obj = {};
      const items = [outer1_9.pressable, ];
      if (selected) {
        selected = tmp.selected;
      }
      items[1] = selected;
      obj.style = items;
      obj.onPress = function onPress() {
        return outer1_8(closure_0);
      };
      const obj1 = { style: outer1_9.option, colors: arr.map((color) => selectedEffectId(table[19]).int2hex(color)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
      obj.children = outer1_9(onSelectColors(outer1_9[18]), obj1);
      obj.children = outer1_9(selectedEffectId(outer1_9[22]).PressableOpacity, obj);
      return outer1_9(first, obj, arg1);
    })
  });
  const obj7 = {};
  const intl2 = selectedEffectId(1212).intl;
  obj7.text = intl2.string(selectedEffectId(1212).t.yBZMsQ);
  obj7.onPress = callback1;
  obj7.variant = "secondary";
  items5[2] = callback(selectedEffectId(4543).Button, obj7);
  obj2.children = items5;
  obj.children = callback2(first, obj2);
  return callback(selectedEffectId(5187).BottomSheet, obj);
};
