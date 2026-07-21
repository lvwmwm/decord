// Module ID: 16197
// Function ID: 125160
// Name: RoleGradientPickerActionSheet
// Dependencies: []
// Exports: default

// Module 16197 (RoleGradientPickerActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_7, GRADIENT_PRESETS: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { justifyContent: false, alignItems: false, flexDirection: false, marginRight: false, flexDirection: false, paddingVertical: importDefault(dependencyMap[6]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_12, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.body = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.gradientContainer = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj.dropperContainer = { left: importDefault(dependencyMap[6]).space.PX_24, right: importDefault(dependencyMap[6]).space.PX_24 };
const obj2 = { left: importDefault(dependencyMap[6]).space.PX_24, right: importDefault(dependencyMap[6]).space.PX_24 };
obj.dropper = { padding: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.round };
const obj3 = { padding: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.gradient = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
const obj5 = { "Null": "Array", "Null": "isArray", "Null": "rejectWithError", "Bool(true)": "fill", "Bool(true)": "Array", "Bool(true)": "isArray", gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.optionContainer = obj5;
const obj6 = { "Null": 1.512, "Null": 5, "Null": "country_scores", "Null": "map", "Null": 9, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.pressable = obj6;
const obj4 = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.selected = { borderWidth: 2, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND };
const obj7 = { borderWidth: 2, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND };
obj.option = { flex: 1, borderRadius: importDefault(dependencyMap[6]).radii.sm };
let closure_11 = obj.createStyles(obj);
const obj8 = { flex: 1, borderRadius: importDefault(dependencyMap[6]).radii.sm };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default function RoleGradientPickerActionSheet(arg0) {
  let colors;
  let onSelect;
  ({ colors, onSelect } = arg0);
  const arg1 = onSelect;
  let dependencyMap;
  let callback;
  let React;
  const tmp = callback4();
  const importDefault = tmp;
  if (null == colors) {
    colors = closure_7;
  }
  const tmp3 = callback(React.useState(colors), 2);
  const first = tmp3[0];
  dependencyMap = first;
  callback = tmp3[1];
  let obj = arg1(dependencyMap[7]);
  const values = Object.values(obj.extractColorStringsFromServerColors(first));
  const items = [first, onSelect];
  const found = values.filter(arg1(dependencyMap[8]).isNotNullish);
  callback = React.useCallback(() => {
    const tmp = onSelect(first);
    onSelect(first)(first[9]).hideActionSheet();
  }, items);
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  React = callback1;
  const items1 = [first, callback1];
  const items2 = [first, callback1];
  const callback2 = React.useCallback(() => {
    const obj = {};
    let primary_color;
    const tmp = tmp(first[10]);
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
      const merged = Object.assign(closure_2);
      obj["primary_color"] = arg0;
      return callback(obj);
    };
    tmp(obj, "stack");
  }, items1);
  const callback3 = React.useCallback(() => {
    const obj = {};
    let secondary_color;
    const tmp = tmp(first[10]);
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
      const merged = Object.assign(closure_2);
      obj["secondary_color"] = arg0;
      return callback(obj);
    };
    tmp(obj, "stack");
  }, items2);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.XpWmJz);
  const obj1 = { "Bool(true)": null, "Bool(true)": null };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[13]).t.R3BPH+);
  obj1.onPress = callback;
  obj.trailing = callback2(arg1(dependencyMap[14]).Button, obj1);
  obj.header = callback2(arg1(dependencyMap[12]).BottomSheetTitleHeader, obj);
  const obj2 = { style: tmp.body };
  const obj3 = { style: tmp.gradientContainer };
  const items3 = [callback2(importDefault(dependencyMap[15]), { style: tmp.gradient, colors: found, start: {}, end: {} }), ];
  const obj5 = { style: tmp.dropperContainer };
  const obj6 = { style: tmp.dropper, onPress: callback2 };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj6.accessibilityLabel = intl3.string(arg1(dependencyMap[13]).t.QPqIEx);
  obj6.accessibilityRole = "button";
  obj6.children = callback2(arg1(dependencyMap[16]).EyeDropperIcon, { "Null": 12, "Null": 4 });
  const items4 = [callback2(closure_6, obj6), ];
  const obj7 = { style: tmp.dropper, onPress: callback3 };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj7.accessibilityLabel = intl4.string(arg1(dependencyMap[13]).t.fLMusI);
  obj7.accessibilityRole = "button";
  obj7.children = callback2(arg1(dependencyMap[16]).EyeDropperIcon, { "Null": 12, "Null": 4 });
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
        const onSelect = first;
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
          const merged = Object.assign(closure_2);
          obj["primary_color"] = first;
          obj["secondary_color"] = tmp3;
          return callback(obj);
        };
        obj = { style: tmp.option };
        const tmp4 = callback2;
        const tmp7 = tmp(first[15]);
        const items1 = [onSelect(first[18]).int2hex(first), ];
        const obj3 = onSelect(first[18]);
        items1[1] = onSelect(first[18]).int2hex(tmp[1]);
        obj.colors = items1;
        obj.start = {};
        obj.end = {};
        obj.children = callback2(tmp7, obj);
        return tmp4(onSelect(first[17]).PressableOpacity, obj, colors.name);
      })
    }),

  ];
  const obj9 = {};
  const intl5 = arg1(dependencyMap[13]).intl;
  obj9.text = intl5.string(arg1(dependencyMap[13]).t.yBZMsQ);
  obj9.onPress = function onPress() {
    callback(closure_7);
  };
  items5[2] = callback2(arg1(dependencyMap[14]).Button, obj9);
  obj2.children = items5;
  obj.children = callback3(closure_5, obj2);
  return callback2(arg1(dependencyMap[11]).BottomSheet, obj);
};
