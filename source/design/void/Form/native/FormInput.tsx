// Module ID: 7644
// Function ID: 60812
// Dependencies: [31, 653, 33, 4130, 689, 477, 3842, 3976, 5164, 7645, 7574, 1273, 2]

// Module 7644
import importAllResult from "result";
import { KeyboardThemes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = { inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.placeholderText = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.inputText = _createForOfIteratorHelperLoose;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((helpText) => {
  let autoCapitalize;
  let autoCorrect;
  let clearButtonVisibility;
  let error;
  let inputTextStyle;
  let keyboardAppearance;
  let keyboardType;
  let onChange;
  let placeholder;
  let showBorder;
  let style;
  let title;
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
    let obj = _require(str3[5]);
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
  obj = { onChange: 0, keyboardAppearance: 0, keyboardType: 0, style: 0, inputTextStyle: 0, value: 0, title: 0, helpText: 0, error: 0, placeholder: 0, secureTextEntry: 0, disabled: 0, multiline: 0, autoFocus: 0, numberOfLines: 0, clearButtonVisibility: 0, autoCapitalize: 0, autoCorrect: 0, showBorder: 0, showCharactersRemaining: 0, enableAndroidSanitizedInputWorkaround: 0, allowRedesignTextInput: 0 };
  let tmp3 = null;
  Object.setPrototypeOf(null);
  let merged = Object.assign(helpText, obj);
  _require = undefined;
  str3 = undefined;
  let ref;
  let color = callback();
  _require(str3[6]);
  if (null != keyboardAppearance) {
    const tmp15 = ref.useContext(_require(str3[8]).RedesignCompatContext) && flag7;
    _require = tmp15;
    let tmp16 = !flag6;
    if (!tmp16) {
      tmp16 = !_require(str3[5]).isAndroid();
      const obj4 = _require(str3[5]);
    }
    let tmp19 = !tmp16;
    if (tmp16) {
      tmp19 = flag;
    }
    if (!flag6) {
      let str2 = keyboardType;
    } else {
      str2 = "visible-password";
      const obj5 = _require(str3[5]);
    }
    str3 = ref.useRef(tmp3);
    ref = ref.useRef(tmp3);
    const imperativeHandle = ref.useImperativeHandle(arg1, () => ({
      isFocused() {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        let isFocusedResult;
        if (null != current) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      focus() {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        if (null != current) {
          current.focus();
        }
      },
      blur() {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        if (null != current) {
          current.blur();
        }
      },
      setText(arg0) {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        if (null != current) {
          current.setText(arg0);
        }
      },
      getText() {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        let text;
        if (null != current) {
          text = current.getText();
        }
        let str = "";
        if (null != text) {
          str = text;
        }
        return str;
      },
      measure(arg0) {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        if (null != current) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        if (null != current) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = outer1_0 ? outer1_1 : outer1_2.current;
        if (null != current) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    }));
    let TextArea = _require;
    if (tmp15) {
      if (flag3) {
        TextArea = TextArea(tmp27[9]).TextArea;
        obj = { ref: str3 };
        str3 = "default";
        obj.returnKeyType = "default";
        obj.onChange = onChange;
        obj.keyboardAppearance = keyboardAppearance;
        obj.keyboardType = str2;
        color = color.placeholderText.color;
        obj.placeholderTextColor = color;
        obj.placeholder = placeholder;
        obj.secureTextEntry = tmp19;
        obj.isDisabled = flag2;
        obj.autoFocus = flag4;
        obj.autoCapitalize = autoCapitalize;
        obj.autoCorrect = autoCorrect;
        autoCorrect = merged.maxLength;
        obj.maxLength = autoCorrect;
        obj.onEndEditing = merged.onEndEditing;
        merged = tmp3 != value;
        tmp3 = undefined;
        if (merged) {
          tmp3 = value;
        }
        obj.value = tmp3;
        obj.errorMessage = error;
        let tmp26Result = tmp26(TextArea, obj);
      } else {
        const obj1 = { ref: str3, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: color.placeholderText.color, placeholder, secureTextEntry: tmp19, isDisabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: merged.onEndEditing };
        let tmp33;
        if (tmp3 != value) {
          tmp33 = value;
        }
        obj1.value = tmp33;
        obj1.errorMessage = error;
        tmp26Result = tmp26(TextArea(tmp27[10]).TextInput, obj1);
      }
    } else {
      let obj2 = { ref, inputTextColor: color.inputText.color, multiline: flag3 };
      if (tmp3 != merged.returnKeyType) {
        let str4 = merged.returnKeyType;
      } else {
        str4 = "done";
        if (flag3) {
          str4 = "default";
        }
      }
      obj2.returnKeyType = str4;
      obj2.onChangeText = onChange;
      obj2.keyboardAppearance = keyboardAppearance;
      obj2.keyboardType = str2;
      obj2.placeholderTextColor = color.placeholderText.color;
      obj2.title = title;
      obj2.helpText = str;
      let str5 = "";
      let str6 = "";
      if (tmp3 != error) {
        str6 = error;
      }
      obj2.error = str6;
      obj2.placeholder = placeholder;
      obj2.secureTextEntry = tmp19;
      obj2.disabled = flag2;
      obj2.autoFocus = flag4;
      obj2.numberOfLines = num;
      obj2.autoCapitalize = autoCapitalize;
      obj2.autoCorrect = autoCorrect;
      obj2.showBorder = showBorder;
      obj2.showCharactersRemaining = flag5;
      const items = [color.inputViewContainer, style];
      obj2.style = items;
      obj2.inputTextStyle = inputTextStyle;
      if (tmp3 != value) {
        str5 = value;
      }
      obj2.value = str5;
      if (flag3) {
        clearButtonVisibility = _require(str3[11]).ClearButtonVisibility.NEVER;
      }
      obj2.clearButtonVisibility = clearButtonVisibility;
      const merged1 = Object.assign(merged);
      return tmp26(TextArea(tmp27[11]).InputView, obj2);
    }
  } else {
    obj2 = _require(str3[7]);
    obj2.isThemeDark(tmp7) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
});
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default forwardRefResult;
