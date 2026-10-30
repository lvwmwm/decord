// Module ID: 17275
// Function ID: 17276
// Name: DisplayNameStylesColorPickerSheet
// Dependencies: [32, 19, 17, 1072, 21, 1091, 17272, 5009, 575, 8733, 10756, 1401, 5255, 5253, 16395, 1253, 5267, 17263, 1114, 2931, 5629, 12, 6987, 17273, 2]
// Exports: default

// Module 17275 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1401 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16395 */;
import ColorPickerConsts from "ColorPickerConsts" /* 17272 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, presetGrid: obj3, presetRow: obj4, presetColor: size, presetColorSelected: obj5, checkmarkOverlay: obj6, checkmark: size1, buttonsContainer: obj7, button: { flex: 1 } };
obj2 = { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
size = { width: 42, height: 42, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj6 = { alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: ColorPickerConsts.CHECKMARK_SIZE, height: ColorPickerConsts.CHECKMARK_SIZE };
obj7 = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  let Button;
  let Button2;
  let Button3;
  let chunkResult;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let onSelectColor;
  let presetRow;
  let tmp11;
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  ({ hasCustomSingleColor: dependencyMap, onSelectColor } = selectedColor);
  closure_10 = undefined;
  let tmp = closure_10();
  react = tmp;
  let obj = selectedColor(8733);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  let tmp2 = selectedEffectId(10756)()[selectedEffectId];
  let closure_5 = tmp2;
  const first = onSelectColor(react.useState(() => {
    let tmp3 = null;
    const createColorPaletteList = DisplayNameStylesUtils.createColorPaletteList;
    DisplayNameStylesUtils;
    const tmp2 = selectedEffectId;
    if (dependencyMap) {
      const items = [selectedColor];
      tmp3 = items;
    }
    return createColorPaletteList(tmp2, tmp3);
  }), 1)[0];
  let items = [first];
  const memo = react.useMemo(() => first.map((item) => item.colors[0]), items);
  const tmp5 = onSelectColor(react.useState(selectedColor), 2);
  const first1 = tmp5[0];
  let closure_8 = tmp5[1];
  const items1 = [first1, selectedColor];
  const memo1 = react.useMemo(() => first1 !== selectedColor, items1);
  closure_10 = react.useCallback((arg0) => {
    closure_8(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [first1, onSelectColor];
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(closure_5[0]);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items2);
  const items4 = [memo1, first1, onSelectColor, tmp2];
  const callback1 = react.useCallback(() => {
    let obj = {
      color: first1,
      onSelect(arg0) {
        const obj = selectedColor(dependencyMap[12]);
        const result = obj.triggerHapticFeedback(selectedColor(dependencyMap[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColor(arg0);
        const obj2 = selectedEffectId(dependencyMap[13]);
        obj2.hideActionSheet();
      },
      actionButtonVariant: "primary"
    };
    showCustomColorPickerActionSheetDefault(obj);
  }, items3);
  const callback2 = react.useCallback(() => {
    let items;
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    const tmp3 = memo1;
    if (tmp3) {
      onSelectColor(first1);
      const obj3 = { default: first1 === closure_5[0], colors: items };
      items = [first1];
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items4);
  let obj2 = { ref: bottomSheetRef, header: closure_8(tmp11, obj3), children: closure_8(closure_5, obj5) };
  BottomSheet = selectedColor(5267).BottomSheet;
  obj3 = { title: intl.string(selectedEffectId(2931)["6OxgN7"]), trailing: closure_8(Button, obj4) };
  tmp11 = selectedEffectId(17263);
  intl = selectedColor(1114).intl;
  obj4 = { text: intl2.string(selectedColor(1114).t.XqMe3N), onPress: callback2, variant: "primary", size: "sm" };
  Button = selectedColor(5629).Button;
  intl2 = selectedColor(1114).intl;
  obj5 = { style: tmp.container, children: memo1(closure_5, obj6) };
  obj6 = { style: tmp.contentContainer, children: items5 };
  const obj7 = {
    style: tmp.presetGrid,
    children: chunkResult.map((arr, index) => {
      let presetColor;
      let closure_0 = index;
      let obj = {
        style: presetRow.presetRow,
        children: arr.map((item, index) => {
          let CheckmarkLargeIcon;
          let items;
          let obj3;
          let obj5;
          let str;
          let tmp5Result;
          let closure_0 = item;
          let tmp = item === first1;
          const obj = {
            onPress() {
              return closure_2_10(closure_0);
            },
            style: items,
            accessibilityRole: "button",
            accessibilityState: { selected: tmp },
            accessibilityLabel: tmp5Result.int2hex(item),
            children: tmp
          };
          items = [presetColor.presetColor, , ];
          const obj2 = { backgroundColor: obj3.int2hex(item) };
          items[1] = obj2;
          items[2] = tmp && presetColor.presetColorSelected;
          obj3 = utils_ColorUtils;
          const tmp3 = metroRequire;
          tmp5Result = utils_ColorUtils;
          if (tmp) {
            const obj4 = { style: presetColor.checkmarkOverlay, pointerEvents: "none", children: metroImportAll(CheckmarkLargeIcon, obj5) };
            obj5 = { size: "custom", style: presetColor.checkmark, color: str };
            CheckmarkLargeIcon = tmp5(6987).CheckmarkLargeIcon;
            const tmp5Result2 = utils_ColorUtils;
            const darkness = tmp5Result2.getDarkness(item);
            str = "black";
            const tmp7 = hasOwnProperty;
            if (darkness > ColorPickerConsts.DARK_SWATCH_THRESHOLD) {
              str = "white";
            }
            tmp = tmp2(tmp7, obj4);
          }
          return metroImportAll(tmp3, obj, 6 * closure_0 + index);
        })
      };
      return closure_8(closure_5, obj, index);
    })
  };
  const obj8 = selectedEffectId(12);
  chunkResult = obj8.chunk(memo, 6);
  items5 = [closure_8(closure_5, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: items6 };
  const obj10 = { style: tmp.button, children: closure_8(Button2, obj11) };
  obj11 = { text: intl3.string(selectedEffectId(2931).gIeJTK), onPress: callback, variant: "secondary", size: "md", grow: true };
  Button2 = selectedColor(5629).Button;
  intl3 = selectedColor(1114).intl;
  items6 = [closure_8(closure_5, obj10), ];
  const obj12 = { style: tmp.button, children: closure_8(Button3, obj13) };
  obj13 = { text: intl4.string(selectedColor(1114).t["FHBa/1"]), onPress: callback1, variant: "secondary", size: "md", icon: closure_8(selectedColor(17273).EyeDropperIcon, { size: "sm" }), grow: true };
  Button3 = selectedColor(5629).Button;
  intl4 = selectedColor(1114).intl;
  items6[1] = closure_8(closure_5, obj12);
  items5[1] = memo1(closure_5, obj9);
  return closure_8(BottomSheet, obj2);
};
