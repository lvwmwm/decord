// Module ID: 8185
// Function ID: 8186
// Name: FormInput
// Dependencies: [19, 1072, 21, 5014, 575, 1375, 5080, 5021, 7059, 7253, 7082, 1187, 2]
// Exports: default

// Module 8185 (FormInput)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import shared from "shared" /* 5021 */;
import native from "native" /* 5080 */;
import RedesignCompat from "RedesignCompat" /* 7059 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const KeyboardThemes = Constants.KeyboardThemes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 }, placeholderText: obj2, inputText: obj3 };
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default function FormInput(helpText) {
  let autoCapitalize;
  let autoCorrect;
  let clearButtonVisibility;
  let error;
  let inputTextStyle;
  let items;
  let keyboardAppearance;
  let keyboardType;
  let onChange;
  let placeholder;
  let showBorder;
  let str2;
  let str3;
  let str4;
  let str5;
  let style;
  let title;
  let tmp16Result2;
  let tmp21;
  let value;
  ({ onChange, keyboardAppearance, value, title } = helpText);
  ({ keyboardType, style, inputTextStyle } = helpText);
  if (title === undefined) {
    title = "";
  }
  let str = helpText.helpText;
  if (str === undefined) {
    str = "";
  }
  ({ error, placeholder } = helpText);
  if (placeholder === undefined) {
    placeholder = "";
  }
  let flag = helpText.secureTextEntry;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = helpText.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = helpText.multiline;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = helpText.autoFocus;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let num = helpText.numberOfLines;
  if (num === undefined) {
    num = 1;
  }
  ({ clearButtonVisibility, autoCapitalize, autoCorrect, showBorder } = helpText);
  if (showBorder === undefined) {
    const obj = PlatformUtils;
    showBorder = obj.isAndroid();
  }
  let flag5 = helpText.showCharactersRemaining;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = helpText.enableAndroidSanitizedInputWorkaround;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = helpText.allowRedesignTextInput;
  if (flag7 === undefined) {
    flag7 = true;
  }
  const ref = helpText.ref;
  const merged = Object.assign(helpText, Object.assign({ onChange: 0, keyboardAppearance: 0, keyboardType: 0, style: 0, inputTextStyle: 0, value: 0, title: 0, helpText: 0, error: 0, placeholder: 0, secureTextEntry: 0, disabled: 0, multiline: 0, autoFocus: 0, numberOfLines: 0, clearButtonVisibility: 0, autoCapitalize: 0, autoCorrect: 0, showBorder: 0, showCharactersRemaining: 0, enableAndroidSanitizedInputWorkaround: 0, allowRedesignTextInput: 0, ref: 0 }));
  let closure_0;
  let ref1;
  let ref2;
  const tmp4 = closure_5();
  native;
  if (null == keyboardAppearance) {
    const tmp5Result = shared;
    keyboardAppearance = tmp5Result.isThemeDark(tmp8) ? tmp9.DARK : tmp9.LIGHT;
  }
  const tmp10 = react.useContext(RedesignCompat.RedesignCompatContext) && flag7;
  closure_0 = tmp10;
  let tmp11 = !flag6;
  if (flag6) {
    const tmp5Result3 = PlatformUtils;
    tmp11 = !tmp5Result3.isAndroid();
  }
  let tmp12 = !tmp11;
  if (tmp11) {
    tmp12 = flag;
  }
  if (!flag6) {
    str2 = keyboardType;
  } else {
    str2 = "visible-password";
    PlatformUtils;
  }
  ref1 = obj3.useRef(null);
  ref2 = obj3.useRef(null);
  const imperativeHandle = obj3.useImperativeHandle(ref, () => ({
    isFocused() {
      const current = (closure_1_0 ? ref1 : ref2).current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      return true === isFocusedResult;
    },
    focus() {
      const current = (closure_1_0 ? ref1 : ref2).current;
      if (current != null) {
        current.focus();
      }
    },
    blur() {
      const current = (closure_1_0 ? ref1 : ref2).current;
      if (current != null) {
        current.blur();
      }
    },
    setText(arg0) {
      const current = (closure_1_0 ? ref1 : ref2).current;
      if (current != null) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = (closure_1_0 ? ref1 : ref2).current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      return str;
    },
    measure(arg0) {
      const current = (closure_1_0 ? ref1 : ref2).current;
      if (current != null) {
        current.measure(arg0);
      }
    },
    measureInWindow(arg0) {
      const current = (closure_1_0 ? ref1 : ref2).current;
      if (current != null) {
        current.measureInWindow(arg0);
      }
    },
    measureLayout(arg0, arg1, arg2) {
      const current = (closure_1_0 ? ref1 : ref2).current;
      if (current != null) {
        current.measureLayout(arg0, arg1, arg2);
      }
    }
  }));
  if (tmp10) {
    let tmp16Result;
    if (flag3) {
      const obj2 = { ref: ref1, returnKeyType: "default", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: tmp4.placeholderText.color, placeholder, secureTextEntry: tmp12, disabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, maxLength: null, onEndEditing: null, value, errorMessage: error };
      ({ maxLength: obj8.maxLength, onEndEditing: obj8.onEndEditing } = merged);
      const TextArea = tmp5(7253).TextArea;
      tmp16Result = tmp16(TextArea, obj2);
    } else {
      const obj4 = { ref: ref1, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: tmp4.placeholderText.color, placeholder, secureTextEntry: tmp12, disabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: merged.onEndEditing, value: tmp21, errorMessage: error };
      const TextInput = tmp5(7082).TextInput;
      tmp16Result = tmp16(TextInput, obj4);
      tmp21 = value;
    }
    tmp16Result2 = tmp16Result;
  } else {
    const obj5 = { ref: ref2, inputTextColor: tmp4.inputText.color, multiline: flag3, returnKeyType: str3, onChangeText: onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: tmp4.placeholderText.color, title, helpText: str, error: str4, placeholder, secureTextEntry: tmp12, disabled: flag2, autoFocus: flag4, numberOfLines: num, autoCapitalize, autoCorrect, showBorder, showCharactersRemaining: flag5, style: items, inputTextStyle, value: str5, clearButtonVisibility };
    const InputView = tmp5(1187).InputView;
    if (null != merged.returnKeyType) {
      str3 = merged.returnKeyType;
    } else {
      str3 = "done";
      if (flag3) {
        str3 = "default";
      }
    }
    str4 = error;
    if (error == null) {
      str4 = "";
    }
    items = [tmp4.inputViewContainer, style];
    str5 = value;
    if (value == null) {
      str5 = "";
    }
    if (flag3) {
      clearButtonVisibility = tmp5(1187).ClearButtonVisibility.NEVER;
    }
    const merged1 = Object.assign(merged);
    tmp16Result2 = tmp16(InputView, obj5);
  }
  return tmp16Result2;
};
