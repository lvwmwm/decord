// Module ID: 7498
// Function ID: 60121
// Dependencies: []

// Module 7498
const importAllResult = importAll(dependencyMap[0]);
const KeyboardThemes = arg1(dependencyMap[1]).KeyboardThemes;
const jsx = arg1(dependencyMap[2]).jsx;
let obj1 = arg1(dependencyMap[3]);
let obj = { inputViewContainer: { paddingHorizontal: null, accessible: null } };
obj = { color: importDefault(dependencyMap[4]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.placeholderText = obj;
obj1 = { color: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT };
obj.inputText = obj1;
let closure_5 = obj1.createStyles(obj);
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
    let obj = arg1(dependencyMap[5]);
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
  obj = {};
  let tmp3 = null;
  Object.setPrototypeOf(null);
  let merged = Object.assign(helpText, obj);
  let arg1;
  let dependencyMap;
  let importAllResult;
  let color = callback();
  arg1(dependencyMap[6]);
  if (null != keyboardAppearance) {
    const tmp15 = importAllResult.useContext(arg1(dependencyMap[8]).RedesignCompatContext) && flag7;
    arg1 = tmp15;
    let tmp16 = !flag6;
    if (!tmp16) {
      tmp16 = !arg1(dependencyMap[5]).isAndroid();
      const obj4 = arg1(dependencyMap[5]);
    }
    let tmp19 = !tmp16;
    if (tmp16) {
      tmp19 = flag;
    }
    if (!flag6) {
      let str2 = keyboardType;
    } else {
      str2 = "visible-password";
      const obj5 = arg1(dependencyMap[5]);
    }
    let str3 = importAllResult.useRef(tmp3);
    dependencyMap = str3;
    const ref = importAllResult.useRef(tmp3);
    importAllResult = ref;
    const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
      isFocused() {
        const current = closure_0 ? closure_1 : closure_2.current;
        let isFocusedResult;
        if (null != current) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      focus() {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (null != current) {
          current.focus();
        }
      },
      blur() {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (null != current) {
          current.blur();
        }
      },
      setText(arg0) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (null != current) {
          current.setText(arg0);
        }
      },
      getText() {
        const current = closure_0 ? closure_1 : closure_2.current;
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
        const current = closure_0 ? closure_1 : closure_2.current;
        if (null != current) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (null != current) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = closure_0 ? closure_1 : closure_2.current;
        if (null != current) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    }));
    let TextArea = arg1;
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
        clearButtonVisibility = arg1(dependencyMap[11]).ClearButtonVisibility.NEVER;
      }
      obj2.clearButtonVisibility = clearButtonVisibility;
      const merged1 = Object.assign(merged);
      return tmp26(TextArea(tmp27[11]).InputView, obj2);
    }
  } else {
    obj2 = arg1(dependencyMap[7]);
    obj2.isThemeDark(tmp7) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default forwardRefResult;
