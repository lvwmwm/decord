// Module ID: 7510
// Function ID: 60188
// Name: getLengthRemainingTextColor
// Dependencies: [31, 27, 33, 4130, 689, 5780, 5774, 3836, 7511, 1212, 5783, 4126, 2]

// Module 7510 (getLengthRemainingTextColor)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
function getLengthRemainingTextColor(maxLength, diff) {
  let str = "text-muted";
  let str2 = "text-muted";
  if (null != maxLength) {
    str2 = str;
    if (null != diff) {
      let str3 = "text-feedback-critical";
      if (diff > 0) {
        if (diff < maxLength / 9) {
          str = "text-feedback-warning";
        }
        str3 = str;
      }
      str2 = str3;
    }
  }
  return str2;
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = { area: { height: 128, textAlignVertical: "top" } };
obj = { position: "absolute", bottom: require("_createForOfIteratorHelperLoose").space.PX_4, right: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.maxLengthIndicator = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = require("result").forwardRef((isDisabled) => {
  let focusProps;
  let innerRef;
  let inputProps;
  let isFocused;
  let obj = require(5780) /* useInputStyles */;
  obj = { size: "lg", isRound: false, isDisabled: isDisabled.isDisabled };
  const inputStyles = obj.useInputStyles(obj);
  const tmp2 = callback2();
  const maxLength = isDisabled.maxLength;
  let obj2 = require(5774) /* useTextFieldState */;
  const textField = obj2.useTextField(isDisabled, arg1);
  ({ inputProps, innerRef } = textField);
  let obj3 = require(3836) /* getNodeText */;
  const focus = obj3.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - iter.value.length;
  }
  let obj4 = require(7511) /* useCharacterLimitAnnouncement */;
  obj = { currentLength: iter.value.length, maxLength };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.message = intl.string(require(1212) /* getSystemLocale */.t.c2Jqed);
  const characterLimitAnnouncement = obj4.useCharacterLimitAnnouncement(obj);
  const obj1 = {};
  const merged = Object.assign(isDisabled);
  obj1["isFocused"] = isFocused;
  obj2 = {};
  const merged1 = Object.assign(require(3836) /* getNodeText */.mergeProps(inputProps, focusProps));
  obj2["ref"] = innerRef;
  const items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp2.area;
  obj2["style"] = items;
  obj2["placeholderTextColor"] = inputStyles.placeholderText.color;
  obj2["multiline"] = true;
  const items1 = [callback(require(5783) /* useKeyboardBlurring */.NativeTextInput, obj2), ];
  let tmp10 = null;
  if (null != diff) {
    obj3 = { style: tmp2.maxLengthIndicator };
    obj4 = { variant: "text-xs/semibold", color: getLengthRemainingTextColor(maxLength, diff) };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj5 = { remainingCharacters: diff };
    obj4.accessibilityLabel = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.fR1cof, obj5);
    obj4.children = diff;
    obj3.children = callback(require(4126) /* Text */.Text, obj4);
    tmp10 = callback(View, obj3);
  }
  items1[1] = tmp10;
  obj1["children"] = items1;
  return closure_4(require(5780) /* useInputStyles */.InputFieldContainer, obj1);
});
const result = require("jsxProd").fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = forwardRefResult;
