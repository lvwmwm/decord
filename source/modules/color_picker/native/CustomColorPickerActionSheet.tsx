// Module ID: 13568
// Function ID: 104310
// Name: SuggestedColors
// Dependencies: [57, 31, 27, 33, 4130, 689, 13569, 665, 3991, 13570, 3974, 666, 4098, 5187, 5186, 1212, 4543, 7512, 22, 13571, 2]
// Exports: default

// Module 13568 (SuggestedColors)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function SuggestedColors(arg0) {
  let importDefault;
  let require;
  let suggestedColors;
  ({ suggestedColors, onSelect: require, color: importDefault } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      const obj = {
        style: tmp.suggestedColorsContainer,
        children: suggestedColors.map((color) => {
              let closure_0 = color;
              tmp = outer1_1(tmp[6]);
              return outer1_6(tmp, {
                color,
                style: tmp.suggestedColor,
                selected: color === closure_1,
                onSelect() {
                  if (null != color) {
                    color(color);
                  }
                }
              }, "" + color + "-" + arg1);
            })
      };
      tmp2 = callback(View, obj);
    }
  }
  return tmp2;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { minWidth: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.suggestedColor = obj1;
_createForOfIteratorHelperLoose.suggestedColorsContainer = { flexDirection: "row", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default function CustomColorPickerActionSheet(arg0) {
  let actionButtonVariant;
  let color;
  let h;
  let onSelect;
  let s;
  let suggestedColors;
  let v;
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let first;
  let dependencyMap;
  let memo;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let callback;
  function updateInputHexValueFromHsv(h) {
    const hsvToRgbWorkletResult = onSelect(13570).hsvToRgbWorklet(h);
    const obj = onSelect(13570);
    dependencyMap(onSelect(3974).rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let obj = onSelect(665);
  let tmp = updateInputHexValueFromHsv();
  let obj1 = onSelect(665);
  const int2hexResult = obj.int2hex(color);
  ({ h, s, v } = obj1.int2hsv(color));
  const tmp4 = memo(sharedValue.useState(int2hexResult), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  const items = [first];
  memo = sharedValue.useMemo(() => {
    if (null == first) {
      return onSelect(665).hex2int("#000000");
    } else {
      return onSelect(665).hex2int(first);
    }
  }, items);
  let obj2 = onSelect(3991);
  sharedValue = obj2.useSharedValue(h);
  let obj4 = onSelect(3991);
  sharedValue1 = obj4.useSharedValue(s);
  let int2hsvResult = obj1.int2hsv(color);
  sharedValue2 = onSelect(3991).useSharedValue(v);
  let combined;
  if (null != suggestedColors) {
    const mapped = suggestedColors.map((first) => onSelect(665).hex2int(first));
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, first];
  callback = sharedValue.useCallback(() => {
    if (null != first) {
      if (null != obj.hex2rgb2hsv(first)) {
        onSelect(memo);
      }
    }
    let value = sharedValue.get();
    value = sharedValue1.get();
    const obj2 = first(666);
    onSelect(first(666).hsv(value, value, sharedValue2.get()).num());
  }, items1);
  const items2 = [callback];
  const callback1 = sharedValue.useCallback(() => {
    callback();
    first(4098).hideActionSheet();
  }, items2);
  obj = { onDismiss: callback, startExpanded: true };
  obj = {};
  const intl = onSelect(1212).intl;
  obj.title = intl.string(onSelect(1212).t.WTqQ5e);
  obj1 = { variant: actionButtonVariant, size: "sm" };
  const intl2 = onSelect(1212).intl;
  obj1.text = intl2.string(onSelect(1212).t.XqMe3N);
  obj1.onPress = callback1;
  obj.trailing = sharedValue2(onSelect(4543).Button, obj1);
  obj.header = sharedValue2(onSelect(5186).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.container };
  const obj3 = {};
  const intl3 = onSelect(1212).intl;
  obj3.accessibilityLabel = intl3.string(onSelect(1212).t["ozfa/h"]);
  obj3.value = first;
  obj3.onChange = function onChange(first4) {
    let tmp = first4.length > 0;
    if (tmp) {
      tmp = "#" !== first4.charAt(0);
    }
    let text = first4;
    if (tmp) {
      text = `#${first4}`;
    }
    const hex2rgb2hsvResult = onSelect(3974).hex2rgb2hsv(text);
    dependencyMap(text);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  };
  obj3.maxLength = 7;
  const items3 = [sharedValue2(onSelect(7512).TextInput, obj3), , ];
  obj4 = {};
  const obj7 = onSelect(3991);
  const tmp10 = sharedValue2;
  const tmp11 = callback;
  const tmp12 = sharedValue1;
  const tmp13 = sharedValue2;
  const tmp14 = SuggestedColors;
  obj4.suggestedColors = first(22).uniq(combined);
  obj4.onSelect = function onSelect(color) {
    let s;
    let v;
    dependencyMap(onSelect(665).int2hex(color));
    const obj = onSelect(665);
    const int2hsvResult = onSelect(665).int2hsv(color);
    ({ s, v } = int2hsvResult);
    const result = sharedValue.set(int2hsvResult.h);
    const result1 = sharedValue1.set(s);
    const result2 = sharedValue2.set(v);
  };
  if (null == first) {
    let value = sharedValue.get();
    value = sharedValue1.get();
    memo = onSelect(665).hsv2int(value, value, sharedValue2.get());
    const obj17 = onSelect(665);
  }
  obj4.color = memo;
  items3[1] = tmp13(tmp14, obj4);
  items3[2] = sharedValue2(first(13571), {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      let obj = onSelect(3991);
      obj = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
      obj.runOnJS(updateInputHexValueFromHsv)(obj);
    }
  });
  obj2.children = items3;
  obj.children = tmp11(tmp12, obj2);
  return tmp10(onSelect(5187).BottomSheet, obj);
};
