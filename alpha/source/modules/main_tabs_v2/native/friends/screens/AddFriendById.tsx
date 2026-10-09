// Module ID: 13999
// Function ID: 14000
// Name: AddFriendById
// Dependencies: [32, 19, 17, 1085, 21, 5091, 587, 1126, 558, 576, 5087, 6294, 14000, 7015, 7011, 4767, 1265, 4789, 6770, 5376, 2]

// Module 13999 (AddFriendById)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4789 */;
import TextField2 from "TextField" /* 6294 */;
import FriendsUtils from "FriendsUtils" /* 7015 */;
import FriendRequestMessageExperimentDefault from "FriendRequestMessageExperiment" /* 14000 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
const Text_Text = tmp(5087);
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
  intl3 = tmp10(1126).intl;
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
  let intl2;
  let items2;
  let items3;
  let items4;
  let onFocus;
  let sourcePage;
  let style;
  let tmp15;
  let tmp16;
  let tmp35Result;
  let tmp9;
  let tmp = sourcePage;
  let tmp2 = dependencyMap;
  let obj = sourcePage(576);
  const cResult = obj.c(65);
  ({ style, onFocus, autoFocusInput, headerText, headerTextStyle, sourcePage } = ref);
  ref = ref.ref;
  const tmp4 = closure_12();
  let obj2 = react;
  importDefault = react.useRef(0);
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
    let obj4 = { location: "AddFriendbyId" };
    cResult[2] = obj4;
    tmp15 = obj4;
  } else {
    tmp15 = cResult[2];
  }
  let obj5 = FriendRequestMessageExperimentDefault;
  const enabled = obj5.useConfig(tmp15).enabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function handleOnKeyPress(nativeEvent) {
      closure_2.current = nativeEvent.nativeEvent.key;
    }
    let num2 = 3;
    cResult[3] = handleOnKeyPress;
    tmp16 = handleOnKeyPress;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === first2.field) {
    let tmp17;
    if (cResult[5] === first2.status) {
      tmp17 = cResult[6];
    }
    if (cResult[7] === first2.field) {
      let tmp18;
      let tmp20;
      if (cResult[8] === first2.status) {
        tmp18 = cResult[9];
      }
      const _Symbol = Symbol;
      class Q {
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
      if (tmp19 === Symbol.for("react.memo_cache_sentinel")) {
        function handleSelectionChange(nativeEvent) {
          const start = nativeEvent.nativeEvent.selection.start;
          if (start !== ref.current) {
            ref.current = start;
          }
        }
        class Q {
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
        tmp20 = handleSelectionChange;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] === first3) {
        let tmp21;
        if (cResult[12] === first1.validatedText) {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== sourcePage) {
          function se() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { friend_add_type: "Id", source_page: sourcePage };
            obj.track(metroImportAll.FRIEND_ADD_VIEWED, obj2);
          }
          const items = [];
          class Q {
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
          cResult[14] = sourcePage;
          cResult[15] = items;
          cResult[16] = se;
          let tmp22 = items;
        } else {
          tmp22 = cResult[15];
        }
        class Q {
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
        if (cResult[17] === first2.a11yMessage) {
          if (cResult[20] !== first2) {
            const items1 = [first2];
            class Q {
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
            cResult[20] = first2;
            cResult[21] = items1;
          }
          class Q {
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
          if (cResult[22] !== first1.validatedText) {
            let str = first1.validatedText;
            let trimmed = str.trim();
            class Q {
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
            cResult[22] = first1.validatedText;
            cResult[23] = trimmed;
          }
          if (cResult[24] === style) {
            let tmp29;
            if (cResult[25] === tmp4.container) {
              tmp29 = cResult[26];
            }
            if (cResult[27] === autoFocusInput) {
              if (cResult[28] === tmp17) {
                if (cResult[29] === tmp21) {
                  if (cResult[30] === headerText) {
                    if (cResult[31] === headerTextStyle) {
                      if (cResult[32] === onFocus) {
                        if (cResult[33] === ref) {
                          if (cResult[34] === first1) {
                            let tmp30;
                            if (cResult[35] === first2) {
                              tmp30 = cResult[36];
                            }
                            if (cResult[37] === first3) {
                              if (cResult[38] === enabled) {
                                if (cResult[39] === tmp18) {
                                  if (cResult[40] === tmp21) {
                                    if (cResult[41] === headerTextStyle) {
                                      if (cResult[42] === tmp4.friendMessageContainer) {
                                        if (cResult[43] === tmp4.inputHeaderText) {
                                          if (cResult[44] === tmp4.messageFooterText) {
                                            if (cResult[45] === tmp4.messageLabel) {
                                              if (cResult[46] === first2.field) {
                                                if (cResult[47] === first2.message) {
                                                  let tmp33;
                                                  if (cResult[48] === first2.status) {
                                                    tmp33 = cResult[49];
                                                  }
                                                  if (cResult[50] === tmp29) {
                                                    if (cResult[51] === tmp30) {
                                                      let tmp44;
                                                      let tmp47;
                                                      let tmp52;
                                                      if (cResult[52] === tmp33) {
                                                        tmp44 = cResult[53];
                                                      }
                                                      if (cResult[54] !== tmp4.redesignGrow) {
                                                        class Q {
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
                                                        tmp50[0] = tmp4.redesignGrow;
                                                        const tmp51 = closure_9(first2, tmp50);
                                                        cResult[54] = tmp4.redesignGrow;
                                                        cResult[55] = tmp51;
                                                        tmp47 = tmp51;
                                                      } else {
                                                        tmp47 = cResult[55];
                                                      }
                                                      class Q {
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
                                                      if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                        const string = tmp(1126).intl.string;
                                                        class Q {
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
                                                        cResult[56] = tmp53;
                                                        tmp52 = tmp53;
                                                      } else {
                                                        tmp52 = cResult[56];
                                                      }
                                                      if (cResult[57] === tmp21) {
                                                        if (cResult[58] === tmp28 <= 0) {
                                                          let tmp57;
                                                          if (cResult[59] === first2.status === constants.LOADING) {
                                                            tmp57 = cResult[60];
                                                          }
                                                          if (cResult[61] === tmp44) {
                                                            if (cResult[62] === tmp47) {
                                                              let tmp60;
                                                              if (cResult[63] === tmp57) {
                                                                tmp60 = cResult[64];
                                                              }
                                                              return tmp60;
                                                            }
                                                          }
                                                          class Q {
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
                                                          const obj6 = { children: items2 };
                                                          items2 = [tmp44, tmp47, tmp57];
                                                          const tmp62 = closure_10(closure_11, obj6);
                                                          cResult[61] = tmp44;
                                                          cResult[62] = tmp47;
                                                          cResult[63] = tmp57;
                                                          cResult[64] = tmp62;
                                                          tmp60 = tmp62;
                                                        }
                                                      }
                                                      const obj7 = { size: "lg", text: tmp52, disabled: tmp28 <= 0, onPress: tmp21, loading: first2.status === constants.LOADING, grow: false };
                                                      const tmp59 = closure_9(tmp(5376).Button, obj7);
                                                      cResult[57] = tmp21;
                                                      cResult[58] = tmp28 <= 0;
                                                      cResult[59] = first2.status === constants.LOADING;
                                                      cResult[60] = tmp59;
                                                      tmp57 = tmp59;
                                                    }
                                                  }
                                                  class Q {
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
                                                  const obj8 = { style: tmp29, children: items3 };
                                                  items3 = [tmp30, tmp33];
                                                  const tmp46 = closure_10(first2, obj8);
                                                  cResult[50] = tmp29;
                                                  cResult[51] = tmp30;
                                                  cResult[52] = tmp33;
                                                  cResult[53] = tmp46;
                                                  tmp44 = tmp46;
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
                            class Q {
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
                            if (tmp35Result) {
                              const obj9 = { style: tmp4.friendMessageContainer, children: null };
                              class Q {
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
                              const obj10 = { style: items4, variant: "text-sm/semibold", color: "text-muted", children: intl.string(tmp(1126).t.Yi6Mpu) };
                              items4 = [, , ];
                              ({ messageLabel: arr4[0], inputHeaderText: arr4[1] } = tmp4);
                              items4[2] = headerTextStyle;
                              const Text = tmp(5087).Text;
                              intl = tmp(1126).intl;
                              const items5 = [closure_9(Text, obj10), , ];
                              const obj11 = { returnKeyType: "done", submitBehavior: "submit", value: first3, maxLength: 120, onSubmitEditing: tmp21, onChange: tmp18, status: undefined };
                              const TextArea = tmp(6770).TextArea;
                              const tmp35 = closure_10;
                              const tmp36 = first2;
                              const tmp38 = constants2;
                              if (first2.field === constants2.MESSAGE) {
                                class Q {
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
                              items5[1] = tmp37(TextArea, obj11);
                              if (first2.status === constants.ERROR) {
                                let tmp37Result;
                                if (first2.field === tmp38.MESSAGE) {
                                  const obj12 = { errorMessage: null };
                                  class Q {
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
                                  tmp37Result = tmp37(closure_15, obj12);
                                }
                                items5[2] = tmp37Result;
                                class Q {
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
                                tmp35Result = tmp35(tmp36, obj9);
                              }
                              const obj13 = { style: tmp4.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: intl2.string(tmp(1126).t.UtfQNw) };
                              const Text2 = tmp(5087).Text;
                              intl2 = tmp(1126).intl;
                              tmp37Result = tmp37(Text2, obj13);
                            }
                            cResult[37] = first3;
                            cResult[38] = enabled;
                            cResult[39] = tmp18;
                            cResult[40] = tmp21;
                            cResult[41] = headerTextStyle;
                            cResult[42] = tmp4.friendMessageContainer;
                            cResult[43] = tmp4.inputHeaderText;
                            cResult[44] = tmp4.messageFooterText;
                            cResult[45] = tmp4.messageLabel;
                            cResult[46] = first2.field;
                            cResult[47] = first2.message;
                            cResult[48] = first2.status;
                            cResult[49] = tmp35Result;
                            tmp33 = tmp35Result;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class Q {
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
            const obj14 = { textState: first1, onChangeText: tmp17, onSelectionChange: tmp20, onKeyPress: tmp16, onSubmitEditing: tmp21, onFocus, validationState: first2, autoFocus: autoFocusInput, headerText, headerTextStyle, ref };
            const tmp32 = closure_9(AddFriendByIdInput, obj14);
            cResult[27] = autoFocusInput;
            cResult[28] = tmp17;
            cResult[29] = tmp21;
            cResult[30] = headerText;
            cResult[31] = headerTextStyle;
            cResult[32] = onFocus;
            cResult[33] = ref;
            cResult[34] = first1;
            cResult[35] = first2;
            cResult[36] = tmp32;
            tmp30 = tmp32;
          }
          const items6 = [tmp4.container, style];
          cResult[24] = style;
          cResult[25] = tmp4.container;
          cResult[26] = items6;
          tmp29 = items6;
        }
        function ne() {
          const tmp2 = first2.status === constants.ERROR && null != tmp.a11yMessage;
          if (tmp2) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(first2.a11yMessage);
          }
        }
        cResult[17] = first2.a11yMessage;
        cResult[18] = first2.status;
        cResult[19] = ne;
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
          let obj = sourcePage(closure_2[13]);
          const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
          if (null != validateDiscordTagResult) {
            let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
            closure_6(obj3);
          } else {
            let obj4 = { status: constants.LOADING };
            closure_6(obj4);
            const obj5 = { discordTag: tmp2, context: { location: "Search - Add Friend Search" }, errorUxConfig: sourcePage(closure_2[14]).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED, note: tmp9 };
            const sendRequest = ref(closure_2[14]).sendRequest;
            ref(closure_2[14]);
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
      cResult[11] = first3;
      cResult[12] = first1.validatedText;
      cResult[13] = handleSubmitEditing;
      tmp21 = handleSubmitEditing;
    }
    class Q {
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
    cResult[7] = first2.field;
    cResult[8] = first2.status;
    cResult[9] = Q;
    tmp18 = Q;
  }
  class Y {
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
  cResult[4] = first2.field;
  cResult[5] = first2.status;
  cResult[6] = Y;
  tmp17 = Y;
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
  let items5;
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
      let obj = sourcePage(closure_2[13]);
      const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
        closure_6(obj3);
      } else {
        let obj4 = { status: constants.LOADING };
        closure_6(obj4);
        const obj5 = { discordTag: tmp2, context: { location: "Search - Add Friend Search" }, errorUxConfig: sourcePage(closure_2[14]).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED, note: tmp9 };
        const sendRequest = ref(closure_2[14]).sendRequest;
        ref(closure_2[14]);
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
  importDefault = react.useRef(0);
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
  let tmp9 = dependencyMap;
  let obj2 = FriendRequestMessageExperimentDefault;
  let enabled = obj2.useConfig({ location: "AddFriendbyId" }).enabled;
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
  const tmp14 = closure_10;
  const tmp16 = first1;
  let obj3 = { style: items4, children: items5 };
  items4 = [tmp.container, style];
  let obj4 = {
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
  const tmp15 = closure_11;
  items5 = [, ];
  const length = str.trim().length;
  items5[0] = closure_9(AddFriendByIdInput, obj4);
  if (enabled) {
    let obj5 = { style: tmp.friendMessageContainer, children: null };
    const tmp18 = sourcePage;
    const obj6 = { style: items6, variant: "text-sm/semibold", color: "text-muted", children: intl.string(sourcePage(1126).t.Yi6Mpu) };
    items6 = [, , ];
    ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
    items6[2] = headerTextStyle;
    const Text = sourcePage(5087).Text;
    intl = sourcePage(1126).intl;
    const items7 = [tmp17(Text, obj6), , ];
    const obj7 = { returnKeyType: "done", submitBehavior: "submit", value: first2, maxLength: 120, onSubmitEditing: handleSubmitEditing, onChange: callback1, status: str2 };
    str2 = undefined;
    const TextArea = sourcePage(6770).TextArea;
    const tmp19 = constants2;
    if (first1.field === constants2.MESSAGE) {
      if (first1.status === tmp4.ERROR) {
        str2 = "error";
      }
    }
    items7[1] = closure_9(TextArea, obj7);
    if (first1.status === tmp4.ERROR) {
      let tmp17Result;
      if (first1.field === tmp19.MESSAGE) {
        const obj8 = { errorMessage: first1.message };
        tmp17Result = tmp17(closure_15, obj8);
      }
      items7[2] = tmp17Result;
      obj5.children = items7;
      enabled = tmp14(tmp16, obj5);
    }
    const obj9 = { style: tmp.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: intl2.string(tmp18(1126).t.UtfQNw) };
    const Text2 = tmp18(5087).Text;
    intl2 = tmp18(1126).intl;
    tmp17Result = tmp17(Text2, obj9);
  }
  const obj10 = { children: items8 };
  items5[1] = enabled;
  items8 = [tmp14(tmp16, obj3), , ];
  const obj11 = { style: tmp.redesignGrow };
  items8[1] = closure_9(tmp16, obj11);
  const obj12 = { size: "lg", text: intl3.string(sourcePage(1126).t["PMsq/b"]), disabled: length <= 0, onPress: handleSubmitEditing, loading: first1.status === tmp4.LOADING, grow: false };
  const Button = sourcePage(5376).Button;
  intl3 = sourcePage(1126).intl;
  items8[2] = closure_9(Button, obj12);
  return tmp14(tmp15, obj10);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default tmp6;
