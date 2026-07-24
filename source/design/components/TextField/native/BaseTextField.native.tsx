// Module ID: 5782
// Function ID: 49482
// Name: collapseNewlines
// Dependencies: [31, 33, 477, 1324, 5780, 3839, 5783, 3838, 2]

// Module 5782 (collapseNewlines)
import importAllResult from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function collapseNewlines(defaultValue) {
  let replaced = defaultValue;
  if (null != defaultValue) {
    replaced = defaultValue.replace(/\r\n?|\n/g, " ");
  }
  return replaced;
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((size, photosButtonExternalRef) => {
  let autoComplete;
  let focusProps;
  let isFocused;
  let keyboardType;
  let secureTextEntry;
  let obj = ref(5780);
  obj = { size: size.size, isRound: size.isRound, hasLeadingIcon: null != size.leadingIcon, isRefreshEnabled: onChangeText(1324)("InputFieldContainer") };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = ref(3839);
  const focus = obj2.useFocus();
  ({ focusProps, isFocused } = focus);
  ref = importAllResult.useRef(null);
  let tmp5 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    obj = {};
    let str = "off";
    if (!obj5.isAndroid()) {
      str = autoComplete;
    }
    obj.autoComplete = str;
    obj5 = ref(477);
    const tmp10 = !ref(477).isAndroid();
    let tmp11 = !tmp10;
    if (tmp10) {
      tmp11 = secureTextEntry;
    }
    obj.secureTextEntry = tmp11;
    const obj6 = ref(477);
    let str2 = "visible-password";
    if (!obj7.isAndroid()) {
      str2 = keyboardType;
    }
    obj.keyboardType = str2;
    tmp5 = obj;
    obj7 = ref(477);
  }
  onChangeText = size.onChangeText;
  const items = [onChangeText];
  const callback = importAllResult.useCallback((arg0) => {
    const tmp = outer1_6(arg0);
    if (tmp !== arg0) {
      const current = ref.current;
      if (null != current) {
        const obj = { text: tmp };
        current.setNativeProps(obj);
      }
    }
    if (null != onChangeText) {
      onChangeText(tmp);
    }
  }, items);
  const obj1 = {};
  const merged = Object.assign(size);
  obj1["isFocused"] = isFocused;
  const items1 = [size.leading, , ];
  obj2 = {};
  const merged1 = Object.assign(tmp5);
  let tmp = onChangeText(1324)("InputFieldContainer");
  const merged2 = Object.assign(ref(3838).mergeProps(size, focusProps));
  obj2["value"] = collapseNewlines(size.value);
  obj2["defaultValue"] = collapseNewlines(size.defaultValue);
  obj2["onChangeText"] = callback;
  const obj10 = ref(3838);
  obj2["ref"] = ref(3838).mergeRefs(ref, photosButtonExternalRef);
  const items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj2["style"] = items2;
  obj2["placeholderTextColor"] = inputStyles.placeholderText.color;
  items1[1] = callback(ref(5783).NativeTextInput, obj2);
  items1[2] = size.trailing;
  obj1["children"] = items1;
  return callback2(ref(5780).InputFieldContainer, obj1);
});
const result = require("set").fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = forwardRefResult;
