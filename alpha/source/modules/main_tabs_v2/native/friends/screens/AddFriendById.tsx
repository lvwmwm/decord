// Module ID: 15594
// Function ID: 15595
// Name: AddFriendById
// Dependencies: [32, 19, 17, 1084, 21, 5005, 587, 1125, 558, 576, 5271, 7075, 7479, 7474, 5700, 1264, 5014, 7240, 5281, 2]

// Module 15594 (AddFriendById)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5014 */;
import ToastUtils from "ToastUtils" /* 5700 */;
import TextField2 from "TextField" /* 7075 */;
import FriendsUtils from "FriendsUtils" /* 7479 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
let unpackModuleId;
const Text_Text = tmp(5271);
let react = react_mod;
({ View: hasOwnProperty, Keyboard: metroRequire } = react_native);
({ PLACEHOLDER_TAG: metroImportDefault, AnalyticEvents: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textInputContainer: { alignSelf: "stretch" }, placeholderText: obj3, inputAccessoryText: obj4, redesignInputAccessoryText: obj5, inputHeaderText: { marginTop: 0 }, redesignGrow: obj6, errorStateText: obj7, friendMessageContainer: obj8, messageLabel: obj9, messageFooterText: obj10 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
obj4 = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj6 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj7 = { color: nativeDefault.unsafe_rawColors.RED_400, marginVertical: 4 };
obj8 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_16 };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj10 = { marginTop: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
const constants = { SUCCESS: 0, [0]: "SUCCESS", ERROR: 1, [1]: "ERROR", LOADING: 2, [2]: "LOADING", NONE: 3, [3]: "NONE" };
const constants2 = { DISCORD_TAG: "DISCORD_TAG", MESSAGE: "MESSAGE" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ErrorMessage(errorMessage) {
  const obj = react2;
  const cResult = obj.c(6);
  errorMessage = errorMessage.errorMessage;
  const tmp4 = closure_12();
  if (cResult[0] === tmp4.errorStateText) {
    let tmp5;
    if (cResult[1] === tmp4.inputAccessoryText) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === errorMessage) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj2 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp5, children: errorMessage };
    const tmp8 = React4(Text_Text.Text, obj2);
    cResult[3] = errorMessage;
    cResult[4] = tmp5;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [, ];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = tmp4);
  cResult[0] = tmp4.errorStateText;
  cResult[1] = tmp4.inputAccessoryText;
  cResult[2] = items;
  tmp5 = items;
}) : (function ErrorMessage(errorMessage) {
  let items;
  errorMessage = errorMessage.errorMessage;
  const obj = { variant: "text-xs/medium", color: "text-feedback-critical", style: items, children: errorMessage };
  items = [, ];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = closure_12());
  closure_12();
  return React4(Text_Text.Text, obj);
});
function AddFriendByIdInput(arg0) {
  let a11yMessage;
  let autoFocus;
  let headerText;
  let headerTextStyle;
  let intl2;
  let intl3;
  let items;
  let items1;
  let onChangeText;
  let onFocus;
  let onKeyPress;
  let onSelectionChange;
  let onSubmitEditing;
  let ref;
  let str2;
  let textState;
  let validationState;
  ({ validationState, headerText } = arg0);
  ({ textState, onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, onFocus, autoFocus } = arg0);
  if (headerText === undefined) {
    const intl = intl4.intl;
    const str = intl.string(intl4.t.YegTF2);
    headerText = str.toUpperCase();
  }
  ({ headerTextStyle, ref } = arg0);
  const tmp3 = closure_12();
  let message;
  const tmp4 = constants;
  if (validationState.status === constants.ERROR) {
    if (validationState.field === constants2.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  const obj2 = { style: items, variant: "text-sm/semibold", color: "text-muted", children: headerText };
  items = [, , ];
  const obj = { style: tmp3.textInputContainer, children: items1 };
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle;
  items1 = [React4(Text_Text.Text, obj2), , ];
  const obj3 = { ref, value: textState.validatedText, accessibilityLabel: intl2.string(intl4.t.qRaqel), accessibilityHint: a11yMessage, placeholder: intl3.string(intl4.t.qRaqel), placeholderTextColor: tmp3.placeholderText.color, onChange: onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, autoCapitalize: "none", returnKeyType: "send", keyboardType: "twitter", autoCorrect: false, blurOnSubmit: true, maxLength: 37, autoFocus, onFocus, status: str2 };
  const TextField = TextField2.TextField;
  intl2 = intl4.intl;
  a11yMessage = undefined;
  const tmp7 = authStore;
  const tmp8 = hasOwnProperty;
  if (validationState.status === tmp4.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  intl3 = tmp10(1125).intl;
  str2 = undefined;
  if (null != message) {
    str2 = "error";
  }
  items1[1] = React4(TextField, obj3);
  let tmp9Result = null;
  if (null != message) {
    const obj4 = { errorMessage: message };
    tmp9Result = tmp9(closure_15, obj4);
  }
  items1[2] = tmp9Result;
  return tmp7(tmp8, obj);
}
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((ref) => {
  let autoFocusInput;
  let closure_2;
  let closure_4;
  let first;
  let first1;
  let headerText;
  let headerTextStyle;
  let intl;
  let items2;
  let items3;
  let items4;
  let onFocus;
  let sourcePage;
  let style;
  let tmp15;
  let tmp9;
  let tmp = sourcePage;
  let tmp2 = dependencyMap;
  let obj = sourcePage(576);
  const cResult = obj.c(73);
  ({ style, onFocus, autoFocusInput, headerText, headerTextStyle, sourcePage } = ref);
  const tmp4 = closure_12();
  let obj2 = react;
  ref = react.useRef(0);
  dependencyMap = react.useRef("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      let intl;
      const obj = { validatedText: "", hint: intl.string(sourcePage(closure_2[7]).t["6p7Mhh"]) };
      intl = sourcePage(closure_2[7]).intl;
      return obj;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = first1;
  const tmp7 = first1(obj2.useState(first), 2);
  first1 = tmp7[0];
  react = tmp7[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { status: constants.NONE };
    let num = 1;
    cResult[1] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[1];
  }
  const tmp6Result = tmp6(obj2.useState(tmp9), 2);
  const first2 = tmp6Result[0];
  let closure_6 = tmp6Result[1];
  const tmp6Result2 = tmp6(obj2.useState(""), 2);
  const first3 = tmp6Result2[0];
  let closure_8 = tmp6Result2[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function handleOnKeyPress(nativeEvent) {
      closure_2.current = nativeEvent.nativeEvent.key;
    }
    cResult[2] = handleOnKeyPress;
    tmp15 = handleOnKeyPress;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === first2.field) {
    let tmp16;
    if (cResult[4] === first2.status) {
      tmp16 = cResult[5];
    }
    if (cResult[6] === first2.field) {
      let tmp17;
      let tmp19;
      if (cResult[7] === first2.status) {
        tmp17 = cResult[8];
      }
      const _Symbol = Symbol;
      class Y {
        constructor(str) {
          closure_8(str.replace(/\n/g, ""));
          let tmp3 = first2.status === constants.ERROR;
          const tmp2 = constants;
          if (tmp3) {
            tmp3 = first2.field === constants2.MESSAGE;
          }
          if (tmp3) {
            const obj = { status: tmp2.NONE };
            closure_6(obj);
          }
        }
      }
      if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
        function handleSelectionChange(nativeEvent) {
          const start = nativeEvent.nativeEvent.selection.start;
          if (start !== ref.current) {
            ref.current = start;
          }
        }
        class Y {
          constructor(str) {
            closure_8(str.replace(/\n/g, ""));
            let tmp3 = first2.status === constants.ERROR;
            const tmp2 = constants;
            if (tmp3) {
              tmp3 = first2.field === constants2.MESSAGE;
            }
            if (tmp3) {
              const obj = { status: tmp2.NONE };
              closure_6(obj);
            }
          }
        }
        tmp19 = handleSelectionChange;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] === first3) {
        let tmp20;
        if (cResult[11] === first1.validatedText) {
          tmp20 = cResult[12];
        }
        if (cResult[13] !== sourcePage) {
          function ee() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { friend_add_type: "Id", source_page: sourcePage };
            obj.track(metroImportAll.FRIEND_ADD_VIEWED, obj2);
          }
          const items = [];
          class Y {
            constructor(str) {
              closure_8(str.replace(/\n/g, ""));
              let tmp3 = first2.status === constants.ERROR;
              const tmp2 = constants;
              if (tmp3) {
                tmp3 = first2.field === constants2.MESSAGE;
              }
              if (tmp3) {
                const obj = { status: tmp2.NONE };
                closure_6(obj);
              }
            }
          }
          cResult[13] = sourcePage;
          cResult[14] = ee;
          cResult[15] = items;
          let tmp22 = items;
        } else {
          tmp22 = cResult[15];
        }
        class Y {
          constructor(str) {
            closure_8(str.replace(/\n/g, ""));
            let tmp3 = first2.status === constants.ERROR;
            const tmp2 = constants;
            if (tmp3) {
              tmp3 = first2.field === constants2.MESSAGE;
            }
            if (tmp3) {
              const obj = { status: tmp2.NONE };
              closure_6(obj);
            }
          }
        }
        if (cResult[16] === first2.a11yMessage) {
          if (cResult[19] !== first2) {
            const items1 = [first2];
            class Y {
              constructor(str) {
                closure_8(str.replace(/\n/g, ""));
                let tmp3 = first2.status === constants.ERROR;
                const tmp2 = constants;
                if (tmp3) {
                  tmp3 = first2.field === constants2.MESSAGE;
                }
                if (tmp3) {
                  const obj = { status: tmp2.NONE };
                  closure_6(obj);
                }
              }
            }
            cResult[19] = first2;
            cResult[20] = items1;
          }
          class Y {
            constructor(str) {
              closure_8(str.replace(/\n/g, ""));
              let tmp3 = first2.status === constants.ERROR;
              const tmp2 = constants;
              if (tmp3) {
                tmp3 = first2.field === constants2.MESSAGE;
              }
              if (tmp3) {
                const obj = { status: tmp2.NONE };
                closure_6(obj);
              }
            }
          }
          if (cResult[21] !== first1.validatedText) {
            let str = first1.validatedText;
            let trimmed = str.trim();
            class Y {
              constructor(str) {
                closure_8(str.replace(/\n/g, ""));
                let tmp3 = first2.status === constants.ERROR;
                const tmp2 = constants;
                if (tmp3) {
                  tmp3 = first2.field === constants2.MESSAGE;
                }
                if (tmp3) {
                  const obj = { status: tmp2.NONE };
                  closure_6(obj);
                }
              }
            }
            cResult[21] = first1.validatedText;
            cResult[22] = trimmed;
          }
          if (cResult[23] === style) {
            let tmp28;
            if (cResult[24] === tmp4.container) {
              tmp28 = cResult[25];
            }
            if (cResult[26] === autoFocusInput) {
              if (cResult[27] === tmp16) {
                if (cResult[28] === tmp20) {
                  if (cResult[29] === headerText) {
                    if (cResult[30] === headerTextStyle) {
                      if (cResult[31] === onFocus) {
                        if (cResult[32] === ref) {
                          if (cResult[33] === first1) {
                            let tmp29;
                            if (cResult[34] === first2) {
                              tmp29 = cResult[35];
                            }
                            if (cResult[36] === headerTextStyle) {
                              if (cResult[37] === tmp4.inputHeaderText) {
                                let tmp33;
                                let tmp36;
                                let tmp38;
                                if (cResult[38] === tmp4.messageLabel) {
                                  tmp33 = cResult[39];
                                }
                                const _Symbol2 = Symbol;
                                class Y {
                                  constructor(str) {
                                    closure_8(str.replace(/\n/g, ""));
                                    let tmp3 = first2.status === constants.ERROR;
                                    const tmp2 = constants;
                                    if (tmp3) {
                                      tmp3 = first2.field === constants2.MESSAGE;
                                    }
                                    if (tmp3) {
                                      const obj = { status: tmp2.NONE };
                                      closure_6(obj);
                                    }
                                  }
                                }
                                if (tmp35 === Symbol.for("react.memo_cache_sentinel")) {
                                  const string = tmp(1125).intl.string;
                                  class Y {
                                    constructor(str) {
                                      closure_8(str.replace(/\n/g, ""));
                                      let tmp3 = first2.status === constants.ERROR;
                                      const tmp2 = constants;
                                      if (tmp3) {
                                        tmp3 = first2.field === constants2.MESSAGE;
                                      }
                                      if (tmp3) {
                                        const obj = { status: tmp2.NONE };
                                        closure_6(obj);
                                      }
                                    }
                                  }
                                  cResult[40] = tmp37;
                                  tmp36 = tmp37;
                                } else {
                                  tmp36 = cResult[40];
                                }
                                if (cResult[41] !== tmp33) {
                                  let obj4 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: tmp36 };
                                  class Y {
                                    constructor(str) {
                                      closure_8(str.replace(/\n/g, ""));
                                      let tmp3 = first2.status === constants.ERROR;
                                      const tmp2 = constants;
                                      if (tmp3) {
                                        tmp3 = first2.field === constants2.MESSAGE;
                                      }
                                      if (tmp3) {
                                        const obj = { status: tmp2.NONE };
                                        closure_6(obj);
                                      }
                                    }
                                  }
                                  const tmp40 = closure_9(tmp(5271).Text, obj4);
                                  cResult[41] = tmp33;
                                  cResult[42] = tmp40;
                                  tmp38 = tmp40;
                                } else {
                                  tmp38 = cResult[42];
                                }
                                const tmp41 = constants2;
                                if (first2.field === constants2.MESSAGE) {
                                  class Y {
                                    constructor(str) {
                                      closure_8(str.replace(/\n/g, ""));
                                      let tmp3 = first2.status === constants.ERROR;
                                      const tmp2 = constants;
                                      if (tmp3) {
                                        tmp3 = first2.field === constants2.MESSAGE;
                                      }
                                      if (tmp3) {
                                        const obj = { status: tmp2.NONE };
                                        closure_6(obj);
                                      }
                                    }
                                  }
                                }
                                if (cResult[43] === first3) {
                                  if (cResult[44] === tmp17) {
                                    if (cResult[45] === tmp20) {
                                      let tmp44;
                                      let tmp47;
                                      if (cResult[46] === undefined) {
                                        tmp44 = cResult[47];
                                      }
                                      if (cResult[48] === tmp4.messageFooterText) {
                                        if (cResult[49] === first2.field) {
                                          if (cResult[50] === first2.message) {
                                            if (cResult[51] === first2.status) {
                                              tmp47 = cResult[52];
                                            }
                                            if (cResult[53] === tmp4.friendMessageContainer) {
                                              if (cResult[54] === tmp38) {
                                                if (cResult[55] === tmp44) {
                                                  let tmp53;
                                                  if (cResult[56] === tmp47) {
                                                    tmp53 = cResult[57];
                                                  }
                                                  if (cResult[58] === tmp28) {
                                                    if (cResult[59] === tmp29) {
                                                      let tmp56;
                                                      let tmp59;
                                                      let tmp64;
                                                      if (cResult[60] === tmp53) {
                                                        tmp56 = cResult[61];
                                                      }
                                                      if (cResult[62] !== tmp4.redesignGrow) {
                                                        class Y {
                                                          constructor(str) {
                                                            closure_8(str.replace(/\n/g, ""));
                                                            let tmp3 = first2.status === constants.ERROR;
                                                            const tmp2 = constants;
                                                            if (tmp3) {
                                                              tmp3 = first2.field === constants2.MESSAGE;
                                                            }
                                                            if (tmp3) {
                                                              const obj = { status: tmp2.NONE };
                                                              closure_6(obj);
                                                            }
                                                          }
                                                        }
                                                        tmp62[0] = tmp4.redesignGrow;
                                                        const tmp63 = closure_9(first2, tmp62);
                                                        cResult[62] = tmp4.redesignGrow;
                                                        cResult[63] = tmp63;
                                                        tmp59 = tmp63;
                                                      } else {
                                                        tmp59 = cResult[63];
                                                      }
                                                      class Y {
                                                        constructor(str) {
                                                          closure_8(str.replace(/\n/g, ""));
                                                          let tmp3 = first2.status === constants.ERROR;
                                                          const tmp2 = constants;
                                                          if (tmp3) {
                                                            tmp3 = first2.field === constants2.MESSAGE;
                                                          }
                                                          if (tmp3) {
                                                            const obj = { status: tmp2.NONE };
                                                            closure_6(obj);
                                                          }
                                                        }
                                                      }
                                                      if (cResult[64] === Symbol.for("react.memo_cache_sentinel")) {
                                                        const string2 = tmp(1125).intl.string;
                                                        class Y {
                                                          constructor(str) {
                                                            closure_8(str.replace(/\n/g, ""));
                                                            let tmp3 = first2.status === constants.ERROR;
                                                            const tmp2 = constants;
                                                            if (tmp3) {
                                                              tmp3 = first2.field === constants2.MESSAGE;
                                                            }
                                                            if (tmp3) {
                                                              const obj = { status: tmp2.NONE };
                                                              closure_6(obj);
                                                            }
                                                          }
                                                        }
                                                        cResult[64] = tmp65;
                                                        tmp64 = tmp65;
                                                      } else {
                                                        tmp64 = cResult[64];
                                                      }
                                                      if (cResult[65] === tmp20) {
                                                        if (cResult[66] === tmp27 <= 0) {
                                                          let tmp69;
                                                          if (cResult[67] === first2.status === constants.LOADING) {
                                                            tmp69 = cResult[68];
                                                          }
                                                          if (cResult[69] === tmp56) {
                                                            if (cResult[70] === tmp59) {
                                                              let tmp72;
                                                              if (cResult[71] === tmp69) {
                                                                tmp72 = cResult[72];
                                                              }
                                                              return tmp72;
                                                            }
                                                          }
                                                          class Y {
                                                            constructor(str) {
                                                              closure_8(str.replace(/\n/g, ""));
                                                              let tmp3 = first2.status === constants.ERROR;
                                                              const tmp2 = constants;
                                                              if (tmp3) {
                                                                tmp3 = first2.field === constants2.MESSAGE;
                                                              }
                                                              if (tmp3) {
                                                                const obj = { status: tmp2.NONE };
                                                                closure_6(obj);
                                                              }
                                                            }
                                                          }
                                                          let obj5 = { children: items2 };
                                                          items2 = [tmp56, tmp59, tmp69];
                                                          const tmp74 = closure_10(closure_11, obj5);
                                                          cResult[69] = tmp56;
                                                          cResult[70] = tmp59;
                                                          cResult[71] = tmp69;
                                                          cResult[72] = tmp74;
                                                          tmp72 = tmp74;
                                                        }
                                                      }
                                                      const obj6 = { size: "lg", text: tmp64, disabled: tmp27 <= 0, onPress: tmp20, loading: first2.status === constants.LOADING, grow: false };
                                                      const tmp71 = closure_9(tmp(5281).Button, obj6);
                                                      cResult[65] = tmp20;
                                                      cResult[66] = tmp27 <= 0;
                                                      cResult[67] = first2.status === constants.LOADING;
                                                      cResult[68] = tmp71;
                                                      tmp69 = tmp71;
                                                    }
                                                  }
                                                  class Y {
                                                    constructor(str) {
                                                      closure_8(str.replace(/\n/g, ""));
                                                      let tmp3 = first2.status === constants.ERROR;
                                                      const tmp2 = constants;
                                                      if (tmp3) {
                                                        tmp3 = first2.field === constants2.MESSAGE;
                                                      }
                                                      if (tmp3) {
                                                        const obj = { status: tmp2.NONE };
                                                        closure_6(obj);
                                                      }
                                                    }
                                                  }
                                                  const obj7 = { style: tmp28, children: items3 };
                                                  items3 = [tmp29, tmp53];
                                                  const tmp58 = closure_10(first2, obj7);
                                                  cResult[58] = tmp28;
                                                  cResult[59] = tmp29;
                                                  cResult[60] = tmp53;
                                                  cResult[61] = tmp58;
                                                  tmp56 = tmp58;
                                                }
                                              }
                                            }
                                            class Y {
                                              constructor(str) {
                                                closure_8(str.replace(/\n/g, ""));
                                                let tmp3 = first2.status === constants.ERROR;
                                                const tmp2 = constants;
                                                if (tmp3) {
                                                  tmp3 = first2.field === constants2.MESSAGE;
                                                }
                                                if (tmp3) {
                                                  const obj = { status: tmp2.NONE };
                                                  closure_6(obj);
                                                }
                                              }
                                            }
                                            const obj8 = { style: tmp32, children: items4 };
                                            items4 = [tmp38, tmp44, tmp47];
                                            const tmp55 = closure_10(first2, obj8);
                                            cResult[53] = tmp4.friendMessageContainer;
                                            cResult[54] = tmp38;
                                            cResult[55] = tmp44;
                                            cResult[56] = tmp47;
                                            cResult[57] = tmp55;
                                            tmp53 = tmp55;
                                          }
                                        }
                                      }
                                      class Y {
                                        constructor(str) {
                                          closure_8(str.replace(/\n/g, ""));
                                          let tmp3 = first2.status === constants.ERROR;
                                          const tmp2 = constants;
                                          if (tmp3) {
                                            tmp3 = first2.field === constants2.MESSAGE;
                                          }
                                          if (tmp3) {
                                            const obj = { status: tmp2.NONE };
                                            closure_6(obj);
                                          }
                                        }
                                      }
                                      if (first2.status === constants.ERROR) {
                                        let tmp49;
                                        if (first2.field === tmp41.MESSAGE) {
                                          class Y {
                                            constructor(str) {
                                              closure_8(str.replace(/\n/g, ""));
                                              let tmp3 = first2.status === constants.ERROR;
                                              const tmp2 = constants;
                                              if (tmp3) {
                                                tmp3 = first2.field === constants2.MESSAGE;
                                              }
                                              if (tmp3) {
                                                const obj = { status: tmp2.NONE };
                                                closure_6(obj);
                                              }
                                            }
                                          }
                                          tmp52[0] = first2.message;
                                          tmp49 = closure_9(closure_15, tmp52);
                                        }
                                        class Y {
                                          constructor(str) {
                                            closure_8(str.replace(/\n/g, ""));
                                            let tmp3 = first2.status === constants.ERROR;
                                            const tmp2 = constants;
                                            if (tmp3) {
                                              tmp3 = first2.field === constants2.MESSAGE;
                                            }
                                            if (tmp3) {
                                              const obj = { status: tmp2.NONE };
                                              closure_6(obj);
                                            }
                                          }
                                        }
                                        cResult[49] = first2.field;
                                        cResult[50] = first2.message;
                                        cResult[51] = first2.status;
                                        cResult[52] = tmp49;
                                        tmp47 = tmp49;
                                      }
                                      const obj9 = { style: tmp4.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: intl.string(tmp(1125).t.UtfQNw) };
                                      const Text = tmp(5271).Text;
                                      intl = tmp(1125).intl;
                                      tmp49 = closure_9(Text, obj9);
                                    }
                                  }
                                }
                                const obj10 = { returnKeyType: "done", submitBehavior: "submit", value: first3, maxLength: 120, onSubmitEditing: tmp20, onChange: tmp17, status: undefined };
                                const tmp46 = closure_9(tmp(7240).TextArea, obj10);
                                cResult[43] = first3;
                                cResult[44] = tmp17;
                                cResult[45] = tmp20;
                                cResult[46] = undefined;
                                cResult[47] = tmp46;
                                tmp44 = tmp46;
                              }
                            }
                            class Y {
                              constructor(str) {
                                closure_8(str.replace(/\n/g, ""));
                                let tmp3 = first2.status === constants.ERROR;
                                const tmp2 = constants;
                                if (tmp3) {
                                  tmp3 = first2.field === constants2.MESSAGE;
                                }
                                if (tmp3) {
                                  const obj = { status: tmp2.NONE };
                                  closure_6(obj);
                                }
                              }
                            }
                            ({ messageLabel: tmp34[0], inputHeaderText: tmp34[1] } = tmp4);
                            tmp34[2] = headerTextStyle;
                            cResult[36] = headerTextStyle;
                            cResult[37] = tmp4.inputHeaderText;
                            cResult[38] = tmp4.messageLabel;
                            cResult[39] = tmp34;
                            tmp33 = tmp34;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class Y {
              constructor(str) {
                closure_8(str.replace(/\n/g, ""));
                let tmp3 = first2.status === constants.ERROR;
                const tmp2 = constants;
                if (tmp3) {
                  tmp3 = first2.field === constants2.MESSAGE;
                }
                if (tmp3) {
                  const obj = { status: tmp2.NONE };
                  closure_6(obj);
                }
              }
            }
            const obj11 = { textState: first1, onChangeText: tmp16, onSelectionChange: tmp19, onKeyPress: tmp15, onSubmitEditing: tmp20, onFocus, validationState: first2, autoFocus: autoFocusInput, headerText, headerTextStyle, ref };
            const tmp31 = closure_9(AddFriendByIdInput, obj11);
            cResult[26] = autoFocusInput;
            cResult[27] = tmp16;
            cResult[28] = tmp20;
            cResult[29] = headerText;
            cResult[30] = headerTextStyle;
            cResult[31] = onFocus;
            cResult[32] = ref;
            cResult[33] = first1;
            cResult[34] = first2;
            cResult[35] = tmp31;
            tmp29 = tmp31;
          }
          const items5 = [tmp4.container, style];
          cResult[23] = style;
          cResult[24] = tmp4.container;
          cResult[25] = items5;
          tmp28 = items5;
        }
        function se() {
          const tmp2 = first2.status === constants.ERROR && null != tmp.a11yMessage;
          if (tmp2) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(first2.a11yMessage);
          }
        }
        cResult[16] = first2.a11yMessage;
        cResult[17] = first2.status;
        cResult[18] = se;
      }
      function handleSubmitEditing() {
        let intl;
        let tmp9;
        const str = first1.validatedText;
        let trimmed = str.trim();
        const trimmed1 = first3.trim();
        if (trimmed.length <= 0) {
          let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: intl.string(sourcePage(closure_2[7]).t.mxnceg) };
          intl = sourcePage(closure_2[7]).intl;
          const tmp22 = closure_6(obj2);
        } else {
          const hasItem = trimmed.includes("#");
          let tmp2 = trimmed;
          const startsWithResult = !hasItem && trimmed.startsWith("@");
          if (startsWithResult) {
            let num = 1;
            const substr = trimmed.substring(1);
            trimmed = substr;
            tmp2 = substr;
          }
          let obj = sourcePage(closure_2[12]);
          const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
          if (null != validateDiscordTagResult) {
            let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
            closure_6(obj3);
          } else {
            let obj4 = { status: constants.LOADING };
            closure_6(obj4);
            const obj5 = { discordTag: tmp2, context: { location: "Search - Add Friend Search" }, errorUxConfig: sourcePage(closure_2[13]).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED, note: tmp9 };
            const sendRequest = ref(closure_2[13]).sendRequest;
            ref(closure_2[13]);
            tmp9 = undefined;
            if (trimmed1.length > 0) {
              tmp9 = trimmed1;
            }
            const sendRequestResult = sendRequest(obj5);
            sendRequestResult.then(() => {
              let intl;
              let intl2;
              let obj3;
              const obj = { validatedText: "", hint: intl.string(intl4.t["6p7Mhh"]) };
              intl = intl4.intl;
              closure_4(obj);
              closure_8("");
              const obj2 = { status: constants.SUCCESS, message: intl2.format(intl4.t.Rtl1Ep, obj3) };
              intl2 = intl4.intl;
              obj3 = { discordTag: trimmed };
              metroRequire(obj2);
              const obj4 = ToastUtils;
              const result = obj4.presentAddedFriendToast();
              metroRequire.dismiss();
            }, (body) => {
              let humanizeAbortCode;
              let humanizeAbortCodeForA11y;
              let intl;
              let intl2;
              let num;
              let num2;
              let obj2;
              let tmp3;
              let note;
              const tmp = closure_6;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  note = body.note;
                }
              }
              if (null != note) {
                const obj = { status: constants.ERROR, field: constants2.MESSAGE, message: intl.string(intl4.t.ckHwck), a11yMessage: intl2.string(intl4.t.ckHwck) };
                intl = intl4.intl;
                intl2 = intl4.intl;
                obj2 = obj;
              } else {
                obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: humanizeAbortCode(num, trimmed), a11yMessage: humanizeAbortCodeForA11y(num2, tmp3) };
                num = undefined;
                humanizeAbortCode = FriendsUtils.humanizeAbortCode;
                FriendsUtils;
                if (body != null) {
                  const body2 = body.body;
                  if (body2 != null) {
                    num = body2.code;
                  }
                }
                if (num == null) {
                  num = -1;
                }
                num2 = undefined;
                humanizeAbortCodeForA11y = FriendsUtils.humanizeAbortCodeForA11y;
                FriendsUtils;
                tmp3 = trimmed;
                if (body != null) {
                  const body3 = body.body;
                  if (body3 != null) {
                    num2 = body3.code;
                  }
                }
                if (num2 == null) {
                  num2 = -1;
                }
              }
              tmp(obj2);
            });
          }
        }
      }
      cResult[10] = first3;
      cResult[11] = first1.validatedText;
      cResult[12] = handleSubmitEditing;
      tmp20 = handleSubmitEditing;
    }
    class Y {
      constructor(str) {
        closure_8(str.replace(/\n/g, ""));
        let tmp3 = first2.status === constants.ERROR;
        const tmp2 = constants;
        if (tmp3) {
          tmp3 = first2.field === constants2.MESSAGE;
        }
        if (tmp3) {
          const obj = { status: tmp2.NONE };
          closure_6(obj);
        }
      }
    }
    let num2 = 6;
    cResult[6] = first2.field;
    cResult[7] = first2.status;
    cResult[8] = Y;
    tmp17 = Y;
  }
  class W {
    constructor(validatedText) {
      let intl;
      let obj;
      const tmp = closure_4;
      if (validatedText.length <= 0) {
        const obj2 = { validatedText: "", hint: intl.string(intl4.t["6p7Mhh"]) };
        intl = intl4.intl;
        obj = obj2;
      } else {
        const arr = _slicedToArray(validatedText.split("#"), 2)[1];
        let str2 = "";
        if (null != arr) {
          let num2 = 0;
          const slice = metroImportDefault.slice;
          if (null != arr) {
            num2 = arr.length + 1;
          }
          str2 = validatedText + slice(num2);
        }
        obj = { validatedText, hint: str2 };
      }
      tmp(obj);
      let tmp9 = first2.status === constants.ERROR;
      const tmp8 = constants;
      if (tmp9) {
        tmp9 = first2.field === constants2.DISCORD_TAG;
      }
      if (tmp9) {
        const obj3 = { status: tmp8.NONE };
        closure_6(obj3);
      }
    }
  }
  cResult[3] = first2.field;
  cResult[4] = first2.status;
  cResult[5] = W;
  tmp16 = W;
}) : ((arg0) => {
  let autoFocusInput;
  let closure_2;
  let closure_4;
  let headerText;
  let headerTextStyle;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items6;
  let items8;
  let onFocus;
  let ref;
  let sourcePage;
  let str2;
  let style;
  ({ headerTextStyle, sourcePage } = arg0);
  let textState;
  react = undefined;
  function handleSubmitEditing() {
    let intl;
    let tmp9;
    const str = first.validatedText;
    let trimmed = str.trim();
    const trimmed1 = first2.trim();
    if (trimmed.length <= 0) {
      let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: intl.string(sourcePage(closure_2[7]).t.mxnceg) };
      intl = sourcePage(closure_2[7]).intl;
      const tmp22 = closure_6(obj2);
    } else {
      const hasItem = trimmed.includes("#");
      let tmp2 = trimmed;
      const startsWithResult = !hasItem && trimmed.startsWith("@");
      if (startsWithResult) {
        let num = 1;
        const substr = trimmed.substring(1);
        trimmed = substr;
        tmp2 = substr;
      }
      let obj = sourcePage(closure_2[12]);
      const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
        closure_6(obj3);
      } else {
        let obj4 = { status: constants.LOADING };
        closure_6(obj4);
        const obj5 = { discordTag: tmp2, context: { location: "Search - Add Friend Search" }, errorUxConfig: sourcePage(closure_2[13]).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED, note: tmp9 };
        const sendRequest = ref(closure_2[13]).sendRequest;
        ref(closure_2[13]);
        tmp9 = undefined;
        if (trimmed1.length > 0) {
          tmp9 = trimmed1;
        }
        const sendRequestResult = sendRequest(obj5);
        sendRequestResult.then(() => {
          let intl;
          let intl2;
          let obj3;
          const obj = { validatedText: "", hint: intl.string(intl4.t["6p7Mhh"]) };
          intl = intl4.intl;
          closure_4(obj);
          closure_8("");
          const obj2 = { status: constants.SUCCESS, message: intl2.format(intl4.t.Rtl1Ep, obj3) };
          intl2 = intl4.intl;
          obj3 = { discordTag: trimmed };
          metroRequire(obj2);
          const obj4 = ToastUtils;
          const result = obj4.presentAddedFriendToast();
          metroRequire.dismiss();
        }, (body) => {
          let humanizeAbortCode;
          let humanizeAbortCodeForA11y;
          let intl;
          let intl2;
          let num;
          let num2;
          let obj2;
          let tmp3;
          let note;
          const tmp = closure_6;
          if (body != null) {
            body = body.body;
            if (body != null) {
              note = body.note;
            }
          }
          if (null != note) {
            const obj = { status: constants.ERROR, field: constants2.MESSAGE, message: intl.string(intl4.t.ckHwck), a11yMessage: intl2.string(intl4.t.ckHwck) };
            intl = intl4.intl;
            intl2 = intl4.intl;
            obj2 = obj;
          } else {
            obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: humanizeAbortCode(num, trimmed), a11yMessage: humanizeAbortCodeForA11y(num2, tmp3) };
            num = undefined;
            humanizeAbortCode = FriendsUtils.humanizeAbortCode;
            FriendsUtils;
            if (body != null) {
              const body2 = body.body;
              if (body2 != null) {
                num = body2.code;
              }
            }
            if (num == null) {
              num = -1;
            }
            num2 = undefined;
            humanizeAbortCodeForA11y = FriendsUtils.humanizeAbortCodeForA11y;
            FriendsUtils;
            tmp3 = trimmed;
            if (body != null) {
              const body3 = body.body;
              if (body3 != null) {
                num2 = body3.code;
              }
            }
            if (num2 == null) {
              num2 = -1;
            }
          }
          tmp(obj2);
        });
      }
    }
  }
  ({ style, onFocus, autoFocusInput, headerText, ref } = arg0);
  let tmp = closure_12();
  ref = react.useRef(0);
  dependencyMap = react.useRef("");
  let tmp2 = textState(react.useState(() => {
    let intl;
    const obj = { validatedText: "", hint: intl.string(sourcePage(closure_2[7]).t["6p7Mhh"]) };
    intl = sourcePage(closure_2[7]).intl;
    return obj;
  }), 2);
  textState = tmp2[0];
  react = tmp2[1];
  let obj = { status: constants.NONE };
  const tmp4 = constants;
  const tmp5 = textState(react.useState(obj), 2);
  const first1 = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = textState(react.useState(""), 2);
  const first2 = tmp7[0];
  let closure_8 = tmp7[1];
  const items = [first1];
  const items1 = [first1];
  const callback = react.useCallback((validatedText) => {
    let intl;
    let obj;
    const tmp = closure_4;
    if (validatedText.length <= 0) {
      const obj2 = { validatedText: "", hint: intl.string(intl4.t["6p7Mhh"]) };
      intl = intl4.intl;
      obj = obj2;
    } else {
      const arr = _slicedToArray(validatedText.split("#"), 2)[1];
      let str2 = "";
      if (null != arr) {
        let num2 = 0;
        const slice = metroImportDefault.slice;
        if (null != arr) {
          num2 = arr.length + 1;
        }
        str2 = validatedText + slice(num2);
      }
      obj = { validatedText, hint: str2 };
    }
    tmp(obj);
    let tmp9 = first1.status === constants.ERROR;
    const tmp8 = constants;
    if (tmp9) {
      tmp9 = first1.field === constants2.DISCORD_TAG;
    }
    if (tmp9) {
      const obj3 = { status: tmp8.NONE };
      closure_6(obj3);
    }
  }, items);
  const items2 = [sourcePage];
  const callback1 = react.useCallback((str) => {
    closure_8(str.replace(/\n/g, ""));
    let tmp3 = first1.status === constants.ERROR;
    const tmp2 = constants;
    if (tmp3) {
      tmp3 = first1.field === constants2.MESSAGE;
    }
    if (tmp3) {
      const obj = { status: tmp2.NONE };
      closure_6(obj);
    }
  }, items1);
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { friend_add_type: "Id", source_page: sourcePage };
    obj.track(metroImportAll.FRIEND_ADD_VIEWED, obj2);
  }, items2);
  const items3 = [first1];
  const effect1 = react.useEffect(() => {
    const tmp2 = first1.status === constants.ERROR && null != tmp.a11yMessage;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(first1.a11yMessage);
    }
  }, items3);
  let str = textState.validatedText;
  const tmp13 = closure_10;
  const tmp15 = first1;
  let obj2 = { style: items4, children: null };
  items4 = [tmp.container, style];
  const tmp16 = closure_9;
  let obj3 = {
    textState,
    onChangeText: callback,
    onSelectionChange: function handleSelectionChange(nativeEvent) {
      const start = nativeEvent.nativeEvent.selection.start;
      if (start !== ref.current) {
        ref.current = start;
      }
    },
    onKeyPress: function handleOnKeyPress(nativeEvent) {
      closure_2.current = nativeEvent.nativeEvent.key;
    },
    onSubmitEditing: handleSubmitEditing,
    onFocus,
    validationState: first1,
    autoFocus: autoFocusInput,
    headerText,
    headerTextStyle,
    ref
  };
  const tmp14 = closure_11;
  const items5 = [, ];
  const length = str.trim().length;
  items5[0] = closure_9(AddFriendByIdInput, obj3);
  let obj4 = { style: tmp.friendMessageContainer, children: null };
  let obj5 = { style: items6, variant: "text-sm/semibold", color: "text-muted", children: intl.string(sourcePage(1125).t.Yi6Mpu) };
  items6 = [, , ];
  ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
  items6[2] = headerTextStyle;
  const Text = sourcePage(5271).Text;
  intl = sourcePage(1125).intl;
  const items7 = [closure_9(Text, obj5), , ];
  const obj6 = { returnKeyType: "done", submitBehavior: "submit", value: first2, maxLength: 120, onSubmitEditing: handleSubmitEditing, onChange: callback1, status: str2 };
  str2 = undefined;
  const TextArea = sourcePage(7240).TextArea;
  const tmp19 = constants2;
  if (first1.field === constants2.MESSAGE) {
    if (first1.status === tmp4.ERROR) {
      str2 = "error";
    }
  }
  items7[1] = tmp16(TextArea, obj6);
  if (first1.status === tmp4.ERROR) {
    let tmp16Result;
    if (first1.field === tmp19.MESSAGE) {
      const obj7 = { errorMessage: first1.message };
      tmp16Result = tmp16(closure_15, obj7);
    }
    const obj8 = { children: items8 };
    items7[2] = tmp16Result;
    obj4.children = items7;
    items5[1] = tmp13(tmp15, obj4);
    obj2.children = items5;
    items8 = [tmp13(tmp15, obj2), , ];
    const obj9 = { style: tmp.redesignGrow };
    items8[1] = tmp16(tmp15, obj9);
    const obj10 = { size: "lg", text: intl3.string(sourcePage(1125).t["PMsq/b"]), disabled: length <= 0, onPress: handleSubmitEditing, loading: first1.status === tmp4.LOADING, grow: false };
    const Button = tmp17(5281).Button;
    intl3 = tmp17(1125).intl;
    items8[2] = tmp16(Button, obj10);
    return tmp13(tmp14, obj8);
  }
  const obj11 = { style: tmp.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: intl2.string(sourcePage(1125).t.UtfQNw) };
  const Text2 = tmp17(5271).Text;
  intl2 = tmp17(1125).intl;
  tmp16Result = tmp16(Text2, obj11);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default tmp6;
