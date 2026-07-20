// Module ID: 14102
// Function ID: 107100
// Name: DisplayNameStylesGummyCustomColorSheet
// Dependencies: []
// Exports: default

// Module 14102 (DisplayNameStylesGummyCustomColorSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: closure_5, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingTop: importDefault(dependencyMap[5]).space.PX_12, paddingBottom: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_16, alignItems: "center" };
obj.body = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.huePickerInset = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_4 + 2, alignSelf: "stretch" };
obj.previewWrapper = {};
const obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_4 + 2, alignSelf: "stretch" };
obj.preview = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
let closure_9 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx");

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  const arg1 = onSelect;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  let obj1 = arg1(dependencyMap[7]);
  let obj2 = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(obj1.wrapHue(obj2.int2hslRaw(onSelect.initialColor).h));
  const importDefault = sharedValue;
  const items = [sharedValue, onSelect];
  const callback = React.useCallback(() => {
    const result = onSelect(closure_2[9]).triggerHapticFeedback(onSelect(closure_2[9]).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = React.useCallback(() => {
    const result = onSelect(closure_2[9]).triggerHapticFeedback(onSelect(closure_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = onSelect(closure_2[9]);
    onSelect(onSelect(closure_2[7]).hueToGummyColor(sharedValue.get()));
    const obj2 = onSelect(closure_2[7]);
    sharedValue(closure_2[10]).hideActionSheet();
  }, items);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.WTqQ5e);
  obj1 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[13]).t.XqMe3N);
  obj1.onPress = callback1;
  obj.trailing = callback(arg1(dependencyMap[14]).Button, obj1);
  obj.header = callback(arg1(dependencyMap[12]).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.body };
  const obj3 = { style: tmp.previewWrapper, children: callback(View, { style: tmp.preview, children: callback(importDefault(dependencyMap[15]), { hue: sharedValue }) }) };
  const items1 = [callback(View, obj3), ];
  const obj4 = { style: tmp.preview, children: callback(importDefault(dependencyMap[15]), { hue: sharedValue }) };
  items1[1] = callback(View, { style: tmp.huePickerInset, children: callback(importDefault(dependencyMap[16]), obj6) });
  obj2.children = items1;
  obj.children = callback2(View, obj2);
  return callback(arg1(dependencyMap[11]).BottomSheet, obj);
};
