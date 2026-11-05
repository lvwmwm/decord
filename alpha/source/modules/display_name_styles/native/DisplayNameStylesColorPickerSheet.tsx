// Module ID: 17619
// Function ID: 17620
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: [32, 19, 17, 17608, 1072, 21, 5143, 575, 8887, 10960, 17609, 1113, 1090, 5386, 5384, 16709, 1252, 5398, 17604, 3059, 5770, 17613, 2]
// Exports: default

// Module 17619 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef3059 from "module_3059" /* 3059 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import HapticUtils from "HapticUtils" /* 5386 */;
import useDisplayNameStylesEffectDefaultColorsDefault from "useDisplayNameStylesEffectDefaultColors" /* 10960 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16709 */;
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader" /* 17604 */;
import DisplayNameStylesColorPickerConstants from "DisplayNameStylesColorPickerConstants" /* 17608 */;
import useColorPresetsWithA11yLabelsDefault from "useColorPresetsWithA11yLabels" /* 17609 */;
import DisplayNameStylesCustomColorButtonDefault from "DisplayNameStylesCustomColorButton" /* 17613 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const SHEET_CONTENT_MAX_WIDTH = DisplayNameStylesColorPickerConstants.SHEET_CONTENT_MAX_WIDTH;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheetBackground: obj2, container: obj3, contentContainer: { alignSelf: "center", width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH }, presetGrid: obj4, presetColor: size, presetColorSelected: obj5 };
obj2 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_20 };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(arg0) {
  let Button;
  let closure_2;
  let closure_4;
  let intl2;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let onSelectColor;
  let presetColor;
  let selectedColor;
  let selectedEffectId;
  let stringResult;
  let tmp2Result;
  let tmp4Result;
  ({ selectedColor, selectedEffectId, onSelectColor } = arg0);
  dependencyMap = undefined;
  let color;
  react = undefined;
  const tmp = closure_10();
  importDefault = tmp;
  let tmp3 = dependencyMap;
  let obj = onSelectColor(8887);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  const tmp5 = useDisplayNameStylesEffectDefaultColorsDefault()[selectedEffectId];
  dependencyMap = tmp5;
  let obj2 = react;
  let tmp6 = color(react.useState(selectedColor), 2);
  color = tmp6[0];
  react = tmp6[1];
  const arr = useColorPresetsWithA11yLabelsDefault(selectedEffectId);
  const tmp8 = color !== tmp5[0] && !arr.some((item) => item.colors[0] === first);
  let obj3 = { colors: tmp5, a11yLabel: "" + stringResult + ", " + tmp2Result.int2hex(tmp5[0]) };
  const intl = tmp2(1113).intl;
  stringResult = intl.string(onSelectColor(1113).t.bBvAEH);
  let items = [obj3, ...arr.filter((item) => item.colors[0] !== closure_2[0])];
  let closure_5 = tmp10;
  tmp2Result = onSelectColor(1090);
  let closure_6 = obj2.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const items1 = [tmp5, onSelectColor];
  const onPress = obj2.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(closure_2[0]);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items1);
  const items2 = [color];
  const items3 = [color !== selectedColor, color, onSelectColor, tmp5];
  const callback1 = obj2.useCallback(() => {
    let obj = {
      color,
      onSelect(arg0) {
        const obj = onSelectColor(closure_2[13]);
        const result = obj.triggerHapticFeedback(onSelectColor(closure_2[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_4(arg0);
      },
      actionButtonVariant: "primary"
    };
    showCustomColorPickerActionSheetDefault(obj, "stack");
  }, items2);
  const callback2 = obj2.useCallback(() => {
    let items;
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = closure_5;
    if (tmp3) {
      onSelectColor(first);
      const obj3 = { default: first === closure_2[0], colors: items };
      items = [first];
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items3);
  let obj4 = { backgroundStyles: tmp.sheetBackground, ref: bottomSheetRef, header: closure_8(tmp4Result, obj5), children: closure_8(closure_5, obj7) };
  const BottomSheet = tmp2(5398).BottomSheet;
  obj5 = { title: intl2.string(_modDef3059["6OxgN7"]), trailing: closure_8(Button, obj6) };
  tmp4Result = DisplayNameStylesSheetHeaderDefault;
  intl2 = tmp2(1113).intl;
  obj6 = { text: intl3.string(onSelectColor(1113).t.XqMe3N), onPress: callback2, variant: "primary", size: "sm" };
  Button = tmp2(5770).Button;
  intl3 = tmp2(1113).intl;
  obj7 = { style: tmp.container, children: closure_9(closure_5, obj8) };
  let tmp19;
  obj8 = { style: tmp.contentContainer, children: items6 };
  const obj9 = { style: tmp.presetGrid, children: items5 };
  const tmp4Result2 = DisplayNameStylesCustomColorButtonDefault;
  if (tmp8) {
    const items4 = [color];
    tmp19 = items4;
  }
  items5 = [
    closure_8(tmp4Result2, { activeColors: tmp19, isSelected: tmp8, onPress: callback1 }),
    items.map((colors, index) => {
      let a11yLabel;
      let items;
      let obj3;
      let tmp;
      [tmp] = colors.colors;
      const obj = { onPress: tmp === closure_2[0] ? callback : (() => closure_6(onSelectColor)), style: items, accessibilityRole: "button", accessibilityState: { selected: tmp === first }, accessibilityLabel: a11yLabel };
      items = [presetColor.presetColor, , ];
      a11yLabel = colors.a11yLabel;
      const obj2 = { backgroundColor: obj3.int2hex(tmp) };
      items[1] = obj2;
      const tmp6 = tmp === first && presetColor.presetColorSelected;
      items[2] = tmp6;
      obj3 = onSelectColor(closure_2[12]);
      return closure_1_8(closure_6, obj, index);
    })
  ];
  items6 = [closure_9(closure_5, obj9), ];
  const obj10 = { text: intl4.string(onSelectColor(1113).t.yBZMsQ), onPress, variant: "secondary", size: "md", grow: true };
  const Button2 = tmp2(5770).Button;
  intl4 = tmp2(1113).intl;
  items6[1] = closure_8(Button2, obj10);
  return closure_8(BottomSheet, obj4);
};
