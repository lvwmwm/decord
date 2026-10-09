// Module ID: 6301
// Function ID: 6302
// Name: BaseTextField
// Dependencies: [109, 19, 21, 1382, 558, 576, 6299, 4785, 6302, 6616, 4784, 2]

// Module 6301 (BaseTextField)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import mergeProps from "mergeProps" /* 4784 */;
import useFocus from "useFocus" /* 4785 */;
import InputFieldContainer2 from "InputFieldContainer" /* 6299 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 6616 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_2 = ["ref", "onChangeText"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseTextField(arg0) {
  let autoComplete;
  let items;
  let keyboardType;
  let onChangeText;
  let ref;
  let secureTextEntry;
  let str2;
  let tmp14;
  let tmp9;
  let tmpResult6;
  let obj = react2;
  const cResult = obj.c(23);
  ({ ref, onChangeText } = arg0);
  const iter = _objectWithoutProperties(arg0, closure_2);
  const obj2 = InputFieldContainer2;
  const obj3 = { size: iter.size, round: iter.round, hasLeadingIcon: null != iter.leadingIcon };
  const inputStyles = obj2.useInputStyles(obj3);
  const obj4 = useFocus;
  const focus = obj4.useFocus();
  const isFocused = focus.isFocused;
  const focusProps = focus.focusProps;
  const ref1 = react.useRef(null);
  let tmp7 = null;
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
    tmp7 = obj5;
  }
  if (cResult[0] !== onChangeText) {
    const fn = function p(str) {
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
    };
    cResult[0] = onChangeText;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  const InputFieldContainer = tmp(6299).InputFieldContainer;
  const leading = iter.leading;
  const NativeTextInput = tmp(6302).NativeTextInput;
  const propsForNativeTextInput = _objectWithoutProperties2.propsForNativeTextInput;
  _objectWithoutProperties2;
  const tmpResult9 = mergeProps;
  const result = propsForNativeTextInput(tmpResult9.mergeProps(iter, focusProps));
  let replaced = str3;
  if (null != iter.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  let replaced1 = str5;
  if (null != iter.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  if (cResult[2] !== ref) {
    const tmpResult10 = mergeProps;
    const mergeRefsResult = tmpResult10.mergeRefs(ref1, ref);
    cResult[2] = ref;
    cResult[3] = mergeRefsResult;
    tmp14 = mergeRefsResult;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === iter.inputStyle) {
    if (cResult[5] === inputStyles.padding) {
      let tmp16;
      if (cResult[6] === inputStyles.text) {
        tmp16 = cResult[7];
      }
      if (cResult[8] === NativeTextInput) {
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === inputStyles.placeholderText.color) {
              if (cResult[12] === result) {
                if (cResult[13] === replaced) {
                  if (cResult[14] === replaced1) {
                    if (cResult[15] === tmp14) {
                      let tmp17;
                      if (cResult[16] === tmp16) {
                        tmp17 = cResult[17];
                      }
                      if (cResult[18] === InputFieldContainer) {
                        if (cResult[19] === isFocused) {
                          if (cResult[20] === iter) {
                            let tmp26;
                            if (cResult[21] === tmp17) {
                              tmp26 = cResult[22];
                            }
                            return tmp26;
                          }
                        }
                      }
                      const obj6 = { isFocused, children: items };
                      const merged = Object.assign(iter);
                      items = [leading, tmp17, iter.trailing];
                      const tmp31 = metroRequire(InputFieldContainer, obj6);
                      cResult[18] = InputFieldContainer;
                      cResult[19] = isFocused;
                      cResult[20] = iter;
                      cResult[21] = tmp17;
                      cResult[22] = tmp31;
                      tmp26 = tmp31;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj7 = { value: replaced, defaultValue: replaced1, onChangeText: tmp9, ref: tmp14, style: tmp16, placeholderTextColor: inputStyles.placeholderText.color };
      const merged1 = Object.assign(tmp7);
      const merged2 = Object.assign(result);
      const tmp25 = hasOwnProperty(NativeTextInput, obj7);
      cResult[8] = NativeTextInput;
      cResult[9] = tmp9;
      cResult[10] = tmp7;
      cResult[11] = inputStyles.placeholderText.color;
      cResult[12] = result;
      cResult[13] = replaced;
      cResult[14] = replaced1;
      cResult[15] = tmp14;
      cResult[16] = tmp16;
      cResult[17] = tmp25;
      tmp17 = tmp25;
    }
  }
  const items1 = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items1[2] = iter.inputStyle;
  cResult[4] = iter.inputStyle;
  cResult[5] = inputStyles.padding;
  cResult[6] = inputStyles.text;
  cResult[7] = items1;
  tmp16 = items1;
}) : (function BaseTextField(onChangeText) {
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
  const InputFieldContainer = tmp(6299).InputFieldContainer;
  const merged = Object.assign(iter);
  items1 = [iter.leading, , ];
  const obj7 = { value: replaced, defaultValue: replaced1, onChangeText: callback, ref: tmpResult10.mergeRefs(ref1, ref), style: items2, placeholderTextColor: inputStyles.placeholderText.color };
  const NativeTextInput = tmp(6302).NativeTextInput;
  const merged1 = Object.assign(tmp6);
  const propsForNativeTextInput = _objectWithoutProperties2.propsForNativeTextInput;
  _objectWithoutProperties2;
  const tmpResult9 = mergeProps;
  const merged2 = Object.assign(propsForNativeTextInput(tmpResult9.mergeProps(iter, focusProps)));
  replaced = str3;
  const tmp11 = hasOwnProperty;
  const tmp9 = metroRequire;
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
});
let result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = tmp3;
