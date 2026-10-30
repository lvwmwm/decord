// Module ID: 7093
// Function ID: 7094
// Name: BaseTextField
// Dependencies: [19, 21, 1376, 7091, 5185, 7094, 7097, 5184, 2]
// Exports: BaseTextField

// Module 7093 (BaseTextField)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import mergeProps from "mergeProps" /* 5184 */;
import useFocus from "useFocus" /* 5185 */;
import InputFieldContainer2 from "InputFieldContainer" /* 7091 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 7097 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export function BaseTextField(onChangeText) {
  let autoComplete;
  let focusProps;
  let isFocused;
  let items1;
  let items2;
  let keyboardType;
  let replaced;
  let replaced1;
  let secureTextEntry;
  let str2;
  let tmpResult10;
  let tmpResult6;
  onChangeText = onChangeText.onChangeText;
  const ref = onChangeText.ref;
  const iter = Object.assign(onChangeText, Object.assign({ ref: 0, onChangeText: 0 }));
  let obj = InputFieldContainer2;
  const obj2 = { size: iter.size, round: iter.round, hasLeadingIcon: null != iter.leadingIcon };
  const inputStyles = obj.useInputStyles(obj2);
  const obj3 = useFocus;
  const focus = obj3.useFocus();
  ({ focusProps, isFocused } = focus);
  const ref1 = react.useRef(null);
  let tmp6 = null;
  const obj4 = react;
  if (iter.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = iter);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let str = "off";
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    const obj5 = { autoComplete: str, secureTextEntry: tmpResult6.isAndroid() || secureTextEntry, keyboardType: str2 };
    tmpResult6 = PlatformUtils;
    tmpResult6.isAndroid() || secureTextEntry;
    str2 = "visible-password";
    const tmpResult7 = PlatformUtils;
    if (!tmpResult7.isAndroid()) {
      str2 = keyboardType;
    }
    tmp6 = obj5;
  }
  const items = [onChangeText];
  const callback = obj4.useCallback((str) => {
    let replaced = str;
    if (null != str) {
      replaced = str.replace(/\r\n?|\n/g, " ");
    }
    if (replaced !== str) {
      const current = ref1.current;
      if (current != null) {
        const obj = { text: replaced };
        current.setNativeProps(obj);
      }
    }
    if (onChangeText != null) {
      tmp4(replaced);
    }
  }, items);
  const obj6 = { isFocused, children: items1 };
  const InputFieldContainer = tmp(7091).InputFieldContainer;
  const merged = Object.assign(iter);
  items1 = [iter.leading, , ];
  const obj7 = { value: replaced, defaultValue: replaced1, onChangeText: callback, ref: tmpResult10.mergeRefs(ref1, ref), style: items2, placeholderTextColor: inputStyles.placeholderText.color };
  const NativeTextInput = tmp(7094).NativeTextInput;
  const merged1 = Object.assign(tmp6);
  const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
  _objectWithoutProperties;
  const tmpResult9 = mergeProps;
  const merged2 = Object.assign(propsForNativeTextInput(tmpResult9.mergeProps(iter, focusProps)));
  replaced = str3;
  const tmp11 = _false;
  const tmp9 = React3;
  if (null != iter.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  replaced1 = str5;
  if (null != iter.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = iter.inputStyle;
  tmpResult10 = mergeProps;
  items1[1] = tmp11(NativeTextInput, obj7);
  items1[2] = iter.trailing;
  return tmp9(InputFieldContainer, obj6);
}
