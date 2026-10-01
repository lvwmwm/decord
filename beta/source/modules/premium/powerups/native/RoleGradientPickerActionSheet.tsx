// Module ID: 17429
// Function ID: 17430
// Name: RoleGradientPickerActionSheet
// Dependencies: [32, 19, 17, 17412, 21, 4836, 576, 2105, 1370, 4800, 14152, 6571, 6570, 1115, 5281, 5293, 14899, 5435, 1092, 2]
// Exports: default

// Module 17429 (RoleGradientPickerActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14152 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17412 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ DEFAULT_GRADIENT_ROLE_COLORS: metroImportDefault, GRADIENT_PRESETS: metroImportAll } = EnhancedRoleColorConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, gradientContainer: obj3, dropperContainer: rect, dropper: obj4, gradient: size, optionContainer: obj5, pressable: size1, selected: obj6, option: obj7 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
obj4 = { borderColor: "white", tintColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj5 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
size1 = { width: 80, height: 50, borderRadius: nativeDefault.radii.sm, overflow: "hidden", padding: 2 };
obj6 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default function RoleGradientPickerActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let Button;
  let closure_1;
  let closure_3;
  let colors;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let obj4;
  let obj5;
  let obj6;
  let onSelect;
  ({ colors, onSelect } = arg0);
  first = undefined;
  _slicedToArray = undefined;
  let callback1;
  let tmp = closure_11();
  importDefault = tmp;
  let obj = callback1;
  const useState = callback1.useState;
  if (null == colors) {
    colors = closure_7;
  }
  [first, _slicedToArray] = useState(colors);
  let obj2 = onSelect(first[7]);
  const values2 = values(obj2.extractColorStringsFromServerColors(first));
  let items = [first, onSelect];
  const found = values2.filter(onSelect(first[8]).isNotNullish);
  const callback = obj.useCallback(() => {
    onSelect(first);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  callback1 = obj.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  let items1 = [first, callback1];
  const items2 = [first, callback1];
  const callback2 = obj.useCallback(() => {
    let num;
    const tmp = showCustomColorPickerActionSheetDefault;
    if (first != null) {
      num = first.primary_color;
    }
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(primary_color) {
        const obj = { primary_color };
        const merged = Object.assign(first);
        return callback1(obj);
      }
    };
    tmp(obj, "stack");
  }, items1);
  const callback3 = obj.useCallback(() => {
    let num;
    const tmp = showCustomColorPickerActionSheetDefault;
    if (first != null) {
      num = first.secondary_color;
    }
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(secondary_color) {
        const obj = { secondary_color };
        const merged = Object.assign(first);
        return callback1(obj);
      }
    };
    tmp(obj, "stack");
  }, items2);
  const obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: closure_10(closure_5, obj6) };
  BottomSheet = onSelect(first[11]).BottomSheet;
  obj4 = { title: intl.string(onSelect(first[13]).t.XpWmJz), trailing: closure_9(Button, obj5) };
  BottomSheetTitleHeader = onSelect(first[12]).BottomSheetTitleHeader;
  intl = onSelect(first[13]).intl;
  obj5 = { variant: "secondary", size: "sm", text: intl2.string(onSelect(first[13]).t["R3BPH+"]), onPress: callback };
  Button = onSelect(first[14]).Button;
  intl2 = onSelect(first[13]).intl;
  const obj7 = { style: tmp.gradientContainer, children: items3 };
  items3 = [, ];
  obj6 = { style: tmp.body, children: items5 };
  const obj8 = { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
  items3[0] = closure_9(require("LinearGradient"), obj8);
  const obj9 = { style: tmp.dropperContainer, children: items4 };
  const obj10 = { style: tmp.dropper, onPress: callback2, accessibilityLabel: intl3.string(onSelect(first[13]).t.QPqIEx), accessibilityRole: "button", children: closure_9(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" }) };
  intl3 = onSelect(first[13]).intl;
  items4 = [closure_9(closure_6, obj10), ];
  const obj11 = { style: tmp.dropper, onPress: callback3, accessibilityLabel: intl4.string(onSelect(first[13]).t.fLMusI), accessibilityRole: "button", children: closure_9(onSelect(first[16]).EyeDropperIcon, { color: "white", size: "sm" }) };
  intl4 = onSelect(first[13]).intl;
  items4[1] = closure_9(closure_6, obj11);
  items3[1] = closure_10(closure_5, obj9);
  items5 = [closure_10(closure_5, obj7), , ];
  const obj12 = {
    style: tmp.optionContainer,
    children: closure_8.map((colors) => {
      let items1;
      let obj2;
      let tmp8;
      const tmp = closure_3(colors.colors, 2);
      const primary_color = tmp[0];
      const secondary_color = tmp3;
      const items = [secondary_color.pressable, ];
      let selected = primary_color === primary_color.primary_color;
      const PressableOpacity = onSelect(primary_color[17]).PressableOpacity;
      if (selected) {
        selected = tmp3 === primary_color.secondary_color;
      }
      if (selected) {
        selected = tmp7.selected;
      }
      let obj = {
        style: items,
        onPress() {
          const obj = { primary_color, secondary_color };
          const merged = Object.assign(primary_color);
          return callback1(obj);
        },
        children: closure_1_9(tmp8, obj2)
      };
      items[1] = selected;
      obj2 = { style: secondary_color.option, colors: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
      items1 = [, ];
      tmp8 = secondary_color(primary_color[15]);
      const tmp5Result = onSelect(primary_color[18]);
      items1[0] = tmp5Result.int2hex(primary_color);
      const tmp5Result2 = onSelect(primary_color[18]);
      items1[1] = tmp5Result2.int2hex(tmp[1]);
      return closure_1_9(PressableOpacity, obj, colors.name);
    })
  };
  items5[1] = closure_9(closure_5, obj12);
  const obj13 = {
    text: intl5.string(onSelect(first[13]).t.yBZMsQ),
    onPress() {
      closure_3(metroImportDefault);
    }
  };
  const Button2 = onSelect(first[14]).Button;
  intl5 = onSelect(first[13]).intl;
  items5[2] = closure_9(Button2, obj13);
  return closure_9(BottomSheet, obj3);
};
