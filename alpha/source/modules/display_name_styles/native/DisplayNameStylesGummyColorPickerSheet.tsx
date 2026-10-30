// Module ID: 17266
// Function ID: 17267
// Name: DisplayNameStylesGummyColorPickerSheet
// Dependencies: [32, 19, 17, 1402, 1072, 21, 1401, 5009, 575, 10755, 1403, 558, 17267, 5255, 17268, 1253, 5253, 5267, 17263, 5629, 1114, 16424, 10212, 2]
// Exports: default

// Module 17266 (DisplayNameStylesGummyColorPickerSheet)
import shallowEqual from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1402 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1403 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 17268 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1401 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, colors, dependencyMap;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let closure_7 = DisplayNameStylesConstants.DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
let createStyles = createStyles_mod;
let obj = { body: obj2, colorRowInset: obj3, optionContainer: { flexDirection: "row", flexWrap: "wrap" }, swatchWrapper: { width: "25%", padding: 2 }, swatch: obj4, swatchSelected: obj5, customSwatchEmpty: obj6, customIconOverlay: obj7, customIconScrim: size };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj4 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj7 = { alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  let Button;
  let _undefined;
  let c9;
  let closure_2;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let obj8;
  let tmp12;
  let tmp19Result;
  let tmp20;
  let tmp23;
  const f111834 = (item) => {
    const obj = shallowEqual;
    return obj.areArraysShallowEqual(item, selectedColors);
  };
  const f111837 = () => {
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    let tmp2 = null;
    DisplayNameStylesUtils;
    const GUMMY = DisplayNameEffect.DisplayNameEffect.GUMMY;
    if (selectedColors.length > 0) {
      tmp2 = selectedColors;
    }
    return createColorPaletteList(GUMMY, tmp2);
  };
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  let first1;
  c9 = undefined;
  let tmp = closure_12();
  dependencyMap = tmp;
  let tmp2 = selectedColors;
  let tmp3 = dependencyMap;
  let obj = selectedColors(10755);
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedColors(1403).DisplayNameEffect.GUMMY);
  react = selectedColors.length > 0 && !first1.some(f111834);
  const tmp5 = selectedColors.length > 0 && !first1.some(f111834);
  const tmp7 = displayNameStylesEffectConfig(react.useState(() => {
    let result;
    const tmp = closure_4;
    if (tmp) {
      const obj = DisplayNameStylesUtils;
      result = obj.rebuildGummySourceColor(selectedColors);
    } else {
      result = closure_11;
    }
    return result;
  }), 2);
  const initialColor = tmp7[0];
  let closure_6 = tmp7[1];
  const tmp9 = displayNameStylesEffectConfig(react.useState(() => {
    let defaultColors = selectedColors;
    if (selectedColors.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  }), 2);
  first1 = tmp9[0];
  let closure_8 = tmp9[1];
  [tmp12, c9] = displayNameStylesEffectConfig(react.useState(f111837), 2);
  displayNameStylesEffectConfig(react.useState(f111837), 2);
  const tmp14 = onSelectColors(17267);
  const tmp14Result = tmp14(tmp2(1403).DisplayNameEffect.GUMMY, tmp12);
  const findIndexResult = tmp14Result.findIndex((colors) => {
    colors = colors.colors;
    const obj = shallowEqual;
    return obj.areArraysShallowEqual(colors, first1);
  });
  let c10 = findIndexResult;
  let items = [initialColor];
  const callback = react.useCallback(() => {
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = {
      initialColor,
      onSelect(color) {
        let obj = selectedColors(closure_2[6]);
        const gummyColors = obj.buildGummyColors(color);
        closure_1_6(color);
        closure_1_8(gummyColors);
        _undefined((arr) => {
          const obj = closure_2_0(closure_2_2[6]);
          return obj.updateCustomSwatch(arr, closure_2_0(closure_2_2[10]).DisplayNameEffect.GUMMY, gummyColors);
        });
      }
    };
    showGummyCustomColorSheetDefault(obj2);
  }, items);
  closure_11 = react.useCallback((arg0) => {
    const items = [...arg0];
    closure_8(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = react.useCallback(() => {
    const items = [...closure_7[0]];
    closure_8(items);
    closure_6(closure_11);
    _undefined((arr) => {
      const obj = selectedColors(closure_2_2[6]);
      return obj.updateCustomSwatch(arr, selectedColors(closure_2_2[10]).DisplayNameEffect.GUMMY, items);
    });
  }, []);
  const callback2 = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { default: false, colors: first1 };
    obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items1);
  let obj2 = { header: c9(tmp20, obj3), children: c10(initialColor, obj5) };
  BottomSheet = tmp2(5267).BottomSheet;
  obj3 = { title: displayNameStylesEffectConfig.name, trailing: c9(Button, obj4) };
  obj4 = { variant: "primary", size: "sm", text: intl.string(tmp2(1114).t.XqMe3N), onPress: callback2 };
  tmp20 = onSelectColors(17263);
  Button = tmp2(5629).Button;
  intl = tmp2(1114).intl;
  const obj6 = { style: items2, children: items4 };
  items2 = [, ];
  obj5 = { style: tmp.body, children: items5 };
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  const obj7 = { style: tmp.swatchWrapper, children: c10(tmp23, obj8) };
  obj8 = { style: tmp.swatch, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl2.string(tmp2(1114).t["FHBa/1"]), children: items3 };
  intl2 = tmp2(1114).intl;
  const tmp13 = onSelectColors;
  tmp23 = closure_6;
  if (findIndexResult >= 0) {
    const obj9 = { style: tmp.customSwatchEmpty };
    tmp19Result = tmp19(tmp22, obj9);
  } else {
    const obj10 = { colors: first1 };
    tmp19Result = tmp19(tmp13(16424), obj10);
  }
  items3 = [tmp19Result, ];
  const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: c9(initialColor, obj12) };
  obj12 = { style: tmp.customIconScrim, children: c9(tmp2(10212).PencilIcon, { color: "white", size: "sm" }) };
  items3[1] = c9(initialColor, obj11);
  items4 = [
    c9(initialColor, obj7),
    tmp14Result.map((colors, index) => {
      let obj2;
      let tmp4;
      colors = colors.colors;
      const items = [closure_2.swatch, ];
      let swatchSelected = tmp;
      const a11yLabel = colors.a11yLabel;
      const obj = { style: closure_2.swatchWrapper, children: _undefined(tmp4, obj2) };
      const tmp3 = first;
      tmp4 = closure_6;
      if (c10 === index) {
        swatchSelected = closure_2.swatchSelected;
      }
      items[1] = swatchSelected;
      obj2 = {
        style: items,
        onPress() {
          return closure_11(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: c10 === index },
        accessibilityLabel: a11yLabel,
        children: _undefined(onSelectColors(closure_2[21]), { colors })
      };
      return _undefined(tmp3, obj, index);
    })
  ];
  items5 = [c10(initialColor, obj6), ];
  const obj13 = { text: intl3.string(tmp2(1114).t.yBZMsQ), onPress: callback1, variant: "secondary" };
  const Button2 = tmp2(5629).Button;
  intl3 = tmp2(1114).intl;
  items5[1] = c9(Button2, obj13);
  return c9(BottomSheet, obj2);
};
