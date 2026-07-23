// Module ID: 14820
// Function ID: 113066
// Name: items
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 13569, 9143, 4098, 13567, 5187, 5186, 1212, 4543, 14237, 2]
// Exports: default

// Module 14820 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let ROLE_COLORS;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ DEFAULT_ROLE_COLOR: closure_7, ROLE_COLORS } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...require("_slicedToArray"), ...require("showCustomColorPickerActionSheet"), ...require("_createForOfIteratorHelperLoose"), ...require("EyeDropperIcon")];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
let obj1 = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.colorWrap = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default function RoleColorPickerActionSheet(color) {
  let confirmLabel;
  let defaultColor;
  color = color.color;
  const onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  let styles;
  let first;
  let closure_5;
  let isWindowSmall;
  memo = undefined;
  let callback;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = color(defaultColor[7]);
  styles = obj.useStyles();
  const tmp3 = styles(first.useState(color), 2);
  first = tmp3[0];
  closure_5 = tmp3[1];
  let obj1 = color(defaultColor[8]);
  isWindowSmall = obj1.useIsWindowSmall();
  const items = [isWindowSmall, styles.colorBlock];
  memo = first.useMemo(() => {
    const colorBlock = styles.colorBlock;
    if (isWindowSmall) {
      const obj = {};
      const merged = Object.assign(colorBlock);
      obj["minWidth"] = 38;
      obj["height"] = 38;
      let tmp = obj;
    } else {
      tmp = colorBlock;
    }
    return tmp;
  }, items);
  const items1 = [first, onSelect];
  callback = first.useCallback(() => {
    onSelect(first);
    onSelect(defaultColor[9]).hideActionSheet();
  }, items1);
  callback = first.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [color, onSelect];
  const callback1 = first.useCallback(() => {
    onSelect(defaultColor[10])({ color, onSelect });
  }, items2);
  obj = {};
  obj = {};
  const intl = color(defaultColor[13]).intl;
  obj.title = intl.string(color(defaultColor[13]).t.WTqQ5e);
  if (null != confirmLabel) {
    obj1 = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
    let obj2 = obj1;
  } else {
    obj2 = { size: "sm" };
    const intl2 = color(defaultColor[13]).intl;
    obj2.text = intl2.string(color(defaultColor[13]).t["R3BPH+"]);
    obj2.onPress = callback;
  }
  obj.trailing = callback(color(defaultColor[14]).Button, obj2);
  obj.header = callback(color(defaultColor[12]).BottomSheetTitleHeader, obj);
  const obj3 = { style: tmp.body };
  const obj4 = { style: tmp.colorWrap };
  const items3 = [items.map((color) => callback2(onSelect(defaultColor[7]), { color, style: memo, selected: color === first, onSelect: callback2 }, color)), ];
  const obj5 = { style: memo, onPress: callback1 };
  const intl3 = color(defaultColor[13]).intl;
  obj5.accessibilityLabel = intl3.string(color(defaultColor[13]).t["/fkc8a"]);
  obj5.accessibilityRole = "button";
  obj5.children = callback(color(defaultColor[15]).EyeDropperIcon, { size: "lg" });
  items3[1] = callback(isWindowSmall, obj5);
  obj4.children = items3;
  const items4 = [callback2(closure_5, obj4), ];
  const obj6 = { variant: "secondary" };
  const intl4 = color(defaultColor[13]).intl;
  obj6.text = intl4.string(color(defaultColor[13]).t.yBZMsQ);
  obj6.onPress = function onPress() {
    callback(defaultColor);
  };
  items4[1] = callback(color(defaultColor[14]).Button, obj6);
  obj3.children = items4;
  obj.children = callback2(closure_5, obj3);
  return callback(color(defaultColor[11]).BottomSheet, obj);
};
