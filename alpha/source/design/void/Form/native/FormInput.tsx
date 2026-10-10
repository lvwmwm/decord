// Module ID: 8585
// Function ID: 8586
// Name: FormInput
// Dependencies: [109, 19, 1085, 21, 5092, 587, 558, 576, 1382, 4827, 4969, 6263, 6773, 6285, 1200, 2]

// Module 8585 (FormInput)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import native from "native" /* 4827 */;
import shared from "shared" /* 4969 */;
import RedesignCompat from "RedesignCompat" /* 6263 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6285 */;
import TextArea2 from "TextArea" /* 6773 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let closure_2 = ["onChange", "keyboardAppearance", "keyboardType", "style", "inputTextStyle", "value", "title", "helpText", "error", "placeholder", "secureTextEntry", "disabled", "multiline", "autoFocus", "numberOfLines", "clearButtonVisibility", "autoCapitalize", "autoCorrect", "showBorder", "showCharactersRemaining", "enableAndroidSanitizedInputWorkaround", "allowRedesignTextInput", "ref"];
const KeyboardThemes = Constants.KeyboardThemes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 }, placeholderText: obj2, inputText: obj3 };
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_7 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormInput(arg0) {
  let NEVER;
  let allowRedesignTextInput;
  let autoCapitalize;
  let autoCorrect;
  let autoFocus;
  let clearButtonVisibility;
  let disabled;
  let enableAndroidSanitizedInputWorkaround;
  let error;
  let helpText;
  let inputTextStyle;
  let keyboardAppearance;
  let keyboardType;
  let multiline;
  let numberOfLines;
  let onChange;
  let placeholder;
  let ref;
  let secureTextEntry;
  let showBorder;
  let showCharactersRemaining;
  let str4;
  let style;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp34;
  let tmp4;
  let tmp48;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let value;
  const tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(86);
  if (cResult[0] !== arg0) {
    ({ onChange, keyboardAppearance, keyboardType, style, inputTextStyle, value, title, helpText, error, placeholder, secureTextEntry, disabled, multiline, autoFocus, numberOfLines, clearButtonVisibility, autoCapitalize, autoCorrect, showBorder, showCharactersRemaining, enableAndroidSanitizedInputWorkaround, allowRedesignTextInput, ref } = arg0);
    const tmp29 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = autoCapitalize;
    cResult[2] = autoCorrect;
    cResult[3] = clearButtonVisibility;
    cResult[4] = error;
    cResult[5] = inputTextStyle;
    cResult[6] = keyboardAppearance;
    cResult[7] = keyboardType;
    cResult[8] = onChange;
    cResult[9] = tmp29;
    cResult[10] = ref;
    cResult[11] = style;
    cResult[12] = title;
    cResult[13] = showCharactersRemaining;
    cResult[14] = enableAndroidSanitizedInputWorkaround;
    cResult[15] = allowRedesignTextInput;
    cResult[16] = helpText;
    cResult[17] = placeholder;
    cResult[18] = secureTextEntry;
    cResult[19] = disabled;
    cResult[20] = multiline;
    cResult[21] = autoFocus;
    cResult[22] = numberOfLines;
    cResult[23] = showBorder;
    cResult[24] = value;
    tmp26 = value;
    tmp25 = showBorder;
    tmp24 = numberOfLines;
    tmp23 = autoFocus;
    tmp22 = multiline;
    tmp21 = disabled;
    tmp20 = secureTextEntry;
    tmp19 = placeholder;
    tmp18 = helpText;
    tmp17 = allowRedesignTextInput;
    tmp16 = enableAndroidSanitizedInputWorkaround;
    tmp15 = showCharactersRemaining;
    tmp14 = title;
    tmp13 = style;
    tmp12 = ref;
    tmp11 = tmp29;
    tmp10 = onChange;
    tmp9 = keyboardType;
    tmp8 = keyboardAppearance;
    tmp7 = inputTextStyle;
    tmp6 = error;
    NEVER = clearButtonVisibility;
    tmp5 = autoCorrect;
    tmp4 = autoCapitalize;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    NEVER = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
    tmp10 = cResult[8];
    tmp11 = cResult[9];
    tmp12 = cResult[10];
    tmp13 = cResult[11];
    tmp14 = cResult[12];
    tmp15 = cResult[13];
    tmp16 = cResult[14];
    tmp17 = cResult[15];
    tmp18 = cResult[16];
    tmp19 = cResult[17];
    tmp20 = cResult[18];
    tmp21 = cResult[19];
    tmp22 = cResult[20];
    tmp23 = cResult[21];
    tmp24 = cResult[22];
    tmp25 = cResult[23];
    tmp26 = cResult[24];
  }
  let str = "";
  if (undefined !== tmp14) {
    str = tmp14;
  }
  let str2 = "";
  if (undefined !== tmp18) {
    str2 = tmp18;
  }
  let str3 = "";
  if (undefined !== tmp19) {
    str3 = tmp19;
  }
  let tmp31 = undefined !== tmp21 && tmp21;
  let num26 = 1;
  const tmp30 = undefined !== tmp20 && tmp20;
  if (undefined !== tmp24) {
    num26 = tmp24;
  }
  if (cResult[25] !== tmp25) {
    let isAndroidResult = tmp25;
    if (undefined === tmp25) {
      const tmpResult = PlatformUtils;
      isAndroidResult = tmpResult.isAndroid();
    }
    cResult[25] = tmp25;
    cResult[26] = isAndroidResult;
    tmp34 = isAndroidResult;
  } else {
    tmp34 = cResult[26];
  }
  const tmp38 = undefined === tmp17 || tmp17;
  const tmp39 = closure_7();
  native;
  if (null == tmp8) {
    const tmpResult6 = shared;
    tmp8 = tmpResult6.isThemeDark(tmp41) ? tmp42.DARK : tmp42.LIGHT;
  }
  let obj4 = react;
  const tmp43 = react.useContext(RedesignCompat.RedesignCompatContext) && tmp38;
  let closure_0 = tmp43;
  let tmp44 = !tmp37;
  if (undefined !== tmp16 && tmp16) {
    const tmpResult7 = PlatformUtils;
    tmp44 = !tmpResult7.isAndroid();
  }
  let tmp45 = !tmp44;
  if (tmp44) {
    tmp45 = tmp30;
  }
  if (!(undefined !== tmp16 && tmp16)) {
    str4 = tmp9;
  } else {
    str4 = "visible-password";
    PlatformUtils;
  }
  let ref1 = obj4.useRef(null);
  let ref2 = obj4.useRef(null);
  if (cResult[27] !== tmp43) {
    function ee() {
      return {
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
      };
    }
    cResult[27] = tmp43;
    cResult[28] = ee;
    tmp48 = ee;
  } else {
    tmp48 = cResult[28];
  }
  const imperativeHandle = obj4.useImperativeHandle(tmp12, tmp48);
  if (tmp43) {
    if (undefined !== tmp22 && tmp22) {
      if (cResult[29] === str4) {
        if (cResult[30] === tmp45) {
          if (cResult[31] === tmp4) {
            if (cResult[32] === tmp5) {
              if (cResult[33] === (undefined !== tmp23 && tmp23)) {
                if (cResult[34] === tmp31) {
                  if (cResult[35] === tmp6) {
                    if (cResult[36] === tmp8) {
                      if (cResult[37] === tmp10) {
                        if (cResult[38] === str3) {
                          if (cResult[39] === tmp11.maxLength) {
                            if (cResult[40] === tmp11.onEndEditing) {
                              if (cResult[41] === tmp39.placeholderText.color) {
                                let tmp61;
                                if (cResult[42] === tmp26) {
                                  tmp61 = cResult[43];
                                }
                                return tmp61;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      ({ maxLength: obj9.maxLength, onEndEditing: obj9.onEndEditing } = tmp11);
      const tmp63 = jsx(TextArea2.TextArea, { ref: ref1, returnKeyType: "default", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp39.placeholderText.color, placeholder: str3, secureTextEntry: tmp45, disabled: tmp31, autoFocus: undefined !== tmp23 && tmp23, autoCapitalize: tmp4, autoCorrect: tmp5, maxLength: null, onEndEditing: null, value: tmp26, errorMessage: tmp6 });
      cResult[29] = str4;
      cResult[30] = tmp45;
      cResult[31] = tmp4;
      cResult[32] = tmp5;
      cResult[33] = undefined !== tmp23 && tmp23;
      cResult[34] = tmp31;
      cResult[35] = tmp6;
      cResult[36] = tmp8;
      cResult[37] = tmp10;
      cResult[38] = str3;
      cResult[39] = tmp11.maxLength;
      cResult[40] = tmp11.onEndEditing;
      cResult[41] = tmp39.placeholderText.color;
      cResult[42] = tmp26;
      cResult[43] = tmp63;
      tmp61 = tmp63;
    } else {
      if (cResult[44] === str4) {
        if (cResult[45] === tmp45) {
          if (cResult[46] === tmp4) {
            if (cResult[47] === tmp5) {
              if (cResult[48] === (undefined !== tmp23 && tmp23)) {
                if (cResult[49] === tmp31) {
                  if (cResult[50] === tmp6) {
                    if (cResult[51] === tmp8) {
                      if (cResult[52] === tmp10) {
                        if (cResult[53] === str3) {
                          if (cResult[54] === tmp11.onEndEditing) {
                            if (cResult[55] === tmp39.placeholderText.color) {
                              let tmp58;
                              if (cResult[56] === tmp26) {
                                tmp58 = cResult[57];
                              }
                              return tmp58;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp60 = jsx(TextInput_TextInput.TextInput, { ref: ref1, returnKeyType: "done", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp39.placeholderText.color, placeholder: str3, secureTextEntry: tmp45, disabled: tmp31, autoFocus: undefined !== tmp23 && tmp23, autoCapitalize: tmp4, autoCorrect: tmp5, onEndEditing: tmp11.onEndEditing, value: tmp26, errorMessage: tmp6 });
      cResult[44] = str4;
      cResult[45] = tmp45;
      cResult[46] = tmp4;
      cResult[47] = tmp5;
      cResult[48] = undefined !== tmp23 && tmp23;
      cResult[49] = tmp31;
      cResult[50] = tmp6;
      cResult[51] = tmp8;
      cResult[52] = tmp10;
      cResult[53] = str3;
      cResult[54] = tmp11.onEndEditing;
      cResult[55] = tmp39.placeholderText.color;
      cResult[56] = tmp26;
      cResult[57] = tmp60;
      tmp58 = tmp60;
    }
  } else {
    let str5;
    if (null != tmp11.returnKeyType) {
      str5 = tmp11.returnKeyType;
    } else {
      str5 = "done";
      if (undefined !== tmp22 && tmp22) {
        str5 = "default";
      }
    }
    let str6 = tmp6;
    if (tmp6 == null) {
      str6 = "";
    }
    if (cResult[58] === tmp13) {
      let tmp50;
      if (cResult[59] === tmp39.inputViewContainer) {
        tmp50 = cResult[60];
      }
      let str7 = tmp26;
      if (tmp26 == null) {
        str7 = "";
      }
      if (undefined !== tmp22 && tmp22) {
        NEVER = tmp(1200).ClearButtonVisibility.NEVER;
      }
      if (cResult[61] === str4) {
        if (cResult[62] === tmp45) {
          if (cResult[63] === tmp4) {
            if (cResult[64] === tmp5) {
              if (cResult[65] === (undefined !== tmp23 && tmp23)) {
                if (cResult[66] === tmp31) {
                  if (cResult[67] === str2) {
                    if (cResult[68] === tmp7) {
                      if (cResult[69] === tmp8) {
                        if (cResult[70] === (undefined !== tmp22 && tmp22)) {
                          if (cResult[71] === num26) {
                            if (cResult[72] === tmp10) {
                              if (cResult[73] === str3) {
                                if (cResult[74] === tmp11) {
                                  if (cResult[75] === tmp34) {
                                    if (cResult[76] === (undefined !== tmp15 && tmp15)) {
                                      if (cResult[77] === tmp39.inputText.color) {
                                        if (cResult[78] === tmp39.placeholderText.color) {
                                          if (cResult[79] === str5) {
                                            if (cResult[80] === str6) {
                                              if (cResult[81] === tmp50) {
                                                if (cResult[82] === str7) {
                                                  if (cResult[83] === NEVER) {
                                                    let tmp51;
                                                    if (cResult[84] === str) {
                                                      tmp51 = cResult[85];
                                                    }
                                                    return tmp51;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const InputView = tmp(1200).InputView;
      const merged = Object.assign(tmp11);
      const tmp56 = <InputView ref={ref2} inputTextColor={tmp39.inputText.color} multiline={undefined !== tmp22 && tmp22} returnKeyType={str5} onChangeText={tmp10} keyboardAppearance={tmp8} keyboardType={str4} placeholderTextColor={tmp39.placeholderText.color} title={str} helpText={str2} error={str6} placeholder={str3} secureTextEntry={tmp45} disabled={tmp31} autoFocus={undefined !== tmp23 && tmp23} numberOfLines={num26} autoCapitalize={tmp4} autoCorrect={tmp5} showBorder={tmp34} showCharactersRemaining={undefined !== tmp15 && tmp15} style={tmp50} inputTextStyle={tmp7} value={str7} clearButtonVisibility={NEVER} />;
      cResult[61] = str4;
      cResult[62] = tmp45;
      cResult[63] = tmp4;
      cResult[64] = tmp5;
      cResult[65] = undefined !== tmp23 && tmp23;
      cResult[66] = tmp31;
      cResult[67] = str2;
      cResult[68] = tmp7;
      cResult[69] = tmp8;
      cResult[70] = undefined !== tmp22 && tmp22;
      cResult[71] = num26;
      cResult[72] = tmp10;
      cResult[73] = str3;
      cResult[74] = tmp11;
      cResult[75] = tmp34;
      cResult[76] = undefined !== tmp15 && tmp15;
      cResult[77] = tmp39.inputText.color;
      cResult[78] = tmp39.placeholderText.color;
      cResult[79] = str5;
      cResult[80] = str6;
      cResult[81] = tmp50;
      cResult[82] = str7;
      cResult[83] = NEVER;
      cResult[84] = str;
      cResult[85] = tmp56;
      tmp51 = tmp56;
    }
    const items = [tmp39.inputViewContainer, tmp13];
    cResult[58] = tmp13;
    cResult[59] = tmp39.inputViewContainer;
    cResult[60] = items;
    tmp50 = items;
  }
}) : (function FormInput(helpText) {
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
  const tmp4 = closure_7();
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
      const TextArea = tmp5(6773).TextArea;
      tmp16Result = tmp16(TextArea, obj2);
    } else {
      const obj4 = { ref: ref1, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: tmp4.placeholderText.color, placeholder, secureTextEntry: tmp12, disabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: merged.onEndEditing, value: tmp21, errorMessage: error };
      const TextInput = tmp5(6285).TextInput;
      tmp16Result = tmp16(TextInput, obj4);
      tmp21 = value;
    }
    tmp16Result2 = tmp16Result;
  } else {
    const obj5 = { ref: ref2, inputTextColor: tmp4.inputText.color, multiline: flag3, returnKeyType: str3, onChangeText: onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: tmp4.placeholderText.color, title, helpText: str, error: str4, placeholder, secureTextEntry: tmp12, disabled: flag2, autoFocus: flag4, numberOfLines: num, autoCapitalize, autoCorrect, showBorder, showCharactersRemaining: flag5, style: items, inputTextStyle, value: str5, clearButtonVisibility };
    const InputView = tmp5(1200).InputView;
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
      clearButtonVisibility = tmp5(1200).ClearButtonVisibility.NEVER;
    }
    const merged1 = Object.assign(merged);
    tmp16Result2 = tmp16(InputView, obj5);
  }
  return tmp16Result2;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default tmp3;
