// Module ID: 14114
// Function ID: 107151
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: []
// Exports: default

// Module 14114 (DisplayNameStylesColorPickerSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const getColorPresetsForEffect = arg1(dependencyMap[3]).getColorPresetsForEffect;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { header: { paddingTop: 4 }, headerTrailing: { "Null": null, "Null": null }, container: { flex: 1 } };
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.contentContainer = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.presetGrid = { gap: importDefault(dependencyMap[7]).space.PX_16, marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
const obj1 = { gap: importDefault(dependencyMap[7]).space.PX_16, marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.presetRow = { gap: importDefault(dependencyMap[7]).space.PX_16 };
const obj3 = { "Bool(false)": "en-GB", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": "/assets/../discord_common/js/shared/images/flags", "Bool(false)": 70, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.presetColor = obj3;
const obj2 = { gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.presetColorSelected = { borderColor: importDefault(dependencyMap[7]).colors.CONTROL_BRAND_FOREGROUND };
const obj4 = { borderColor: importDefault(dependencyMap[7]).colors.CONTROL_BRAND_FOREGROUND };
obj.buttonsContainer = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.button = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const obj5 = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const arg1 = selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const importDefault = selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  const dependencyMap = onSelectColor;
  const tmp = callback3();
  let callback = tmp;
  let obj = arg1(dependencyMap[8]);
  const tmp2 = importDefault(dependencyMap[9])()[selectedEffectId];
  const React = tmp2;
  const items = [selectedEffectId];
  const memo = React.useMemo(() => memo1(selectedEffectId).map((arg0) => arg0[0]), items);
  const tmp3 = callback(React.useState(selectedColor), 2);
  const first = tmp3[0];
  let closure_6 = tmp3[1];
  const items1 = [first, selectedColor];
  const memo1 = React.useMemo(() => first !== selectedColor, items1);
  const getColorPresetsForEffect = memo1;
  let closure_8 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [first, onSelectColor];
  callback = React.useCallback(() => {
    const result = selectedColor(onSelectColor[10]).triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj = selectedColor(onSelectColor[10]);
    const tmp2 = onSelectColor(tmp2[0]);
    selectedEffectId(onSelectColor[11]).hideActionSheet();
  }, items2);
  const items4 = [memo1, first, onSelectColor, tmp2];
  const callback1 = React.useCallback(() => {
    selectedEffectId(onSelectColor[12])({
      color: first,
      onSelect(arg0) {
        const result = callback(callback3[10]).triggerHapticFeedback(callback(callback3[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        callback3(arg0);
        const obj = callback(callback3[10]);
        callback2(callback3[11]).hideActionSheet();
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
  const intl = arg1(dependencyMap[16]).intl;
  obj1.title = intl.string(importDefault(dependencyMap[17]).6OxgN7);
  const obj2 = { style: tmp.headerTrailing };
  const obj3 = {};
  const intl2 = arg1(dependencyMap[16]).intl;
  obj3.text = intl2.string(arg1(dependencyMap[16]).t.XqMe3N);
  obj3.onPress = callback2;
  obj3.variant = "primary";
  obj3.size = "sm";
  obj2.children = callback2(arg1(dependencyMap[18]).Button, obj3);
  obj1.trailing = callback2(first, obj2);
  obj.children = callback2(arg1(dependencyMap[15]).BottomSheetTitleHeader, obj1);
  obj.header = callback2(first, obj);
  const obj4 = { style: tmp.container };
  const obj5 = { style: tmp.contentContainer };
  const obj6 = { style: tmp.presetGrid };
  let obj9 = importDefault(dependencyMap[19]);
  obj6.children = obj9.chunk(memo.slice(0, 12), 6).map((arr) => {
    const selectedColor = arg1;
    return callback2(first, {
      style: tmp.presetRow,
      children: arr.map((color) => {
        const arg1 = color;
        let obj = {
          onPress() {
            return callback(arg0);
          }
        };
        const items = [closure_3.presetColor, , ];
        obj = { backgroundColor: arg1(closure_2[20]).int2hex(color) };
        items[1] = obj;
        let presetColorSelected = color === closure_5;
        if (presetColorSelected) {
          presetColorSelected = closure_3.presetColorSelected;
        }
        items[2] = presetColorSelected;
        obj.style = items;
        obj.accessibilityRole = "button";
        const obj3 = arg1(closure_2[20]);
        const tmp = closure_9;
        const tmp2 = closure_6;
        obj.accessibilityLabel = arg1(closure_2[20]).int2hex(color);
        return tmp(tmp2, obj, 6 * arg1 + arg1);
      })
    }, arg1);
  });
  const items5 = [callback2(first, obj6), ];
  const obj7 = { style: tmp.buttonsContainer };
  let tmp12 = selectedEffectId === arg1(dependencyMap[21]).DisplayNameEffect.SOLID;
  if (tmp12) {
    const obj8 = { style: tmp.button };
    obj9 = {};
    const intl3 = arg1(dependencyMap[16]).intl;
    obj9.text = intl3.string(importDefault(dependencyMap[17]).gIeJTK);
    obj9.onPress = callback;
    obj8.children = callback2(arg1(dependencyMap[18]).Button, obj9);
    tmp12 = callback2(first, obj8);
  }
  const items6 = [tmp12, ];
  const obj10 = { style: tmp.button };
  const obj11 = {};
  const intl4 = arg1(dependencyMap[16]).intl;
  obj11.text = intl4.string(arg1(dependencyMap[16]).t.FHBa/1);
  obj11.onPress = callback1;
  obj11.icon = callback2(arg1(dependencyMap[22]).EyeDropperIcon, { size: "sm" });
  obj10.children = callback2(arg1(dependencyMap[18]).Button, obj11);
  items6[1] = callback2(first, obj10);
  obj7.children = items6;
  items5[1] = closure_10(first, obj7);
  obj5.children = items5;
  obj4.children = closure_10(first, obj5);
  obj.children = callback2(first, obj4);
  return callback2(arg1(dependencyMap[14]).BottomSheet, obj);
};
