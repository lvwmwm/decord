// Module ID: 14895
// Function ID: 14896
// Name: DisplayNameStylesGummyCustomColorSheet
// Dependencies: [19, 17, 1390, 21, 4836, 576, 4566, 1389, 1092, 4801, 4800, 6571, 14890, 1115, 5281, 14896, 14158, 2]
// Exports: default

// Module 14895 (DisplayNameStylesGummyCustomColorSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1389 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: hasOwnProperty, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: metroRequire } = DisplayNameStylesConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, huePickerInset: obj3, previewWrapper: { width: "25%", padding: 2 }, preview: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
obj4 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx");

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  let Button;
  let intl;
  let intl2;
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let tmp7;
  onSelect = onSelect.onSelect;
  const initialColor = onSelect.initialColor;
  const tmp = closure_9();
  const useSharedValue = onSelect(4566).useSharedValue;
  const tmp2 = onSelect(4566);
  const wrapHue = onSelect(1389).wrapHue;
  onSelect(1389);
  let obj = onSelect(1092);
  const sharedValue = useSharedValue(wrapHue(obj.int2hslRaw(initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = react.useCallback(() => {
    const obj = onSelect(dependencyMap[9]);
    const result = obj.triggerHapticFeedback(onSelect(dependencyMap[9]).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj2 = DisplayNameStylesUtils;
    onSelect(obj2.hueToGummyColor(sharedValue.get()));
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  let obj2 = { header: closure_7(tmp7, obj3), children: closure_8(View, obj5) };
  BottomSheet = onSelect(6571).BottomSheet;
  obj3 = { title: intl.string(onSelect(1115).t.WTqQ5e), trailing: closure_7(Button, obj4) };
  tmp7 = sharedValue(14890);
  intl = onSelect(1115).intl;
  obj4 = { variant: "primary", size: "sm", text: intl2.string(onSelect(1115).t.XqMe3N), onPress: callback1 };
  Button = onSelect(5281).Button;
  intl2 = onSelect(1115).intl;
  obj5 = { style: tmp.body, children: items1 };
  const obj6 = { style: tmp.previewWrapper, children: closure_7(View, obj7) };
  obj7 = { style: tmp.preview, children: closure_7(sharedValue(14896), { hue: sharedValue }) };
  items1 = [closure_7(View, obj6), ];
  const obj8 = { style: tmp.huePickerInset, children: closure_7(sharedValue(14158), obj9) };
  obj9 = { hue: sharedValue, onPanFinalize: callback, saturation, lightness, fullWidth: true };
  items1[1] = closure_7(View, obj8);
  return closure_7(BottomSheet, obj2);
};
