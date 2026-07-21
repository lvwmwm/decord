// Module ID: 13447
// Function ID: 102121
// Name: SuggestedColors
// Dependencies: []
// Exports: default

// Module 13447 (SuggestedColors)
function SuggestedColors(arg0) {
  let suggestedColors;
  ({ suggestedColors, onSelect: closure_0, color: closure_1 } = arg0);
  const tmp = callback3();
  const dependencyMap = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      const obj = {
        style: tmp.suggestedColorsContainer,
        children: suggestedColors.map((color) => {
              const tmp = callback(tmp[6]);
              return callback2(tmp, {
                color,
                style: tmp.suggestedColor,
                selected: color === callback,
                onSelect() {
                  if (null != arg0) {
                    arg0(arg0);
                  }
                }
              }, "" + color + "-" + arg1);
            })
      };
      tmp2 = callback2(View, obj);
    }
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const obj1 = { allowsInlineMediaPlayback: false, javaScriptEnabled: false, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.suggestedColor = obj1;
obj.suggestedColorsContainer = { "Bool(false)": 7, "Bool(false)": 370 };
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default function CustomColorPickerActionSheet(arg0) {
  let actionButtonVariant;
  let color;
  let h;
  let onSelect;
  let s;
  let suggestedColors;
  let v;
  ({ color, onSelect } = arg0);
  const arg1 = onSelect;
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let importDefault;
  let closure_2;
  let callback;
  let React;
  let View;
  let sharedValue2;
  callback = undefined;
  function updateInputHexValueFromHsv(h) {
    const hsvToRgbWorkletResult = onSelect(callback[9]).hsvToRgbWorklet(h);
    const obj = onSelect(callback[9]);
    callback(onSelect(callback[10]).rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let obj = arg1(closure_2[7]);
  const tmp = updateInputHexValueFromHsv();
  let obj1 = arg1(closure_2[7]);
  const int2hexResult = obj.int2hex(color);
  ({ h, s, v } = obj1.int2hsv(color));
  const tmp4 = callback(React.useState(int2hexResult), 2);
  const first = tmp4[0];
  importDefault = first;
  closure_2 = tmp4[1];
  const items = [first];
  let memo = React.useMemo(() => {
    if (null == first) {
      return onSelect(closure_2[7]).hex2int("#000000");
    } else {
      return onSelect(closure_2[7]).hex2int(first);
    }
  }, items);
  callback = memo;
  let obj2 = arg1(closure_2[8]);
  const sharedValue = obj2.useSharedValue(h);
  React = sharedValue;
  let obj4 = arg1(closure_2[8]);
  const sharedValue1 = obj4.useSharedValue(s);
  View = sharedValue1;
  const int2hsvResult = obj1.int2hsv(color);
  sharedValue2 = arg1(closure_2[8]).useSharedValue(v);
  let combined;
  if (null != suggestedColors) {
    const mapped = suggestedColors.map((first) => onSelect(closure_2[7]).hex2int(first));
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, first];
  callback = React.useCallback(() => {
    if (null != first) {
      if (null != obj.hex2rgb2hsv(first)) {
        onSelect(memo);
      }
    }
    let value = sharedValue.get();
    value = sharedValue1.get();
    const obj2 = first(closure_2[11]);
    onSelect(first(closure_2[11]).hsv(value, value, sharedValue2.get()).num());
  }, items1);
  const items2 = [callback];
  const callback1 = React.useCallback(() => {
    callback();
    first(closure_2[12]).hideActionSheet();
  }, items2);
  obj = { onDismiss: callback, startExpanded: true };
  obj = {};
  const intl = arg1(closure_2[15]).intl;
  obj.title = intl.string(arg1(closure_2[15]).t.WTqQ5e);
  obj1 = { variant: actionButtonVariant, size: "sm" };
  const intl2 = arg1(closure_2[15]).intl;
  obj1.text = intl2.string(arg1(closure_2[15]).t.XqMe3N);
  obj1.onPress = callback1;
  obj.trailing = sharedValue2(arg1(closure_2[16]).Button, obj1);
  obj.header = sharedValue2(arg1(closure_2[14]).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.container };
  const obj3 = {};
  const intl3 = arg1(closure_2[15]).intl;
  obj3.accessibilityLabel = intl3.string(arg1(closure_2[15]).t.ozfa/h);
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
    const hex2rgb2hsvResult = onSelect(callback[10]).hex2rgb2hsv(text);
    callback(text);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  };
  obj3.maxLength = 7;
  const items3 = [sharedValue2(arg1(closure_2[17]).TextInput, obj3), , ];
  obj4 = {};
  const obj7 = arg1(closure_2[8]);
  const tmp10 = sharedValue2;
  const tmp11 = callback;
  const tmp12 = View;
  const tmp13 = sharedValue2;
  const tmp14 = SuggestedColors;
  obj4.suggestedColors = importDefault(closure_2[18]).uniq(combined);
  obj4.onSelect = function onSelect(color) {
    let s;
    let v;
    callback(onSelect(callback[7]).int2hex(color));
    const obj = onSelect(callback[7]);
    const int2hsvResult = onSelect(callback[7]).int2hsv(color);
    ({ s, v } = int2hsvResult);
    const result = sharedValue.set(int2hsvResult.h);
    const result1 = sharedValue1.set(s);
    const result2 = sharedValue2.set(v);
  };
  if (null == first) {
    let value = sharedValue.get();
    value = sharedValue1.get();
    memo = arg1(closure_2[7]).hsv2int(value, value, sharedValue2.get());
    const obj17 = arg1(closure_2[7]);
  }
  obj4.color = memo;
  items3[1] = tmp13(tmp14, obj4);
  items3[2] = sharedValue2(importDefault(closure_2[19]), {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      let obj = onSelect(closure_2[8]);
      obj = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
      obj.runOnJS(updateInputHexValueFromHsv)(obj);
    }
  });
  obj2.children = items3;
  obj.children = tmp11(tmp12, obj2);
  return tmp10(arg1(closure_2[13]).BottomSheet, obj);
};
