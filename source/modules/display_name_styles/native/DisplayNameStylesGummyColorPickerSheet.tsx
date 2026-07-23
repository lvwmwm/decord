// Module ID: 14232
// Function ID: 109339
// Name: DisplayNameStylesGummyColorPickerSheet
// Dependencies: [57, 31, 27, 1861, 653, 33, 1860, 4130, 689, 8518, 1862, 620, 4099, 14233, 675, 4098, 5187, 5186, 4543, 1212, 13588, 9106, 2]
// Exports: default

// Module 14232 (DisplayNameStylesGummyColorPickerSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { DISPLAY_NAME_STYLES_GUMMY_PRESETS as closure_7 } from "items3";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import wrapHue from "wrapHue";
import closure_11 from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
wrapHue = {};
wrapHue = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
wrapHue.body = wrapHue;
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, alignSelf: "stretch" };
wrapHue.colorRowInset = _createForOfIteratorHelperLoose;
wrapHue.optionContainer = { flexDirection: "row", flexWrap: "wrap" };
wrapHue.swatchWrapper = { width: "25%", padding: 2 };
let obj2 = { height: 40, flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
wrapHue.swatch = obj2;
wrapHue.swatchSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let obj4 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_NORMAL };
wrapHue.customSwatchEmpty = obj4;
let obj5 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj5["alignItems"] = "center";
obj5["justifyContent"] = "center";
wrapHue.customIconOverlay = obj5;
let obj6 = { width: 28, height: 28, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
wrapHue.customIconScrim = obj6;
wrapHue = _createForOfIteratorHelperLoose.createStyles(wrapHue);
let obj3 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  let callback;
  let first;
  let closure_5;
  let first1;
  let closure_7;
  let c8;
  let callback2;
  const tmp = wrapHue();
  const dependencyMap = tmp;
  let obj = selectedColors(8518);
  let tmp3 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedColors(1862).DisplayNameEffect.GUMMY);
  if (tmp3) {
    tmp3 = !closure_7.some((arg0) => selectedColors(tmp[11]).areArraysShallowEqual(arg0, selectedColors));
  }
  callback = tmp3;
  const tmp5 = callback(first.useState(() => {
    if (c3) {
      let result = selectedColors(tmp[6]).rebuildGummySourceColor(selectedColors);
      const obj = selectedColors(tmp[6]);
    } else {
      result = outer1_11;
    }
    return result;
  }), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  const tmp7 = callback(first.useState(() => {
    if (selectedColors.length > 0) {
      let gummyColors = selectedColors;
    } else {
      gummyColors = selectedColors(selectedColors[6]).buildGummyColors(outer1_11);
      const obj = selectedColors(selectedColors[6]);
    }
    return gummyColors;
  }), 2);
  first1 = tmp7[0];
  closure_7 = tmp7[1];
  const findIndexResult = closure_7.findIndex((arg0) => selectedColors(tmp[11]).areArraysShallowEqual(arg0, first1));
  c8 = findIndexResult;
  let items = [first];
  callback = first.useCallback(() => {
    let obj = selectedColors(tmp[12]);
    const result = obj.triggerHapticFeedback(selectedColors(tmp[12]).HapticFeedbackTypes.IMPACT_LIGHT);
    obj = {
      initialColor: first,
      onSelect(outer1_11) {
        outer1_5(outer1_11);
        outer1_7(selectedColors(table[6]).buildGummyColors(outer1_11));
      }
    };
    onSelectColors(tmp[13])(obj);
  }, items);
  callback2 = first.useCallback((arg0) => {
    const items = [...arg0];
    dependencyMap(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = first.useCallback(() => {
    const items = [...closure_7[0]];
    dependencyMap(items);
    callback(outer1_11);
  }, []);
  callback2 = first.useCallback(() => {
    let obj = selectedColors(tmp[12]);
    const result = obj.triggerHapticFeedback(selectedColors(tmp[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    obj = { default: false, colors: first1 };
    onSelectColors(tmp[14]).track(_undefined.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(tmp[14]);
    onSelectColors(tmp[15]).hideActionSheet();
  }, items1);
  obj = {};
  obj = { title: displayNameStylesEffectConfig.name };
  const obj1 = { variant: "primary", size: "sm" };
  const intl = selectedColors(1212).intl;
  obj1.text = intl.string(selectedColors(1212).t.XqMe3N);
  obj1.onPress = callback2;
  obj.trailing = callback2(selectedColors(4543).Button, obj1);
  obj.header = callback2(selectedColors(5186).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body };
  const obj3 = { style: items2 };
  items2 = [, ];
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
  const intl2 = selectedColors(1212).intl;
  obj5.accessibilityLabel = intl2.string(selectedColors(1212).t["FHBa/1"]);
  if (findIndexResult >= 0) {
    const obj6 = { style: tmp.customSwatchEmpty };
    let tmp19Result = tmp19(closure_5, obj6);
  } else {
    const obj7 = { colors: first1 };
    tmp19Result = tmp19(onSelectColors(13588), obj7);
  }
  const items4 = [tmp19Result, ];
  const obj8 = { style: tmp.customIconOverlay, pointerEvents: "none", children: callback2(closure_5, { style: tmp.customIconScrim, children: callback2(selectedColors(9106).PencilIcon, { color: "white", size: "sm" }) }) };
  items4[1] = callback2(closure_5, obj8);
  obj5.children = items4;
  obj4.children = closure_10(first1, obj5);
  const items5 = [
    callback2(closure_5, obj4),
    closure_7.map((colors) => {
      let closure_0 = colors;
      let obj = { style: tmp.swatchWrapper };
      obj = {};
      const items = [c8 === arg1.swatch, ];
      let swatchSelected = tmp;
      if (c8 === arg1) {
        swatchSelected = tmp.swatchSelected;
      }
      items[1] = swatchSelected;
      obj.style = items;
      obj.onPress = function onPress() {
        return outer1_9(closure_0);
      };
      obj.accessibilityRole = "button";
      obj.accessibilityState = { selected: c8 === arg1 };
      obj = { colors };
      obj.children = callback2(onSelectColors(c8 === arg1[20]), obj);
      obj.children = callback2(first1, obj);
      return callback2(closure_5, obj, arg1);
    })
  ];
  obj3.children = items5;
  const items6 = [closure_10(closure_5, obj3), ];
  const obj10 = {};
  const intl3 = selectedColors(1212).intl;
  obj10.text = intl3.string(selectedColors(1212).t.yBZMsQ);
  obj10.onPress = callback1;
  obj10.variant = "secondary";
  items6[1] = callback2(selectedColors(4543).Button, obj10);
  obj2.children = items6;
  obj.children = closure_10(closure_5, obj2);
  return callback2(selectedColors(5187).BottomSheet, obj);
};
