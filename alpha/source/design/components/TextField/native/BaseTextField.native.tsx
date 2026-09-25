// Module ID: 6036
// Function ID: 6037
// Name: BaseTextField
// Dependencies: [19, 21, 1364, 6034, 4534, 6037, 6351, 4533, 2]

// Module 6036 (BaseTextField)
import mergeProps from "mergeProps" /* 4533 */;
import useFocus from "useFocus" /* 4534 */;
import InputFieldContainer from "InputFieldContainer" /* 6034 */;
import NativeTextInput from "NativeTextInput" /* 6037 */;
import propsForNativeTextInput from "propsForNativeTextInput" /* 6351 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = noop.forwardRef((size, ref2) => {
  const inputStyles = InputFieldContainer.useInputStyles({ size: size.size, round: size.round, hasLeadingIcon: null != size.leadingIcon });
  const obj2 = { size: size.size, round: size.round, hasLeadingIcon: null != size.leadingIcon };
  const focus = useFocus.useFocus();
  ({ focusProps, isFocused } = focus);
  const ref = noop.useRef(null);
  let tmp6 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let str = "off";
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    const obj5 = { autoComplete: str, secureTextEntry: null, keyboardType: null };
    tmpResult = tmp(1364);
    const tmpResult6 = tmp(1364);
    obj5.secureTextEntry = tmp(1364).isAndroid() || secureTextEntry;
    const tmp7 = tmp(1364).isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmpResult7.isAndroid()) {
      str2 = keyboardType;
    }
    obj5.keyboardType = str2;
    tmp6 = obj5;
    tmpResult7 = tmp(1364);
  }
  const onChangeText = size.onChangeText;
  const items = [onChangeText];
  const callback = noop.useCallback((str) => {
    let replaced = str;
    if (null != str) {
      replaced = str.replace(/\r\n?|\n/g, " ");
    }
    if (replaced !== str) {
      const current = ref.current;
      if (current != null) {
        const obj = { text: replaced };
        current.setNativeProps(obj);
      }
    }
    if (onChangeText != null) {
      tmp4(replaced);
    }
  }, items);
  const obj6 = {};
  const merged = Object.assign(size);
  obj6.isFocused = isFocused;
  const items1 = [size.leading, , ];
  const obj7 = {};
  const merged1 = Object.assign(tmp6);
  const tmp11 = React3;
  const tmp9 = React4;
  const tmpResult8 = propsForNativeTextInput;
  const merged2 = Object.assign(tmpResult8.propsForNativeTextInput(mergeProps.mergeProps(size, focusProps)));
  let replaced = str3;
  if (null != size.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  obj7.value = replaced;
  let replaced1 = str5;
  if (null != size.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  obj7.defaultValue = replaced1;
  obj7.onChangeText = callback;
  const tmpResult9 = mergeProps;
  obj7.ref = mergeProps.mergeRefs(ref, ref2);
  const items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj7.style = items2;
  obj7.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = tmp11(NativeTextInput.NativeTextInput, obj7);
  items1[2] = size.trailing;
  obj6.children = items1;
  return tmp9(InputFieldContainer.InputFieldContainer, obj6);
});
