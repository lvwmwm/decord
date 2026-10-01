// Module ID: 15927
// Function ID: 15928
// Name: RoleColorPickerActionSheet
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 14154, 7328, 4800, 14152, 6571, 6570, 1115, 5281, 14899, 2]
// Exports: default

// Module 15927 (RoleColorPickerActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14152 */;
import ColorBlockDefault from "ColorBlock" /* 14154 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let ROLE_COLORS;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ DEFAULT_ROLE_COLOR: metroImportDefault, ROLE_COLORS } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [...ROLE_COLORS.slice(0, 5), ...ROLE_COLORS.slice(10, 15), ...ROLE_COLORS.slice(5, 10), ...ROLE_COLORS.slice(15, 18)];
let createStyles = createStyles_mod;
let obj = { body: obj2, colorWrap: obj3 };
obj2 = { paddingVertical: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default function RoleColorPickerActionSheet(color) {
  let Button;
  let confirmLabel;
  let defaultColor;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let memo;
  let obj5;
  let obj7;
  color = color.color;
  let onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  let first;
  onSelect = undefined;
  let tmp = closure_11();
  let obj = color(defaultColor[7]);
  const styles = obj.useStyles();
  const tmp5 = styles(first.useState(color), 2);
  first = tmp5[0];
  let closure_5 = tmp5[1];
  const obj2 = color(defaultColor[8]);
  const isWindowSmall = obj2.useIsWindowSmall();
  items = [isWindowSmall, styles.colorBlock];
  memo = first.useMemo(() => {
    let tmp;
    const colorBlock = styles.colorBlock;
    if (isWindowSmall) {
      const obj = { minWidth: 38, height: 38 };
      const merged = Object.assign(colorBlock);
      tmp = obj;
    } else {
      tmp = colorBlock;
    }
    return tmp;
  }, items);
  const items1 = [first, onSelect];
  const callback = first.useCallback(() => {
    onSelect(first);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items1);
  onSelect = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items2 = [color, onSelect];
  const callback1 = first.useCallback(() => {
    const obj = { color, onSelect };
    showCustomColorPickerActionSheetDefault(obj);
  }, items2);
  BottomSheet = color(defaultColor[11]).BottomSheet;
  const obj3 = { title: intl.string(color(defaultColor[13]).t.WTqQ5e), trailing: onSelect(Button, obj5) };
  const BottomSheetTitleHeader = color(defaultColor[12]).BottomSheetTitleHeader;
  intl = color(defaultColor[13]).intl;
  Button = color(defaultColor[14]).Button;
  if (null != confirmLabel) {
    obj5 = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
    const obj4 = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
  } else {
    obj5 = { size: "sm", text: intl2.string(tmp2(tmp3[13]).t["R3BPH+"]), onPress: callback };
    intl2 = tmp2(tmp3[13]).intl;
  }
  const obj6 = { header: onSelect(BottomSheetTitleHeader, obj3), children: closure_9(closure_5, obj7) };
  obj7 = { style: tmp.body, children: items4 };
  const obj8 = { style: tmp.colorWrap, children: items3 };
  items3 = [
    items.map((color) => {
      const obj = { color, style: memo, selected: color === first, onSelect };
      return metroImportAll(ColorBlockDefault, obj, color);
    }),

  ];
  const obj9 = { style: memo, onPress: callback1, accessibilityLabel: intl3.string(color(defaultColor[13]).t["/fkc8a"]), accessibilityRole: "button", children: onSelect(color(defaultColor[15]).EyeDropperIcon, { size: "lg" }) };
  intl3 = tmp2(tmp3[13]).intl;
  items3[1] = onSelect(isWindowSmall, obj9);
  items4 = [closure_9(closure_5, obj8), ];
  const obj10 = {
    variant: "secondary",
    text: intl4.string(color(defaultColor[13]).t.yBZMsQ),
    onPress() {
      closure_5(defaultColor);
    }
  };
  const Button2 = tmp2(tmp3[14]).Button;
  intl4 = tmp2(tmp3[13]).intl;
  items4[1] = onSelect(Button2, obj10);
  return onSelect(BottomSheet, obj6);
};
