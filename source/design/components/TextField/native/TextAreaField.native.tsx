// Module ID: 7505
// Function ID: 60154
// Name: getLengthRemainingTextColor
// Dependencies: []

// Module 7505 (getLengthRemainingTextColor)
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
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = { area: { backgroundColor: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000004745275637101841, color: 1757871019561524000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } };
obj = { position: "absolute", bottom: importDefault(dependencyMap[4]).space.PX_4, right: importDefault(dependencyMap[4]).space.PX_16 };
obj.maxLengthIndicator = obj;
let closure_5 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((isDisabled) => {
  let focusProps;
  let innerRef;
  let inputProps;
  let isFocused;
  let obj = arg1(dependencyMap[5]);
  obj = { "Null": "heading-md/medium", "Null": "text-default", isDisabled: isDisabled.isDisabled };
  const inputStyles = obj.useInputStyles(obj);
  const tmp2 = callback2();
  const maxLength = isDisabled.maxLength;
  let obj2 = arg1(dependencyMap[6]);
  const textField = obj2.useTextField(isDisabled, arg1);
  ({ inputProps, innerRef } = textField);
  let obj3 = arg1(dependencyMap[7]);
  const focus = obj3.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - iter.value.length;
  }
  let obj4 = arg1(dependencyMap[8]);
  obj = { currentLength: iter.value.length, maxLength };
  const intl = arg1(dependencyMap[9]).intl;
  obj.message = intl.string(arg1(dependencyMap[9]).t.c2Jqed);
  const characterLimitAnnouncement = obj4.useCharacterLimitAnnouncement(obj);
  const obj1 = {};
  const merged = Object.assign(isDisabled);
  obj1["isFocused"] = isFocused;
  obj2 = {};
  const merged1 = Object.assign(arg1(dependencyMap[7]).mergeProps(inputProps, focusProps));
  obj2["ref"] = innerRef;
  const items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp2.area;
  obj2["style"] = items;
  obj2["placeholderTextColor"] = inputStyles.placeholderText.color;
  obj2["multiline"] = true;
  const items1 = [callback(arg1(dependencyMap[10]).NativeTextInput, obj2), ];
  let tmp10 = null;
  if (null != diff) {
    obj3 = { style: tmp2.maxLengthIndicator };
    obj4 = { variant: "text-xs/semibold", color: getLengthRemainingTextColor(maxLength, diff) };
    const intl2 = arg1(dependencyMap[9]).intl;
    const obj5 = { remainingCharacters: diff };
    obj4.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[9]).t.fR1cof, obj5);
    obj4.children = diff;
    obj3.children = callback(arg1(dependencyMap[11]).Text, obj4);
    tmp10 = callback(View, obj3);
  }
  items1[1] = tmp10;
  obj1["children"] = items1;
  return closure_4(arg1(dependencyMap[5]).InputFieldContainer, obj1);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = forwardRefResult;
