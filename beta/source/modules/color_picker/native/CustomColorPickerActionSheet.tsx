// Module ID: 14153
// Function ID: 14154
// Name: CustomColorPickerActionSheet
// Dependencies: [32, 19, 17, 21, 4836, 576, 14154, 1092, 4566, 14155, 4683, 672, 4800, 6571, 6570, 1115, 5281, 6024, 12, 14156, 2]
// Exports: default

// Module 14153 (CustomColorPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14155 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let obj = onSelect(1092);
  const int2hexResult = obj.int2hex(color);
  let obj2 = onSelect(1092);
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
  const obj4 = onSelect(4566);
  sharedValue = obj4.useSharedValue(h);
  const obj6 = onSelect(4566);
  const sharedValue1 = obj6.useSharedValue(s);
  const obj8 = onSelect(4566);
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
    const hsv = _modDef672.hsv;
    _modDef672;
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
  BottomSheet = tmp2(6571).BottomSheet;
  obj7 = { title: intl.string(onSelect(1115).t.WTqQ5e), trailing: sharedValue2(Button, obj9) };
  BottomSheetTitleHeader = tmp2(6570).BottomSheetTitleHeader;
  intl = tmp2(1115).intl;
  obj9 = { variant: actionButtonVariant, size: "sm", text: intl2.string(onSelect(1115).t.XqMe3N), onPress: callback1 };
  Button = tmp2(5281).Button;
  intl2 = tmp2(1115).intl;
  obj10 = { style: tmp.container, children: items3 };
  const obj11 = {
    accessibilityLabel: intl3.string(onSelect(1115).t["ozfa/h"]),
    value,
    onChange(first4) {
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
  const TextInput = tmp2(6024).TextInput;
  intl3 = tmp2(1115).intl;
  items3 = [sharedValue2(TextInput, obj11), , ];
  const obj12 = {
    suggestedColors: obj17.uniq(combined),
    onSelect(color) {
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
    const hsv2int = tmp2(1092).hsv2int;
    onSelect(1092);
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
  items3[2] = sharedValue2(tmp16(14156), obj13);
  return sharedValue2(BottomSheet, obj5);
};
