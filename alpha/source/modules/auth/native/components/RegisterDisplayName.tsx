// Module ID: 16302
// Function ID: 16303
// Name: RegisterDisplayName
// Dependencies: [5, 32, 19, 17, 14904, 16281, 16282, 21, 5091, 587, 1126, 558, 576, 6624, 1503, 16278, 16280, 1105, 16298, 16297, 14210, 14905, 7082, 6637, 6290, 5376, 6652, 6727, 2]

// Module 16302 (RegisterDisplayName)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14904 */;
import RegistrationUIStore from "RegistrationUIStore" /* 16281 */;
import RegistrationConstants from "RegistrationConstants" /* 16282 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation, setOptionsResult;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
function getGlobalNameError(first1) {
  if (closure_16.includes(first1)) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t.WeJZyy);
  } else {
    for (const item10009 of closure_15) {
      let formatted = first1.toLowerCase();
      if (formatted.includes(item10009)) {
        let intl = intl5.intl;
        let stringResult = intl.string(intl5.t.WeJZyy);
        obj.return();
        return stringResult;
      }
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ updateRegistrationOptions: metroImportAll, useRegistrationUIStore: c9 } = RegistrationUIStore);
({ RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: unpackModuleId } = RegistrationConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { globalName: obj2, button: obj3, page: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function RegisterDisplayName() {
  let closure_3;
  let closure_5;
  let context;
  let first;
  let first1;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp20;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp = navigation;
  let obj = navigation(first1[12]);
  const cResult = obj.c(55);
  const tmp4 = closure_14();
  let tmp5 = importDefault;
  const tmp6 = require("useWideAuthView")();
  let obj2 = navigation(first1[14]);
  navigation = obj2.useNavigation();
  const obj3 = react;
  [tmp10, importDefault] = context(react.useState(false), 2);
  const tmp8 = context;
  const tmp9 = context(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(errors) {
      return errors.errors;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp12 = state(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      let str = state.getState().registrationOptions.globalName;
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[1] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[1];
  }
  const tmp8Result = tmp8(obj3.useState(tmp13), 2);
  first1 = tmp8Result[0];
  _asyncToGenerator = tmp8Result[1];
  if (cResult[2] !== first1) {
    const tmp18 = getGlobalNameError(first1);
    cResult[2] = first1;
    cResult[3] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[3];
  }
  context = obj3.useContext(tmp(tmp2[15]).TrackRegistrationContext);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(first1[16]);
    const previousRegistrationTransitionStep = tmpResult.getPreviousRegistrationTransitionStep(tmp(tmp2[17]).AuthStates.REGISTER_DISPLAY_NAME);
    cResult[4] = previousRegistrationTransitionStep;
    tmp20 = previousRegistrationTransitionStep;
  } else {
    tmp20 = cResult[4];
  }
  tmp5(first1[18])(tmp20);
  const tmp5Result = tmp5(first1[19]);
  tmp5Result(tmp(first1[17]).AuthStates.REGISTER_DISPLAY_NAME);
  if (cResult[5] !== context) {
    const fn3 = function j() {
      const obj = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: unpackModuleId.VIEWED };
      context(obj);
    };
    const items = [context];
    cResult[5] = context;
    cResult[6] = fn3;
    cResult[7] = items;
    tmp26 = items;
    tmp25 = fn3;
  } else {
    tmp25 = cResult[6];
    tmp26 = cResult[7];
  }
  const effect = obj3.useEffect(tmp25, tmp26);
  const ref = obj3.useRef(null);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { inputRef: ref };
    cResult[8] = obj4;
    tmp29 = obj4;
  } else {
    tmp29 = cResult[8];
  }
  tmp5(first1[20])(tmp29);
  if (cResult[9] === navigation) {
    let tmp31;
    if (cResult[10] === context) {
      tmp31 = cResult[11];
    }
    react = tmp31;
    if (cResult[12] === tmp31) {
      let tmp32;
      let tmp33;
      let tmp36;
      if (cResult[13] === navigation) {
        tmp32 = cResult[14];
        tmp33 = cResult[15];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp32, tmp33);
      const _Symbol = Symbol;
      class K {
        constructor() {
          obj = {
            headerRight() {
                      let intl;
                      const obj = {
                        text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                        onPress() {
                          return closure_1_5(null);
                        }
                      };
                      const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                      intl = navigation(first1[10]).intl;
                      return closure_2_12(HeaderActionButton, obj);
                    }
          };
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
      if (tmp35 === Symbol.for("react.memo_cache_sentinel")) {
        function handleChange(str) {
          str = "";
          const tmp = closure_3;
          tmp(str);
        }
        cResult[16] = handleChange;
        class K {
          constructor() {
            obj = {
              headerRight() {
                          let intl;
                          const obj = {
                            text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                            onPress() {
                              return closure_1_5(null);
                            }
                          };
                          const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                          intl = navigation(first1[10]).intl;
                          return closure_2_12(HeaderActionButton, obj);
                        }
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
      } else {
        tmp36 = cResult[16];
      }
      if (cResult[17] === tmp12) {
        let tmp37;
        if (cResult[18] === tmp16) {
          tmp37 = cResult[19];
        }
        const _Symbol2 = Symbol;
        class K {
          constructor() {
            obj = {
              headerRight() {
                          let intl;
                          const obj = {
                            text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                            onPress() {
                              return closure_1_5(null);
                            }
                          };
                          const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                          intl = navigation(first1[10]).intl;
                          return closure_2_12(HeaderActionButton, obj);
                        }
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        if (cResult[21] === first1) {
          let tmp42;
          let tmp45;
          if (cResult[22] === tmp31) {
            tmp42 = cResult[23];
          }
          const _Symbol3 = Symbol;
          class K {
            constructor() {
              obj = {
                headerRight() {
                              let intl;
                              const obj = {
                                text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                onPress() {
                                  return closure_1_5(null);
                                }
                              };
                              const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                              intl = navigation(first1[10]).intl;
                              return closure_2_12(HeaderActionButton, obj);
                            }
              };
              setOptionsResult = closure_0.setOptions(obj);
              return;
            }
          }
          if (cResult[25] !== tmp37) {
            let stringResult;
            if (null == tmp37) {
              let intl = tmp(tmp2[10]).intl;
              stringResult = intl.string(tmp(tmp2[10]).t.fbKwSs);
            }
            class K {
              constructor() {
                obj = {
                  headerRight() {
                                  let intl;
                                  const obj = {
                                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                    onPress() {
                                      return closure_1_5(null);
                                    }
                                  };
                                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                  intl = navigation(first1[10]).intl;
                                  return closure_2_12(HeaderActionButton, obj);
                                }
                };
                setOptionsResult = closure_0.setOptions(obj);
                return;
              }
            }
            cResult[26] = stringResult;
            tmp45 = stringResult;
          } else {
            tmp45 = cResult[26];
          }
          if (cResult[27] === first1) {
            if (cResult[28] === tmp37) {
              if (cResult[29] === tmp42) {
                let tmp47;
                if (cResult[30] === tmp45) {
                  tmp47 = cResult[31];
                }
                if (cResult[32] === tmp4.globalName) {
                  let tmp50;
                  let tmp54;
                  if (cResult[33] === tmp47) {
                    tmp50 = cResult[34];
                  }
                  const _Symbol4 = Symbol;
                  const button = tmp4.button;
                  class K {
                    constructor() {
                      obj = {
                        headerRight() {
                                              let intl;
                                              const obj = {
                                                text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                onPress() {
                                                  return closure_1_5(null);
                                                }
                                              };
                                              const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                              intl = navigation(first1[10]).intl;
                                              return closure_2_12(HeaderActionButton, obj);
                                            }
                      };
                      setOptionsResult = closure_0.setOptions(obj);
                      return;
                    }
                  }
                  if (tmp53 === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[10]).intl;
                    const stringResult1 = intl2.string(tmp(first1[10]).t.PDTjLN);
                    class K {
                      constructor() {
                        obj = {
                          headerRight() {
                                                  let intl;
                                                  const obj = {
                                                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                    onPress() {
                                                      return closure_1_5(null);
                                                    }
                                                  };
                                                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                  intl = navigation(first1[10]).intl;
                                                  return closure_2_12(HeaderActionButton, obj);
                                                }
                        };
                        setOptionsResult = closure_0.setOptions(obj);
                        return;
                      }
                    }
                    cResult[35] = stringResult1;
                    tmp54 = stringResult1;
                  } else {
                    tmp54 = cResult[35];
                  }
                  if (cResult[36] === first1) {
                    let tmp56;
                    if (cResult[37] === tmp31) {
                      tmp56 = cResult[38];
                    }
                    if (cResult[39] === first1) {
                      let tmp57;
                      if (cResult[40] === tmp16) {
                        tmp57 = cResult[41];
                      }
                      if (cResult[42] === tmp10) {
                        if (cResult[43] === tmp56) {
                          let tmp59;
                          if (cResult[44] === tmp57) {
                            tmp59 = cResult[45];
                          }
                          if (cResult[46] === tmp4.button) {
                            let tmp63;
                            if (cResult[47] === tmp59) {
                              tmp63 = cResult[48];
                            }
                            if (cResult[49] === tmp50) {
                              let tmp66;
                              if (cResult[50] === tmp63) {
                                tmp66 = cResult[51];
                              }
                              if (!tmp6) {
                                const obj5 = { style: null, children: tmp66 };
                                class K {
                                  constructor() {
                                    obj = {
                                      headerRight() {
                                                                          let intl;
                                                                          const obj = {
                                                                            text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                                            onPress() {
                                                                              return closure_1_5(null);
                                                                            }
                                                                          };
                                                                          const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                                          intl = navigation(first1[10]).intl;
                                                                          return closure_2_12(HeaderActionButton, obj);
                                                                        }
                                    };
                                    setOptionsResult = closure_0.setOptions(obj);
                                    return;
                                  }
                                }
                                const tmp73 = closure_12(tmp5(first1[27]), obj5);
                                cResult[52] = tmp66;
                                cResult[53] = tmp4.page;
                                cResult[54] = tmp73;
                              }
                              class K {
                                constructor() {
                                  obj = {
                                    headerRight() {
                                                                      let intl;
                                                                      const obj = {
                                                                        text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                                        onPress() {
                                                                          return closure_1_5(null);
                                                                        }
                                                                      };
                                                                      const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                                      intl = navigation(first1[10]).intl;
                                                                      return closure_2_12(HeaderActionButton, obj);
                                                                    }
                                  };
                                  setOptionsResult = closure_0.setOptions(obj);
                                  return;
                                }
                              }
                            }
                            class K {
                              constructor() {
                                obj = {
                                  headerRight() {
                                                                  let intl;
                                                                  const obj = {
                                                                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                                    onPress() {
                                                                      return closure_1_5(null);
                                                                    }
                                                                  };
                                                                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                                  intl = navigation(first1[10]).intl;
                                                                  return closure_2_12(HeaderActionButton, obj);
                                                                }
                                };
                                setOptionsResult = closure_0.setOptions(obj);
                                return;
                              }
                            }
                            tmp68[0] = tmp40;
                            const items1 = [tmp50, tmp63];
                            tmp68[1] = items1;
                            const tmp69 = closure_13(tmp5(first1[26]), tmp68);
                            cResult[49] = tmp50;
                            cResult[50] = tmp63;
                            cResult[51] = tmp69;
                            tmp66 = tmp69;
                          }
                          class K {
                            constructor() {
                              obj = {
                                headerRight() {
                                                              let intl;
                                                              const obj = {
                                                                text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                                onPress() {
                                                                  return closure_1_5(null);
                                                                }
                                                              };
                                                              const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                              intl = navigation(first1[10]).intl;
                                                              return closure_2_12(HeaderActionButton, obj);
                                                            }
                              };
                              setOptionsResult = closure_0.setOptions(obj);
                              return;
                            }
                          }
                          let obj6 = { style: button, children: tmp59 };
                          const tmp65 = closure_12(View, obj6);
                          cResult[46] = tmp4.button;
                          cResult[47] = tmp59;
                          cResult[48] = tmp65;
                          tmp63 = tmp65;
                        }
                      }
                      class K {
                        constructor() {
                          obj = {
                            headerRight() {
                                                      let intl;
                                                      const obj = {
                                                        text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                        onPress() {
                                                          return closure_1_5(null);
                                                        }
                                                      };
                                                      const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                      intl = navigation(first1[10]).intl;
                                                      return closure_2_12(HeaderActionButton, obj);
                                                    }
                          };
                          setOptionsResult = closure_0.setOptions(obj);
                          return;
                        }
                      }
                      tmp61[1] = tmp10;
                      tmp61[2] = tmp54;
                      tmp61[3] = tmp56;
                      tmp61[4] = tmp57;
                      const tmp62 = closure_12(tmp(first1[25]).Button, tmp61);
                      cResult[42] = tmp10;
                      cResult[43] = tmp56;
                      cResult[44] = tmp57;
                      cResult[45] = tmp62;
                      tmp59 = tmp62;
                    }
                    class K {
                      constructor() {
                        obj = {
                          headerRight() {
                                                  let intl;
                                                  const obj = {
                                                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                                    onPress() {
                                                      return closure_1_5(null);
                                                    }
                                                  };
                                                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                                  intl = navigation(first1[10]).intl;
                                                  return closure_2_12(HeaderActionButton, obj);
                                                }
                        };
                        setOptionsResult = closure_0.setOptions(obj);
                        return;
                      }
                    }
                    cResult[39] = first1;
                    cResult[40] = tmp16;
                    cResult[41] = null != tmp16;
                    tmp57 = tmp58;
                  }
                  function ie() {
                    return closure_5(first1);
                  }
                  cResult[36] = first1;
                  cResult[37] = tmp31;
                  cResult[38] = ie;
                  tmp56 = ie;
                }
                class K {
                  constructor() {
                    obj = {
                      headerRight() {
                                          let intl;
                                          const obj = {
                                            text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                            onPress() {
                                              return closure_1_5(null);
                                            }
                                          };
                                          const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                          intl = navigation(first1[10]).intl;
                                          return closure_2_12(HeaderActionButton, obj);
                                        }
                    };
                    setOptionsResult = closure_0.setOptions(obj);
                    return;
                  }
                }
                let obj7 = { style: tmp41, children: tmp47 };
                const tmp52 = closure_12(View, obj7);
                cResult[32] = tmp4.globalName;
                cResult[33] = tmp47;
                cResult[34] = tmp52;
                tmp50 = tmp52;
              }
            }
          }
          let obj8 = { ref, value: first1, onChange: tmp36, returnKeyType: "next", onSubmitEditing: tmp42, textContentType: "nickname", errorMessage: tmp37, label: tmp44, description: tmp45, clearable: true };
          const tmp49 = closure_12(tmp(first1[24]).TextInput, obj8);
          cResult[27] = first1;
          cResult[28] = tmp37;
          cResult[29] = tmp42;
          cResult[30] = tmp45;
          cResult[31] = tmp49;
          tmp47 = tmp49;
        }
        const fn4 = function q() {
          return closure_5(first1);
        };
        cResult[21] = first1;
        cResult[22] = tmp31;
        cResult[23] = fn4;
        tmp42 = fn4;
      }
      let str = "global_name";
      let tmp38 = tmp5(tmp2[23])("global_name", tmp12);
      if (tmp38 == null) {
        tmp38 = tmp16;
      }
      cResult[17] = tmp12;
      cResult[18] = tmp16;
      cResult[19] = tmp38;
      tmp37 = tmp38;
    }
    class K {
      constructor() {
        obj = {
          headerRight() {
                  let intl;
                  const obj = {
                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                    onPress() {
                      return closure_1_5(null);
                    }
                  };
                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                  intl = navigation(first1[10]).intl;
                  return closure_2_12(HeaderActionButton, obj);
                }
        };
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const items2 = [tmp31, navigation];
    cResult[12] = tmp31;
    cResult[13] = navigation;
    cResult[14] = K;
    cResult[15] = items2;
    tmp33 = items2;
    tmp32 = K;
  }
  _require = _asyncToGenerator(async (globalName) => {
    let closure_1;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = state.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              closure_1_4(obj7);
              const tmp5 = null != registrationOptions.username && "" !== registrationOptions.username;
              if (!tmp5) {
                tmp(true);
                if (!closure_2_7.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj2.fetchSuggestionsRegistration(globalName), done: false };
                  obj2 = closure_2_1(first1[21]);
                  return obj8;
                }
              }
              const obj4 = globalName(first1[16]);
              const result = obj4.handleNextOrSubmitRegistration(globalName(first1[17]).AuthStates.REGISTER_DISPLAY_NAME, globalName, closure_1_4);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          tmp(false);
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    })();
  });
  function t7() {
    return closure_0(...arguments);
  }
  cResult[9] = navigation;
  cResult[10] = context;
  cResult[11] = t7;
  tmp31 = t7;
}) : (function RegisterDisplayName() {
  let Button;
  let TextInput;
  let callback;
  let closure_1;
  let closure_3;
  let context;
  let intl;
  let intl2;
  let intl4;
  let items3;
  let obj5;
  let obj7;
  let str;
  let stringResult;
  let tmp28;
  let tmp = closure_14();
  const tmp3 = str;
  let tmp5 = navigation;
  const tmp4 = require("useWideAuthView")();
  let obj = navigation(str[14]);
  navigation = obj.useNavigation();
  const tmp7 = context(callback.useState(false), 2);
  importDefault = tmp7[1];
  const first = tmp7[0];
  const tmp9 = state((errors) => errors.errors);
  const tmp10 = context(callback.useState(() => {
    str = state.getState().registrationOptions.globalName;
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  str = tmp10[0];
  _asyncToGenerator = tmp10[1];
  const tmp11 = getGlobalNameError(str);
  context = callback.useContext(navigation(str[15]).TrackRegistrationContext);
  const tmp13 = require("useAuthFlowBackHandler");
  let obj2 = navigation(str[16]);
  tmp13(obj2.getPreviousRegistrationTransitionStep(navigation(str[17]).AuthStates.REGISTER_DISPLAY_NAME));
  const tmp15 = require("useInitialRegistrationStep");
  tmp15(navigation(str[17]).AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = callback.useEffect(() => {
    const obj = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: unpackModuleId.VIEWED };
    context(obj);
  }, items);
  const ref = callback.useRef(null);
  require("useFocusRefOnNavigation")({ inputRef: ref });
  const useCallback = callback.useCallback;
  let closure_0 = _asyncToGenerator(async (globalName) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = state.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              closure_1_4(obj7);
              const tmp5 = null != registrationOptions.username && "" !== registrationOptions.username;
              if (!tmp5) {
                tmp(true);
                if (!closure_2_7.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj2.fetchSuggestionsRegistration(globalName), done: false };
                  obj2 = closure_2_1(str[21]);
                  return obj8;
                }
              }
              const obj4 = globalName(str[16]);
              const result = obj4.handleNextOrSubmitRegistration(globalName(str[17]).AuthStates.REGISTER_DISPLAY_NAME, globalName, closure_1_4);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          tmp(false);
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    })();
  });
  const items1 = [navigation, context];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [callback, navigation];
  const layoutEffect = callback.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let intl;
        const obj = {
          text: intl.string(navigation(str[10]).t["5Wxrcd"]),
          onPress() {
            return closure_1_5(null);
          }
        };
        const HeaderActionButton = navigation(str[22]).HeaderActionButton;
        intl = navigation(str[10]).intl;
        return closure_2_12(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  let tmp22 = require("getError")("global_name", tmp9);
  if (tmp22 == null) {
    tmp22 = tmp11;
  }
  const obj3 = { headerText: intl.string(tmp5(tmp3[10]).t.LYIh7j), children: items3 };
  const tmp2Result = require("AuthFormView");
  intl = tmp5(tmp3[10]).intl;
  let obj4 = { style: tmp.globalName, children: tmp25(TextInput, obj5) };
  obj5 = {
    ref,
    value: str,
    onChange: function handleChange(str) {
      str = "";
      const tmp = closure_3;
      tmp(str);
    },
    returnKeyType: "next",
    onSubmitEditing() {
      return callback(str);
    },
    textContentType: "nickname",
    errorMessage: tmp22,
    label: intl2.string(tmp5(tmp3[10]).t["9AjdkD"]),
    description: stringResult,
    clearable: true
  };
  TextInput = tmp5(tmp3[24]).TextInput;
  intl2 = tmp5(tmp3[10]).intl;
  stringResult = undefined;
  const tmp23 = closure_13;
  if (null == tmp22) {
    const intl3 = tmp5(tmp3[10]).intl;
    stringResult = intl3.string(tmp5(tmp3[10]).t.fbKwSs);
  }
  items3 = [tmp25(tmp26, obj4), ];
  let obj6 = { style: tmp.button, children: tmp25(Button, obj7) };
  obj7 = {
    size: "lg",
    loading: first,
    text: intl4.string(tmp5(tmp3[10]).t.PDTjLN),
    onPress() {
      return callback(str);
    },
    disabled: tmp28
  };
  Button = tmp5(tmp3[25]).Button;
  intl4 = tmp5(tmp3[10]).intl;
  tmp28 = null != tmp11;
  if (!tmp28) {
    tmp28 = "" === str.trim();
  }
  items3[1] = closure_12(View, obj6);
  const tmp23Result = tmp23(tmp2Result, obj3);
  let tmp25Result = tmp23Result;
  if (!tmp4) {
    let obj8 = { style: tmp.page, children: tmp23Result };
    tmp25Result = tmp25(tmp2(tmp3[27]), obj8);
  }
  return tmp25Result;
});
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default tmp6;
