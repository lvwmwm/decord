// Module ID: 16322
// Function ID: 127375
// Name: RoleGradientPickerActionSheet
// Dependencies: [57, 31, 27, 16307, 33, 4130, 689, 1913, 1327, 4098, 13567, 5187, 5186, 1212, 4543, 4554, 14237, 4660, 665, 2]
// Exports: default

// Module 16322 (RoleGradientPickerActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_7, GRADIENT_PRESETS: closure_8 } = HOLOGRAPHIC_ROLE_COLORS);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.gradientContainer = obj1;
let obj2 = { left: require("_createForOfIteratorHelperLoose").space.PX_24, right: require("_createForOfIteratorHelperLoose").space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.dropperContainer = obj2;
let obj3 = { borderColor: "white", tintColor: "white", padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1 };
_createForOfIteratorHelperLoose.dropper = obj3;
const obj4 = { height: 50, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gradient = obj4;
let obj5 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.optionContainer = obj5;
let obj6 = { width: 80, height: 50, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", padding: 2 };
_createForOfIteratorHelperLoose.pressable = obj6;
_createForOfIteratorHelperLoose.selected = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let obj7 = { borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.option = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj8 = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default function RoleGradientPickerActionSheet(arg0) {
  let colors;
  let onSelect;
  ({ colors, onSelect } = arg0);
  let first;
  let callback;
  let callback1;
  let tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  if (null == colors) {
    colors = closure_7;
  }
  const tmp3 = callback(callback1.useState(colors), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let obj = onSelect(first[7]);
  const values = Object.values(obj.extractColorStringsFromServerColors(first));
  let items = [first, onSelect];
  const found = values.filter(onSelect(first[8]).isNotNullish);
  callback = callback1.useCallback(() => {
    const tmp = onSelect(first);
    onSelect(first)(first[9]).hideActionSheet();
  }, items);
  callback1 = callback1.useCallback((arg0) => {
    callback(arg0);
  }, []);
  let items1 = [first, callback1];
  const items2 = [first, callback1];
  const callback2 = callback1.useCallback(() => {
    let obj = {};
    let primary_color;
    tmp = tmp(first[10]);
    if (null != first) {
      primary_color = first.primary_color;
    }
    let num = 0;
    if (null != primary_color) {
      num = primary_color;
    }
    obj.color = num;
    obj.onSelect = function onSelect(arg0) {
      const obj = {};
      const merged = Object.assign(outer1_2);
      obj["primary_color"] = arg0;
      return outer1_4(obj);
    };
    tmp(obj, "stack");
  }, items1);
  const callback3 = callback1.useCallback(() => {
    let obj = {};
    let secondary_color;
    tmp = tmp(first[10]);
    if (null != first) {
      secondary_color = first.secondary_color;
    }
    let num = 0;
    if (null != secondary_color) {
      num = secondary_color;
    }
    obj.color = num;
    obj.onSelect = function onSelect(arg0) {
      const obj = {};
      const merged = Object.assign(outer1_2);
      obj["secondary_color"] = arg0;
      return outer1_4(obj);
    };
    tmp(obj, "stack");
  }, items2);
  obj = {};
  obj = {};
  const intl = onSelect(first[13]).intl;
  obj.title = intl.string(onSelect(first[13]).t.XpWmJz);
  const obj1 = { variant: "secondary", size: "sm" };
  const intl2 = onSelect(first[13]).intl;
  obj1.text = intl2.string(onSelect(first[13]).t["R3BPH+"]);
  obj1.onPress = callback;
  obj.trailing = callback2(onSelect(first[14]).Button, obj1);
  obj.header = callback2(onSelect(first[12]).BottomSheetTitleHeader, obj);
  const obj2 = { style: tmp.body };
  let obj3 = { style: tmp.gradientContainer };
  const items3 = [callback2(importDefault(first[15]), { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }), ];
  const obj5 = { style: tmp.dropperContainer };
  const obj6 = { style: tmp.dropper, onPress: callback2 };
  const intl3 = onSelect(first[13]).intl;
  obj6.accessibilityLabel = intl3.string(onSelect(first[13]).t.QPqIEx);
  obj6.accessibilityRole = "button";
  obj6.children = callback2(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  const items4 = [callback2(closure_6, obj6), ];
  const obj7 = { style: tmp.dropper, onPress: callback3 };
  const intl4 = onSelect(first[13]).intl;
  obj7.accessibilityLabel = intl4.string(onSelect(first[13]).t.fLMusI);
  obj7.accessibilityRole = "button";
  obj7.children = callback2(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" });
  items4[1] = callback2(closure_6, obj7);
  obj5.children = items4;
  items3[1] = callback3(closure_5, obj5);
  obj3.children = items3;
  const items5 = [
    callback3(closure_5, obj3),
    callback2(closure_5, {
      style: tmp.optionContainer,
      children: closure_8.map((colors) => {
        let tmp = callback(colors.colors, 2);
        const first = tmp[0];
        tmp = tmp3;
        let obj = {};
        const items = [tmp.pressable, ];
        let selected = first === first.primary_color;
        if (selected) {
          selected = tmp3 === first.secondary_color;
        }
        if (selected) {
          selected = tmp.selected;
        }
        items[1] = selected;
        obj.style = items;
        obj.onPress = function onPress() {
          const obj = {};
          const merged = Object.assign(outer1_2);
          obj["primary_color"] = first;
          obj["secondary_color"] = closure_1;
          return outer1_4(obj);
        };
        obj = { style: tmp.option };
        const tmp4 = outer1_9;
        const tmp7 = tmp(first[15]);
        const items1 = [onSelect(first[18]).int2hex(first), ];
        const obj3 = onSelect(first[18]);
        items1[1] = onSelect(first[18]).int2hex(tmp[1]);
        obj.colors = items1;
        obj.start = { x: 0, y: 0 };
        obj.end = { x: 1, y: 0 };
        obj.children = outer1_9(tmp7, obj);
        return tmp4(onSelect(first[17]).PressableOpacity, obj, colors.name);
      })
    }),

  ];
  const obj9 = {};
  const intl5 = onSelect(first[13]).intl;
  obj9.text = intl5.string(onSelect(first[13]).t.yBZMsQ);
  obj9.onPress = function onPress() {
    callback(outer1_7);
  };
  items5[2] = callback2(onSelect(first[14]).Button, obj9);
  obj2.children = items5;
  obj.children = callback3(closure_5, obj2);
  return callback2(onSelect(first[11]).BottomSheet, obj);
};
