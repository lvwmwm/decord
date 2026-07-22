// Module ID: 14705
// Function ID: 110902
// Name: items
// Dependencies: []
// Exports: default

// Module 14705 (items)
let ROLE_COLORS;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ DEFAULT_ROLE_COLOR: closure_7, ROLE_COLORS } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const items = [...require("module_0"), ...require("module_10"), ...require("module_5"), ...require("module_15")];
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { 671204708: 14, 1685738134: "en-PR", -413072144: "en", -1028273069: "flex", paddingVertical: importDefault(dependencyMap[6]).space.PX_16 };
obj.body = obj;
const obj1 = { toValue: null, friction: null, tension: null, useNativeDriver: null, expanded: null, marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.colorWrap = obj1;
let closure_11 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default function RoleColorPickerActionSheet(color) {
  let confirmLabel;
  let defaultColor;
  color = color.color;
  const arg1 = color;
  const onSelect = color.onSelect;
  const importDefault = onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  const dependencyMap = defaultColor;
  let callback;
  let React;
  let closure_5;
  let isWindowSmall;
  let memo;
  let callback2;
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const styles = obj.useStyles();
  callback = styles;
  const tmp3 = callback(React.useState(color), 2);
  const first = tmp3[0];
  React = first;
  closure_5 = tmp3[1];
  let obj1 = arg1(dependencyMap[8]);
  isWindowSmall = obj1.useIsWindowSmall();
  const items = [isWindowSmall, styles.colorBlock];
  memo = React.useMemo(() => {
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
  callback = React.useCallback(() => {
    onSelect(first);
    onSelect(defaultColor[9]).hideActionSheet();
  }, items1);
  callback2 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [color, onSelect];
  const callback1 = React.useCallback(() => {
    onSelect(defaultColor[10])({ color, onSelect });
  }, items2);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.WTqQ5e);
  if (null != confirmLabel) {
    obj1 = { text: confirmLabel, onPress: callback };
    let obj2 = obj1;
  } else {
    obj2 = { size: "sm" };
    const intl2 = arg1(dependencyMap[13]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[13]).t.R3BPH+);
    obj2.onPress = callback;
  }
  obj.trailing = callback2(arg1(dependencyMap[14]).Button, obj2);
  obj.header = callback2(arg1(dependencyMap[12]).BottomSheetTitleHeader, obj);
  const obj3 = { style: tmp.body };
  const obj4 = { style: tmp.colorWrap };
  const items3 = [items.map((color) => callback2(onSelect(defaultColor[7]), { color, style: memo, selected: color === first, onSelect: callback2 }, color)), ];
  const obj5 = { style: memo, onPress: callback1 };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj5.accessibilityLabel = intl3.string(arg1(dependencyMap[13]).t./fkc8a);
  obj5.accessibilityRole = "button";
  obj5.children = callback2(arg1(dependencyMap[15]).EyeDropperIcon, { size: "lg" });
  items3[1] = callback2(isWindowSmall, obj5);
  obj4.children = items3;
  const items4 = [callback3(closure_5, obj4), ];
  const obj6 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj6.text = intl4.string(arg1(dependencyMap[13]).t.yBZMsQ);
  obj6.onPress = function onPress() {
    callback(defaultColor);
  };
  items4[1] = callback2(arg1(dependencyMap[14]).Button, obj6);
  obj3.children = items4;
  obj.children = callback3(closure_5, obj3);
  return callback2(arg1(dependencyMap[11]).BottomSheet, obj);
};
