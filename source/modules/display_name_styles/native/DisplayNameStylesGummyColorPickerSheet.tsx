// Module ID: 14118
// Function ID: 107183
// Name: DisplayNameStylesGummyColorPickerSheet
// Dependencies: []
// Exports: default

// Module 14118 (DisplayNameStylesGummyColorPickerSheet)
import module_0 from "module_0";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_5, Pressable: closure_6 } = tmp2);
let closure_7 = arg1(dependencyMap[3]).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
let obj1 = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingTop: importDefault(dependencyMap[8]).space.PX_12, paddingBottom: importDefault(dependencyMap[8]).space.PX_16, gap: importDefault(dependencyMap[8]).space.PX_16, alignItems: "center" };
obj.body = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_4, alignSelf: "stretch" };
obj.colorRowInset = obj1;
obj.optionContainer = { "Bool(true)": null, "Bool(true)": null };
obj.swatchWrapper = { "Null": "channelId", "Null": "toString" };
const obj2 = { icon: "absolute", label: 0, subLabel: "center", value: "center", onValueChange: null, disabled: "absolute", borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.swatch = obj2;
const tmp3 = arg1(dependencyMap[5]);
obj.swatchSelected = { borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
const obj3 = { borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.customSwatchEmpty = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, borderColor: importDefault(dependencyMap[8]).colors.BORDER_NORMAL };
const obj5 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj5["alignItems"] = "center";
obj5["justifyContent"] = "center";
obj.customIconOverlay = obj5;
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, borderColor: importDefault(dependencyMap[8]).colors.BORDER_NORMAL };
obj.customIconScrim = { borderRadius: importDefault(dependencyMap[8]).radii.round };
let closure_12 = obj1.createStyles(obj);
const obj6 = { borderRadius: importDefault(dependencyMap[8]).radii.round };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  const arg1 = selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  const importDefault = onSelectColors;
  let callback;
  let React;
  let closure_5;
  let first1;
  let closure_7;
  let AnalyticEvents;
  let callback2;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[9]);
  let tmp3 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(arg1(dependencyMap[10]).DisplayNameEffect.GUMMY);
  if (tmp3) {
    tmp3 = !closure_7.some((arg0) => selectedColors(tmp[11]).areArraysShallowEqual(arg0, selectedColors));
  }
  callback = tmp3;
  const tmp5 = callback(React.useState(() => {
    if (tmp3) {
      let result = selectedColors(tmp[6]).rebuildGummySourceColor(selectedColors);
      const obj = selectedColors(tmp[6]);
      const tmp3 = tmp;
    } else {
      result = module_0;
    }
    return result;
  }), 2);
  const first = tmp5[0];
  React = first;
  closure_5 = tmp5[1];
  const tmp7 = callback(React.useState(() => {
    if (selectedColors.length > 0) {
      let gummyColors = selectedColors;
    } else {
      gummyColors = selectedColors(selectedColors[6]).buildGummyColors(module_0);
      const obj = selectedColors(selectedColors[6]);
    }
    return gummyColors;
  }), 2);
  first1 = tmp7[0];
  closure_7 = tmp7[1];
  const findIndexResult = closure_7.findIndex((arg0) => selectedColors(tmp[11]).areArraysShallowEqual(arg0, first1));
  AnalyticEvents = findIndexResult;
  const items = [first];
  callback = React.useCallback(() => {
    let obj = selectedColors(tmp[12]);
    const result = obj.triggerHapticFeedback(selectedColors(tmp[12]).HapticFeedbackTypes.IMPACT_LIGHT);
    obj = {
      initialColor: first,
      onSelect(module_0) {
        callback2(module_0);
        callback3(callback(closure_2[6]).buildGummyColors(module_0));
      }
    };
    onSelectColors(tmp[13])(obj);
  }, items);
  callback2 = React.useCallback((arg0) => {
    const items = [...arg0];
    callback2(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = React.useCallback(() => {
    const items = [...closure_7[0]];
    callback2(items);
    callback(module_0);
  }, []);
  callback2 = React.useCallback(() => {
    let obj = selectedColors(tmp[12]);
    const result = obj.triggerHapticFeedback(selectedColors(tmp[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    obj = { default: false, colors: first1 };
    onSelectColors(tmp[14]).track(findIndexResult.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(tmp[14]);
    onSelectColors(tmp[15]).hideActionSheet();
  }, items1);
  obj = {};
  obj = { title: displayNameStylesEffectConfig.name };
  const obj1 = {};
  const intl = arg1(dependencyMap[19]).intl;
  obj1.text = intl.string(arg1(dependencyMap[19]).t.XqMe3N);
  obj1.onPress = callback2;
  obj.trailing = callback2(arg1(dependencyMap[18]).Button, obj1);
  obj.header = callback2(arg1(dependencyMap[17]).BottomSheetTitleHeader, obj);
  const obj2 = { style: tmp.body };
  const obj3 = { style: items2 };
  const items2 = [, ];
  ({ colorRowInset: arr4[0], optionContainer: arr4[1] } = tmp);
  const obj4 = { style: tmp.swatchWrapper };
  const obj5 = {};
  const items3 = [tmp.swatch, ];
  let swatchSelected = tmp18;
  if (findIndexResult < 0) {
    swatchSelected = tmp.swatchSelected;
  }
  items3[1] = swatchSelected;
  obj5.style = items3;
  obj5.onPress = callback;
  obj5.accessibilityRole = "button";
  obj5.accessibilityState = { selected: findIndexResult < 0 };
  const intl2 = arg1(dependencyMap[19]).intl;
  obj5.accessibilityLabel = intl2.string(arg1(dependencyMap[19]).t.FHBa/1);
  if (findIndexResult >= 0) {
    const obj6 = { style: tmp.customSwatchEmpty };
    let tmp19Result = tmp19(closure_5, obj6);
  } else {
    const obj7 = { colors: first1 };
    tmp19Result = tmp19(importDefault(dependencyMap[20]), obj7);
  }
  const items4 = [tmp19Result, ];
  const obj8 = { style: tmp.customIconOverlay, pointerEvents: "none", children: callback2(closure_5, { style: tmp.customIconScrim, children: callback2(arg1(dependencyMap[21]).PencilIcon, {}) }) };
  items4[1] = callback2(closure_5, obj8);
  obj5.children = items4;
  obj4.children = closure_10(first1, obj5);
  const items5 = [
    callback2(closure_5, obj4),
    closure_7.map((colors) => {
      const selectedColors = colors;
      let obj = { style: tmp.swatchWrapper };
      obj = {};
      const items = [findIndexResult === arg1.swatch, ];
      let swatchSelected = tmp;
      if (findIndexResult === arg1) {
        swatchSelected = tmp.swatchSelected;
      }
      items[1] = swatchSelected;
      obj.style = items;
      obj.onPress = function onPress() {
        return callback(arg0);
      };
      obj.accessibilityRole = "button";
      obj.accessibilityState = { selected: findIndexResult === arg1 };
      obj = { colors };
      obj.children = callback3(onSelectColors(findIndexResult === arg1[20]), obj);
      obj.children = callback3(first1, obj);
      return callback3(closure_5, obj, arg1);
    })
  ];
  obj3.children = items5;
  const items6 = [closure_10(closure_5, obj3), ];
  const obj10 = {};
  const intl3 = arg1(dependencyMap[19]).intl;
  obj10.text = intl3.string(arg1(dependencyMap[19]).t.yBZMsQ);
  obj10.onPress = callback1;
  obj10.variant = "secondary";
  items6[1] = callback2(arg1(dependencyMap[18]).Button, obj10);
  obj2.children = items6;
  obj.children = closure_10(closure_5, obj2);
  return callback2(arg1(dependencyMap[16]).BottomSheet, obj);
};
