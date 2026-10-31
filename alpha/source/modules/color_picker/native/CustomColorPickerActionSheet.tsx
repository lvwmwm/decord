// Module ID: 16438
// Function ID: 16439
// Name: CustomColorPickerActionSheet
// Dependencies: [32, 19, 17, 21, 5014, 575, 16439, 1090, 5095, 16440, 5011, 671, 5258, 5272, 7321, 1113, 5634, 7082, 12, 16441, 2]
// Exports: default

// Module 16438 (CustomColorPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ColorPickerUtils from "ColorPickerUtils" /* 16440 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function SuggestedColors(arg0) {
  let suggestedColors;
  ({ suggestedColors, onSelect: require, color: importDefault } = arg0);
  let tmp = closure_9();
  const suggestedColor = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      let obj = {
        style: tmp.suggestedColorsContainer,
        children: suggestedColors.map((color, index) => {
              let closure_0 = color;
              const obj = {
                color,
                style: suggestedColor.suggestedColor,
                selected: color === importDefault,
                onSelect() {
                  if (null != require) {
                    tmp(color);
                  }
                }
              };
              const tmp = require("ColorBlock");
              return closure_1_6(tmp, obj, "" + color + "-" + index);
            })
      };
      tmp2 = closure_6(View, obj);
    }
  }
  return tmp2;
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "#000000";
let createStyles = createStyles_mod;
let obj = { container: obj2, suggestedColor: obj3, suggestedColorsContainer: { flexDirection: "row", justifyContent: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { minWidth: 32, height: 32, borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default function CustomColorPickerActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let Button;
  let actionButtonVariant;
  let closure_2;
  let color;
  let h;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let obj10;
  let obj17;
  let obj7;
  let obj9;
  let onSelect;
  let s;
  let suggestedColors;
  let tmp13;
  let tmp14;
  let v;
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let memo;
  let sharedValue;
  let onDismiss;
  function updateInputHexValueFromHsv(h) {
    const obj = ColorPickerUtils;
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(h);
    const obj2 = ColorUtils;
    closure_2(obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let tmp = closure_9();
  let obj = onSelect(1090);
  const int2hexResult = obj.int2hex(color);
  let obj2 = onSelect(1090);
  let int2hsvResult = obj2.int2hsv(color);
  let obj3 = sharedValue;
  ({ h, s, v } = int2hsvResult);
  const tmp6 = memo(sharedValue.useState(int2hexResult), 2);
  let value = tmp6[0];
  dependencyMap = tmp6[1];
  const items = [value];
  memo = sharedValue.useMemo(() => {
    if (null == first) {
      const obj3 = utils_ColorUtils;
      return obj3.hex2int(c8);
    } else {
      try {
        const obj = utils_ColorUtils;
        return obj.hex2int(tmp);
      } catch (err) {
        const obj2 = utils_ColorUtils;
        return obj2.hex2int(c8);
      }
    }
  }, items);
  const obj4 = onSelect(5095);
  sharedValue = obj4.useSharedValue(h);
  const obj6 = onSelect(5095);
  const sharedValue1 = obj6.useSharedValue(s);
  const obj8 = onSelect(5095);
  const sharedValue2 = obj8.useSharedValue(v);
  let combined;
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => {
      const obj = onSelect(closure_2[7]);
      return obj.hex2int(item);
    });
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, value];
  onDismiss = obj3.useCallback(() => {
    if (null != first) {
      const obj = ColorUtils;
      if (null != obj.hex2rgb2hsv(tmp)) {
        onSelect(memo);
      }
    }
    const hsv = _modDef671.hsv;
    _modDef671;
    value = sharedValue.get();
    const value2 = sharedValue1.get();
    const hsvResult = hsv(value, value2, sharedValue2.get());
    onSelect(hsvResult.num());
  }, items1);
  const items2 = [onDismiss];
  const callback1 = obj3.useCallback(() => {
    callback();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items2);
  const obj5 = { onDismiss, startExpanded: true, header: sharedValue2(BottomSheetTitleHeader, obj7), children: tmp13(tmp14, obj10) };
  BottomSheet = tmp2(5272).BottomSheet;
  obj7 = { title: intl.string(onSelect(1113).t.WTqQ5e), trailing: sharedValue2(Button, obj9) };
  BottomSheetTitleHeader = tmp2(7321).BottomSheetTitleHeader;
  intl = tmp2(1113).intl;
  obj9 = { variant: actionButtonVariant, size: "sm", text: intl2.string(onSelect(1113).t.XqMe3N), onPress: callback1 };
  Button = tmp2(5634).Button;
  intl2 = tmp2(1113).intl;
  obj10 = { style: tmp.container, children: items3 };
  const obj11 = {
    accessibilityLabel: intl3.string(onSelect(1113).t["ozfa/h"]),
    value,
    onChange: function onTextInputChange(first4) {
      let text = first4;
      const tmp = first4.length > 0 && "#" !== first4.charAt(0);
      if (tmp) {
        text = `#${first4}`;
      }
      const obj = ColorUtils;
      const hex2rgb2hsvResult = obj.hex2rgb2hsv(text);
      closure_2(text);
      if (null != hex2rgb2hsvResult) {
        const result = sharedValue.set(hex2rgb2hsvResult.h);
        const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
        const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
      }
    },
    maxLength: 7
  };
  const TextInput = tmp2(7082).TextInput;
  intl3 = tmp2(1113).intl;
  items3 = [sharedValue2(TextInput, obj11), , ];
  const obj12 = {
    suggestedColors: obj17.uniq(combined),
    onSelect: function onSelectSuggested(color) {
      let s;
      let v;
      const obj = utils_ColorUtils;
      closure_2(obj.int2hex(color));
      const obj2 = utils_ColorUtils;
      const int2hsvResult = obj2.int2hsv(color);
      ({ s, v } = int2hsvResult);
      const result = sharedValue.set(int2hsvResult.h);
      const result1 = sharedValue1.set(s);
      const result2 = sharedValue2.set(v);
    },
    color: memo
  };
  obj17 = value(12);
  tmp13 = updateInputHexValueFromHsv;
  tmp14 = sharedValue1;
  const tmp15 = SuggestedColors;
  const tmp16 = value;
  if (null == value) {
    const hsv2int = tmp2(1090).hsv2int;
    onSelect(1090);
    value = sharedValue.get();
    let value2 = sharedValue1.get();
    memo = hsv2int(value, value2, sharedValue2.get());
  }
  items3[1] = sharedValue2(tmp15, obj12);
  const obj13 = {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      const obj2 = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(updateInputHexValueFromHsv);
      runOnJSResult(obj2);
    }
  };
  items3[2] = sharedValue2(tmp16(16441), obj13);
  return sharedValue2(BottomSheet, obj5);
};
