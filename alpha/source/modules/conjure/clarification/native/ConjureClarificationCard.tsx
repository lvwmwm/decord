// Module ID: 17168
// Function ID: 17169
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 5091, 587, 1126, 3827, 558, 576, 17169, 17170, 17171, 5087, 8114, 6212, 17172, 6269, 6183, 6188, 6290, 5376, 17080, 2]

// Module 17168 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 17171 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap, id, tmp8;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const f127977 = (item) => "" !== item;
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let closure_9 = [];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(onSubmit) {
  let answeredOptionIdsResult;
  let clarification;
  let closure_4;
  let closure_5;
  let disabled;
  let first;
  let first1;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let obj18;
  let optionHeader;
  let projectId;
  let string;
  let tmp10;
  let tmp13;
  let tmp21;
  let w1nRmT;
  let tmp = clarification;
  let tmp2 = dependencyMap;
  let obj = clarification(576);
  const cResult = obj.c(80);
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let tmp4 = disabled();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  let tmp7 = first1(react.useState(first), 2);
  first1 = tmp7[0];
  react = tmp9;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    tmp10 = obj4;
  } else {
    tmp10 = cResult[1];
  }
  const tmp6Result = first1(obj3.useState(tmp10), 2);
  View = tmp6Result[1];
  const first2 = tmp6Result[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  const tmp6Result3 = first1(obj3.useState(tmp13), 2);
  let closure_6 = tmp6Result3[1];
  const first3 = tmp6Result3[0];
  const tmp6Result4 = first1(obj3.useState(0), 2);
  let closure_7 = tmp6Result4[1];
  disabled = tmp17;
  const bound = Math.min(tmp6Result4[0], length - 1);
  id = tmp19;
  let closure_11 = tmp20;
  if (cResult[3] !== clarification.questions[bound]) {
    const tmpResult = tmp(17169);
    const isImageQuestionResult = tmpResult.isImageQuestion(clarification.questions[bound]);
    cResult[3] = clarification.questions[bound];
    cResult[4] = isImageQuestionResult;
    tmp21 = isImageQuestionResult;
  } else {
    tmp21 = cResult[4];
  }
  let closure_12 = tmp21;
  if (true === clarification.questions[bound].multi_select) {
    let tmp24 = first3[tmp19.id];
    if (tmp24 == null) {
      tmp24 = bound;
    }
    answeredOptionIdsResult = tmp24;
  } else {
    const tmpResult4 = tmp(17169);
    answeredOptionIdsResult = tmpResult4.answeredOptionIds(first1[tmp19.id]);
  }
  const tmpResult5 = tmp(17170);
  const conjureOwnImages = tmpResult5.useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[5] === first1) {
    if (cResult[6] === clarification) {
      if (cResult[7] === bound) {
        if (cResult[8] === onSubmit) {
          let tmp25;
          if (cResult[9] === clarification.questions[bound].id) {
            tmp25 = cResult[10];
          }
          let closure_14 = tmp25;
          if (cResult[11] === true === clarification.questions[bound].multi_select) {
            if (cResult[12] === tmp21) {
              if (cResult[13] === clarification.questions[bound]) {
                let tmp26;
                if (cResult[14] === tmp25) {
                  tmp26 = cResult[15];
                }
                let closure_15 = tmp26;
                if (cResult[16] === null == onSubmit) {
                  let tmp27;
                  if (cResult[17] === bound) {
                    tmp27 = cResult[18];
                  }
                  let str = first2[tmp19.id];
                  if (str == null) {
                    str = "";
                  }
                  class Z {
                    constructor() {
                      const tmp = disabled || 0 === bound;
                      if (!tmp) {
                        closure_7(bound - 1);
                      }
                    }
                  }
                  let multiSelectAnswerResult = null;
                  if (true === clarification.questions[bound].multi_select) {
                    const multiSelectAnswer = tmp(17171).multiSelectAnswer;
                    const tmpResult6 = tmp(17171);
                    class Z {
                      constructor() {
                        const tmp = disabled || 0 === bound;
                        if (!tmp) {
                          closure_7(bound - 1);
                        }
                      }
                    }
                    multiSelectAnswerResult = multiSelectAnswer(tmp19, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp19));
                  }
                  if (cResult[19] === str) {
                    if (cResult[20] === multiSelectAnswerResult) {
                      let tmp33;
                      let tmp35;
                      if (cResult[21] === tmp25) {
                        tmp33 = cResult[22];
                      }
                      if (cResult[23] === first1) {
                        if (cResult[24] === str) {
                          if (cResult[25] === multiSelectAnswerResult) {
                            let tmp34;
                            let tmp39;
                            if (cResult[26] === clarification.questions[bound].id) {
                              tmp34 = cResult[27];
                            }
                            let closure_18 = tmp34;
                            if (cResult[28] === bound) {
                              let tmp38;
                              let tmp42;
                              if (cResult[29] === clarification.questions.length) {
                                tmp38 = cResult[30];
                              }
                              if (cResult[31] !== clarification.questions[bound].question) {
                                let obj6 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
                                class Z {
                                  constructor() {
                                    const tmp = disabled || 0 === bound;
                                    if (!tmp) {
                                      closure_7(bound - 1);
                                    }
                                  }
                                }
                                cResult[31] = clarification.questions[bound].question;
                                cResult[32] = tmp44;
                                tmp42 = tmp44;
                              } else {
                                tmp42 = cResult[32];
                              }
                              if (cResult[33] === tmp4.customField) {
                                if (cResult[34] === tmp38) {
                                  let tmp45;
                                  let tmp48;
                                  if (cResult[35] === tmp42) {
                                    tmp45 = cResult[36];
                                  }
                                  if (cResult[37] !== onDismiss) {
                                    let tmp49 = null;
                                    if (null != onDismiss) {
                                      const obj7 = { variant: "tertiary", size: "sm", icon: null, onPress: onDismiss, accessibilityLabel: intl.string(onSubmit(3827).qVXlk0) };
                                      const IconButton = tmp(8114).IconButton;
                                      class Z {
                                        constructor() {
                                          const tmp = disabled || 0 === bound;
                                          if (!tmp) {
                                            closure_7(bound - 1);
                                          }
                                        }
                                      }
                                      intl = tmp(1126).intl;
                                      tmp49 = closure_6(IconButton, obj7);
                                    }
                                    class Z {
                                      constructor() {
                                        const tmp = disabled || 0 === bound;
                                        if (!tmp) {
                                          closure_7(bound - 1);
                                        }
                                      }
                                    }
                                    cResult[38] = tmp49;
                                    tmp48 = tmp49;
                                  } else {
                                    tmp48 = cResult[38];
                                  }
                                  if (cResult[39] === tmp4.footer) {
                                    if (cResult[40] === tmp45) {
                                      let tmp52;
                                      let tmp55;
                                      if (cResult[41] === tmp48) {
                                        tmp52 = cResult[42];
                                      }
                                      if (cResult[43] !== (true === clarification.questions[bound].multi_select)) {
                                        let tmp56 = null;
                                        if (true === clarification.questions[bound].multi_select) {
                                          const obj8 = { variant: "text-xs/normal", color: "text-muted", children: obj19.string(onSubmit(3827).tE8qbz) };
                                          const Text2 = tmp(5087).Text;
                                          class Z {
                                            constructor() {
                                              const tmp = disabled || 0 === bound;
                                              if (!tmp) {
                                                closure_7(bound - 1);
                                              }
                                            }
                                          }
                                          tmp56 = closure_6(Text2, obj8);
                                        }
                                        class Z {
                                          constructor() {
                                            const tmp = disabled || 0 === bound;
                                            if (!tmp) {
                                              closure_7(bound - 1);
                                            }
                                          }
                                        }
                                        cResult[44] = tmp56;
                                        tmp55 = tmp56;
                                      } else {
                                        tmp55 = cResult[44];
                                      }
                                      if (cResult[45] === null == onSubmit) {
                                        if (cResult[46] === tmp26) {
                                          if (cResult[47] === true === clarification.questions[bound].multi_select) {
                                            if (cResult[48] === conjureOwnImages) {
                                              if (cResult[49] === tmp21) {
                                                if (cResult[50] === projectId) {
                                                  if (cResult[51] === clarification.questions[bound]) {
                                                    if (cResult[52] === answeredOptionIdsResult) {
                                                      let tmp59;
                                                      if (cResult[53] === tmp4.optionHeader) {
                                                        tmp59 = cResult[54];
                                                      }
                                                      if (cResult[55] === tmp33) {
                                                        if (cResult[56] === str) {
                                                          if (cResult[57] === tmp21) {
                                                            if (cResult[58] === clarification.questions[bound].id) {
                                                              let tmp61;
                                                              if (cResult[59] === clarification.questions[bound].question) {
                                                                tmp61 = cResult[60];
                                                              }
                                                              if (cResult[61] === null == onSubmit) {
                                                                if (cResult[62] === tmp27) {
                                                                  if (cResult[63] === bound) {
                                                                    if (cResult[64] === true === clarification.questions[bound].multi_select) {
                                                                      if (cResult[65] === tmp34) {
                                                                        if (cResult[66] === tmp21) {
                                                                          if (cResult[67] === tmp25) {
                                                                            if (cResult[68] === tmp4.customField) {
                                                                              if (cResult[69] === tmp4.footer) {
                                                                                if (cResult[70] === bound === tmp37) {
                                                                                  if (cResult[73] === tmp4.card) {
                                                                                    if (cResult[74] === tmp52) {
                                                                                      if (cResult[75] === tmp55) {
                                                                                        if (cResult[76] === tmp59) {
                                                                                          if (cResult[77] === tmp61) {
                                                                                            let tmp74;
                                                                                            if (cResult[78] === tmp64) {
                                                                                              tmp74 = cResult[79];
                                                                                            }
                                                                                            return tmp74;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  class Z {
                                                                                    constructor() {
                                                                                      const tmp = disabled || 0 === bound;
                                                                                      if (!tmp) {
                                                                                        closure_7(bound - 1);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  const obj9 = { style: tmp4.card, children: items };
                                                                                  items = [tmp52, tmp55, tmp59, tmp61, tmp64];
                                                                                  const tmp76 = closure_7(onSubmit(17080), obj9);
                                                                                  cResult[73] = tmp4.card;
                                                                                  cResult[74] = tmp52;
                                                                                  cResult[75] = tmp55;
                                                                                  cResult[76] = tmp59;
                                                                                  cResult[77] = tmp61;
                                                                                  cResult[78] = tmp64;
                                                                                  cResult[79] = tmp76;
                                                                                  tmp74 = tmp76;
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
                                                              class Z {
                                                                constructor() {
                                                                  const tmp = disabled || 0 === bound;
                                                                  if (!tmp) {
                                                                    closure_7(bound - 1);
                                                                  }
                                                                }
                                                              }
                                                              let tmp68 = null;
                                                              const obj10 = { style: tmp4.footer, children: items1 };
                                                              const tmp66 = closure_7;
                                                              if (bound > 0) {
                                                                tmp68 = null;
                                                                if (null != onSubmit) {
                                                                  const obj11 = { variant: "tertiary", size: "sm", text: obj22.string(onSubmit(3827).Pk5lfA), onPress: tmp27 };
                                                                  const Button = tmp(5376).Button;
                                                                  class Z {
                                                                    constructor() {
                                                                      const tmp = disabled || 0 === bound;
                                                                      if (!tmp) {
                                                                        closure_7(bound - 1);
                                                                      }
                                                                    }
                                                                  }
                                                                  tmp68 = closure_6(Button, obj11);
                                                                }
                                                              }
                                                              items1 = [tmp68, , ];
                                                              const obj13 = { style: tmp4.customField };
                                                              items1[1] = closure_6(View, obj13);
                                                              let tmp72 = tmp17;
                                                              const Button2 = tmp(5376).Button;
                                                              const tmp71 = closure_6;
                                                              if (null != onSubmit) {
                                                                tmp72 = null == tmp34;
                                                              }
                                                              const obj14 = {
                                                                variant: "primary",
                                                                size: "sm",
                                                                disabled: tmp72,
                                                                text: string(w1nRmT),
                                                                onPress() {
                                                                                                                              if (null != closure_18) {
                                                                                                                                closure_14(tmp);
                                                                                                                              }
                                                                                                                            }
                                                              };
                                                              let intl2 = tmp(1126).intl;
                                                              string = intl2.string;
                                                              if (bound === tmp37) {
                                                                w1nRmT = tmp(1126).t.geKm7t;
                                                              } else {
                                                                w1nRmT = onSubmit(3827).w1nRmT;
                                                              }
                                                              items1[2] = tmp71(Button2, obj14);
                                                              tmp66(View, obj10);
                                                            }
                                                          }
                                                        }
                                                      }
                                                      class Z {
                                                        constructor() {
                                                          const tmp = disabled || 0 === bound;
                                                          if (!tmp) {
                                                            closure_7(bound - 1);
                                                          }
                                                        }
                                                      }
                                                      cResult[55] = tmp33;
                                                      cResult[56] = str;
                                                      cResult[57] = tmp21;
                                                      cResult[58] = clarification.questions[bound].id;
                                                      cResult[59] = clarification.questions[bound].question;
                                                      cResult[60] = null;
                                                      tmp61 = tmp62;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      class Z {
                                        constructor() {
                                          const tmp = disabled || 0 === bound;
                                          if (!tmp) {
                                            closure_7(bound - 1);
                                          }
                                        }
                                      }
                                      cResult[45] = null == onSubmit;
                                      cResult[46] = tmp26;
                                      cResult[47] = true === clarification.questions[bound].multi_select;
                                      cResult[48] = conjureOwnImages;
                                      cResult[49] = tmp21;
                                      cResult[50] = projectId;
                                      cResult[51] = clarification.questions[bound];
                                      cResult[52] = answeredOptionIdsResult;
                                      cResult[53] = tmp4.optionHeader;
                                      cResult[54] = tmp60;
                                      tmp59 = tmp60;
                                    }
                                  }
                                  class Z {
                                    constructor() {
                                      const tmp = disabled || 0 === bound;
                                      if (!tmp) {
                                        closure_7(bound - 1);
                                      }
                                    }
                                  }
                                  const obj15 = { style: tmp4.footer, children: items2 };
                                  items2 = [tmp45, tmp48];
                                  const tmp54 = closure_7(View, obj15);
                                  cResult[39] = tmp4.footer;
                                  cResult[40] = tmp45;
                                  cResult[41] = tmp48;
                                  cResult[42] = tmp54;
                                  tmp52 = tmp54;
                                }
                              }
                              class Z {
                                constructor() {
                                  const tmp = disabled || 0 === bound;
                                  if (!tmp) {
                                    closure_7(bound - 1);
                                  }
                                }
                              }
                              const obj16 = { style: tmp4.customField, children: items3 };
                              items3 = [tmp38, tmp42];
                              const tmp47 = closure_7(View, obj16);
                              cResult[33] = tmp4.customField;
                              cResult[34] = tmp38;
                              cResult[35] = tmp42;
                              cResult[36] = tmp47;
                              tmp45 = tmp47;
                            }
                            class Z {
                              constructor() {
                                const tmp = disabled || 0 === bound;
                                if (!tmp) {
                                  closure_7(bound - 1);
                                }
                              }
                            }
                            if (clarification.questions.length > 1) {
                              const obj17 = { variant: "text-xs/semibold", color: "text-muted", children: obj12.formatToPlainString(onSubmit(3827).yzYUjq, obj18) };
                              let Text = tmp(5087).Text;
                              class Z {
                                constructor() {
                                  const tmp = disabled || 0 === bound;
                                  if (!tmp) {
                                    closure_7(bound - 1);
                                  }
                                }
                              }
                              obj18 = { index: bound + 1, total: clarification.questions.length };
                              tmp39 = closure_6(Text, obj17);
                            }
                            cResult[28] = bound;
                            cResult[29] = clarification.questions.length;
                            cResult[30] = tmp39;
                            tmp38 = tmp39;
                          }
                        }
                      }
                      if (null != multiSelectAnswerResult) {
                        class Z {
                          constructor() {
                            const tmp = disabled || 0 === bound;
                            if (!tmp) {
                              closure_7(bound - 1);
                            }
                          }
                        }
                      } else {
                        let str2 = "";
                        if ("" !== str.trim()) {
                          tmp35 = { kind: "custom", text: str.trim() };
                          const obj20 = { kind: "custom", text: str.trim() };
                        } else {
                          tmp35 = first1[tmp19.id];
                          if (tmp35 == null) {
                            tmp35 = null;
                          }
                        }
                      }
                      class Z {
                        constructor() {
                          const tmp = disabled || 0 === bound;
                          if (!tmp) {
                            closure_7(bound - 1);
                          }
                        }
                      }
                      cResult[23] = first1;
                      cResult[24] = str;
                      cResult[25] = multiSelectAnswerResult;
                      cResult[26] = clarification.questions[bound].id;
                      cResult[27] = tmp35;
                      tmp34 = tmp35;
                    }
                  }
                  function ee() {
                    if (null == multiSelectAnswerResult) {
                      const trimmed = closure_1_16.trim();
                      if ("" !== trimmed) {
                        const obj = { kind: "custom", text: trimmed };
                        closure_14(obj);
                      }
                    } else if ("" !== multiSelectAnswerResult.text) {
                      closure_14(multiSelectAnswerResult);
                    }
                  }
                  cResult[19] = str;
                  cResult[20] = multiSelectAnswerResult;
                  cResult[21] = tmp25;
                  cResult[22] = ee;
                  tmp33 = ee;
                }
                class Z {
                  constructor() {
                    const tmp = disabled || 0 === bound;
                    if (!tmp) {
                      closure_7(bound - 1);
                    }
                  }
                }
                cResult[16] = null == onSubmit;
                cResult[17] = bound;
                cResult[18] = Z;
                tmp27 = Z;
              }
            }
          }
          class N {
            constructor(arg0) {
              closure_0 = onSubmit;
              tmp = closure_11;
              if (tmp) {
                tmp9 = closure_6;
                tmp10 = closure_6((arr) => {
                  obj = {};
                  const merged = Object.assign(arr);
                  id = user.id;
                  let tmp4 = arr[user.id];
                  const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
                  ConjureClarification;
                  const tmp2 = user;
                  if (tmp4 == null) {
                    tmp4 = closure_9;
                  }
                  obj[id] = toggleClarificationOption(tmp2, tmp4, id.id);
                  return obj;
                });
              } else {
                tmp2 = closure_5;
                tmp3 = closure_5((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = "";
                  return obj;
                });
                obj = { kind: "option", optionId: null, text: null };
                ({ id: obj.optionId, label: obj.text } = onSubmit);
                closure_1 = obj;
                tmp4 = closure_12;
                if (tmp4) {
                  tmp7 = closure_4;
                  tmp8 = closure_4((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = obj;
                    return obj;
                  });
                } else {
                  tmp5 = closure_14;
                  tmp6 = closure_14(obj);
                }
              }
              return;
            }
          }
          cResult[11] = true === clarification.questions[bound].multi_select;
          cResult[12] = tmp21;
          cResult[13] = clarification.questions[bound];
          cResult[14] = tmp25;
          cResult[15] = N;
          tmp26 = N;
        }
      }
    }
  }
  class M {
    constructor(arg0) {
      if (null != onSubmit) {
        const obj = {};
        const merged = Object.assign(first1);
        obj[id.id] = arg0;
        closure_4(obj);
        const obj5 = ConjureClarification;
        const result = obj5.followingClarificationStep(clarification, obj, bound);
        if (null == result) {
          const tmp14Result = ConjureClarification;
          const result1 = tmp14Result.formatClarificationAnswers(tmp16, obj);
          if ("" !== result1) {
            const tmp14Result3 = ConjureClarification;
            const result2 = tmp14Result3.clarificationAnswersPayload(tmp16, obj);
            const tmp14Result4 = ConjureClarification;
            tmp(result1, result2, tmp14Result4.clarificationAnswerAttachments(clarification, obj));
          }
        } else {
          closure_7(result);
        }
      }
    }
  }
  cResult[5] = first1;
  cResult[6] = clarification;
  cResult[7] = bound;
  cResult[8] = onSubmit;
  cResult[9] = clarification.questions[bound].id;
  cResult[10] = M;
  tmp25 = M;
}) : (function ConjureClarificationCard(onSubmit) {
  let _undefined;
  let _undefined2;
  let answeredOptionIdsResult;
  let c5;
  let clarification;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let items5;
  let items7;
  let obj15;
  let obj8;
  let optionHeader;
  let options;
  let projectId;
  let string;
  let tmp28;
  let tmp36Result6;
  let tmp6;
  let w1nRmT;
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let first;
  react = undefined;
  c5 = undefined;
  let disabled;
  let c13;
  let callback;
  let callback1;
  let str;
  let c17;
  let c18;
  let tmp = disabled();
  dependencyMap = tmp;
  let obj = react;
  let tmp2 = first(react.useState({}), 2);
  first = tmp2[0];
  let tmp4 = tmp2[1];
  react = tmp4;
  let tmp5 = first(react.useState({}), 2);
  [tmp6, c5] = tmp5;
  let tmp7 = first(react.useState({}), 2);
  let closure_6 = tmp7[1];
  const first1 = tmp7[0];
  const tmp9 = first(react.useState(0), 2);
  let closure_7 = tmp9[1];
  let tmp10 = null == onSubmit;
  disabled = tmp10;
  const bound = Math.min(tmp9[0], length - 1);
  id = tmp12;
  let closure_11 = tmp13;
  let obj2 = clarification(17169);
  const isImageQuestionResult = obj2.isImageQuestion(clarification.questions[bound]);
  let c12 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let tmp18 = first1[tmp12.id];
    if (tmp18 == null) {
      tmp18 = bound;
    }
    answeredOptionIdsResult = tmp18;
  } else {
    let tmp14Result = tmp14(17169);
    answeredOptionIdsResult = tmp14Result.answeredOptionIds(first[tmp12.id]);
  }
  c13 = answeredOptionIdsResult;
  let tmp14Result3 = tmp14(17170);
  const conjureOwnImages = tmp14Result3.useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, onSubmit, tmp12.id];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const obj5 = ConjureClarification;
      const result = obj5.followingClarificationStep(clarification, obj, bound);
      if (null == result) {
        const tmp14Result = ConjureClarification;
        const result1 = tmp14Result.formatClarificationAnswers(tmp16, obj);
        if ("" !== result1) {
          const tmp14Result3 = ConjureClarification;
          const result2 = tmp14Result3.clarificationAnswersPayload(tmp16, obj);
          const tmp14Result4 = ConjureClarification;
          tmp(result1, result2, tmp14Result4.clarificationAnswerAttachments(clarification, obj));
        }
      } else {
        closure_7(result);
      }
    }
  }, items);
  let items1 = [tmp13, isImageQuestionResult, tmp12, callback];
  callback1 = obj.useCallback((arg0) => {
    let user;
    id = arg0;
    const tmp = closure_11;
    if (tmp) {
      closure_6((arr) => {
        obj = {};
        const merged = Object.assign(arr);
        id = user.id;
        let tmp4 = arr[user.id];
        const toggleClarificationOption = ConjureClarification.toggleClarificationOption;
        ConjureClarification;
        const tmp2 = user;
        if (tmp4 == null) {
          tmp4 = closure_9;
        }
        obj[id] = toggleClarificationOption(tmp2, tmp4, id.id);
        return obj;
      });
    } else {
      let tmp2 = _undefined;
      const tmp3 = _undefined((arg0) => {
        obj = {};
        const merged = Object.assign(arg0);
        obj[user.id] = "";
        return obj;
      });
      let obj = { kind: "option", optionId: null, text: null };
      ({ id: obj.optionId, label: obj.text } = arg0);
      let tmp4 = c12;
      if (tmp4) {
        closure_4((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj[user.id] = obj;
          return obj;
        });
      } else {
        callback(obj);
      }
    }
  }, items1);
  const items2 = [tmp10, bound];
  str = tmp6[tmp12.id];
  const callback2 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_7(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    let tmp14Result4 = tmp14(17171);
    multiSelectAnswerResult = tmp14Result4.multiSelectAnswer(tmp12, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp12));
  }
  c17 = multiSelectAnswerResult;
  const items3 = [str, multiSelectAnswerResult, callback];
  const callback3 = obj.useCallback(() => {
    if (null == _undefined) {
      const trimmed = str.trim();
      if ("" !== trimmed) {
        const obj = { kind: "custom", text: trimmed };
        callback(obj);
      }
    } else if ("" !== _undefined.text) {
      callback(_undefined);
    }
  }, items3);
  if (null != multiSelectAnswerResult) {
    let tmp29 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp29 = multiSelectAnswerResult;
    }
    tmp28 = tmp29;
  } else {
    let str2 = "";
    if ("" !== str.trim()) {
      let obj3 = { kind: "custom", text: str.trim() };
      tmp28 = obj3;
    } else {
      tmp28 = first[tmp12.id];
      if (tmp28 == null) {
        tmp28 = null;
      }
    }
  }
  c18 = tmp28;
  let obj4 = { style: tmp.card, children: null };
  let obj5 = { style: tmp.footer, children: items5 };
  let obj6 = { style: tmp.customField, children: items4 };
  let tmp34 = null;
  const tmp32 = onSubmit(17080);
  if (clarification.questions.length > 1) {
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl.formatToPlainString(onSubmit(3827).yzYUjq, obj8) };
    let Text = tmp14(5087).Text;
    intl = tmp14(1126).intl;
    obj8 = { index: bound + 1, total: clarification.questions.length };
    tmp34 = closure_6(Text, obj7);
  }
  items4 = [tmp34, ];
  const obj9 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
  items4[1] = closure_6(clarification(5087).Text, obj9);
  items5 = [closure_7(c5, obj6), ];
  let tmp36Result = null;
  if (null != onDismiss) {
    const obj10 = { variant: "tertiary", size: "sm", icon: closure_6(clarification(6212).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl2.string(onSubmit(3827).qVXlk0) };
    const IconButton = tmp14(8114).IconButton;
    intl2 = tmp14(1126).intl;
    tmp36Result = tmp36(IconButton, obj10);
  }
  items5[1] = tmp36Result;
  const items6 = [closure_7(c5, obj5), , , , ];
  let tmp36Result5 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj11 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(onSubmit(3827).tE8qbz) };
    const Text2 = tmp14(5087).Text;
    intl3 = tmp14(1126).intl;
    tmp36Result5 = tmp36(Text2, obj11);
  }
  items6[1] = tmp36Result5;
  if (isImageQuestionResult) {
    const obj12 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp10, onPick: callback1, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp10) };
    const tmp31Result = onSubmit(17172);
    tmp36Result6 = tmp36(tmp31Result, obj12);
  } else if (true === clarification.questions[bound].multi_select) {
    const obj13 = {
      hasIcons: false,
      children: options.map((label) => {
          let joined;
          let closure_0 = label;
          str = "";
          const obj = {
            label: label.label,
            subLabel: joined,
            checked: _undefined2.includes(label.id),
            disabled,
            onPress() {
              return callback1(label);
            }
          };
          const TableCheckboxRow = clarification(optionHeader[18]).TableCheckboxRow;
          const tmp = closure_6;
          const tmp2 = clarification;
          if (true === label.recommended) {
            const intl = tmp2(tmp3[6]).intl;
            str = intl.string(onSubmit(tmp3[7]).zku6r1);
          }
          const items = [str, ];
          let str2 = label.detail;
          if (str2 == null) {
            str2 = "";
          }
          items[1] = str2;
          const found = items.filter(f127977);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp12.options;
    const TableRowGroup = tmp14(6269).TableRowGroup;
    tmp36Result6 = tmp36(TableRowGroup, obj13);
  } else {
    const options1 = tmp12.options;
    tmp36Result6 = options1.map((answer) => {
      let AQbxhf;
      let formatToPlainString;
      let intl2;
      let items;
      let items1;
      let obj2;
      let tmp5;
      let closure_0 = answer;
      let fn;
      const Card = clarification(optionHeader[19]).Card;
      if (!closure_8) {
        fn = () => callback1(answer);
      }
      const obj = { onPress: fn, accessibilityLabel: formatToPlainString(AQbxhf, obj2), children: items1 };
      const intl = tmp2(tmp3[6]).intl;
      formatToPlainString = intl.formatToPlainString;
      if (true === answer.recommended) {
        AQbxhf = onSubmit(tmp3[7])["2p6UFz"];
        tmp5 = onSubmit;
      } else {
        AQbxhf = onSubmit(tmp3[7]).AQbxhf;
        tmp5 = onSubmit;
      }
      const obj3 = { style: optionHeader.optionHeader, children: items };
      items = [, ];
      obj2 = { answer: answer.label };
      const obj4 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
      items[0] = closure_6(clarification(optionHeader[13]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = c5;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(optionHeader[7]).zku6r1) };
        const Text = tmp2(tmp3[13]).Text;
        intl2 = tmp2(tmp3[6]).intl;
        tmp8Result = tmp8(Text, obj5);
      }
      items[1] = tmp8Result;
      items1 = [closure_7(tmp7, obj3), ];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = tmp8(tmp2(tmp3[13]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return closure_7(Card, obj, answer.id);
    });
  }
  items6[2] = tmp36Result6;
  let tmp36Result7 = null;
  if (!isImageQuestionResult) {
    const obj14 = {
      size: "md",
      placeholder: intl4.string(onSubmit(3827)["tOC+tn"]),
      accessibilityLabel: intl5.formatToPlainString(onSubmit(3827)["4JeYPB"], obj15),
      value: str,
      onChange(arg0) {
          let closure_0 = arg0;
          return _undefined((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = closure_0;
            return obj;
          });
        },
      onSubmitEditing: callback3,
      returnKeyType: "send"
    };
    const TextInput = tmp14(6290).TextInput;
    intl4 = tmp14(1126).intl;
    intl5 = tmp14(1126).intl;
    obj15 = { question: clarification.questions[bound].question };
    tmp36Result7 = tmp36(TextInput, obj14);
  }
  items6[3] = tmp36Result7;
  if (clarification.questions.length <= 1) {
    let tmp30Result;
    if (true !== clarification.questions[bound].multi_select) {
      tmp30Result = null;
    }
    items6[4] = tmp30Result;
    obj4.children = items6;
    return closure_7(tmp32, obj4);
  }
  let tmp36Result8 = null;
  const obj16 = { style: tmp.footer, children: items7 };
  if (bound > 0) {
    tmp36Result8 = null;
    if (!tmp10) {
      const obj17 = { variant: "tertiary", size: "sm", text: intl6.string(onSubmit(3827).Pk5lfA), onPress: callback2 };
      const Button = tmp14(5376).Button;
      intl6 = tmp14(1126).intl;
      tmp36Result8 = tmp36(Button, obj17);
    }
  }
  items7 = [tmp36Result8, , ];
  const obj18 = { style: tmp.customField };
  items7[1] = closure_6(c5, obj18);
  const Button2 = tmp14(5376).Button;
  if (!tmp10) {
    tmp10 = null == tmp28;
  }
  const obj19 = {
    variant: "primary",
    size: "sm",
    disabled: tmp10,
    text: string(w1nRmT),
    onPress() {
      if (null != c18) {
        callback(tmp);
      }
    }
  };
  const intl7 = tmp14(1126).intl;
  string = intl7.string;
  if (bound === clarification.questions.length - 1) {
    w1nRmT = tmp14(1126).t.geKm7t;
  } else {
    w1nRmT = tmp31(3827).w1nRmT;
  }
  items7[2] = closure_6(Button2, obj19);
  tmp30Result = tmp30(tmp33, obj16);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;
