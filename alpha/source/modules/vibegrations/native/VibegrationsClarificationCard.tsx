// Module ID: 16704
// Function ID: 16705
// Name: VibegrationsClarificationCard
// Dependencies: [32, 19, 17, 21, 4890, 587, 558, 576, 4594, 16705, 4886, 1126, 3723, 16547, 6017, 5995, 5991, 6098, 5594, 2]

// Module 16704 (VibegrationsClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import VibegrationsClarification from "VibegrationsClarification" /* 16705 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let clarification, dependencyMap, id;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let closure_9 = [];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((clarification) => {
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let intl;
  let items;
  let obj14;
  let optionHeader;
  let tmp12;
  let tmp20;
  let tmp9;
  let tmp = clarification;
  let tmp2 = dependencyMap;
  let obj = clarification(576);
  const cResult = obj.c(99);
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  const onDismiss = clarification.onDismiss;
  let tmp4 = closure_8();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  const tmp7 = first1(react.useState(first), 2);
  first1 = tmp7[0];
  react = tmp7[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    tmp9 = obj4;
  } else {
    tmp9 = cResult[1];
  }
  const tmp6Result = first1(obj3.useState(tmp9), 2);
  View = tmp6Result[1];
  const first2 = tmp6Result[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp12 = obj5;
  } else {
    tmp12 = cResult[2];
  }
  const tmp6Result3 = first1(obj3.useState(tmp12), 2);
  let closure_6 = tmp6Result3[1];
  const first3 = tmp6Result3[0];
  const tmp6Result4 = first1(obj3.useState(0), 2);
  let closure_7 = tmp6Result4[1];
  const tmp16 = null == onSubmit;
  closure_8 = tmp16;
  const bound = Math.min(tmp6Result4[0], length - 1);
  id = tmp18;
  let closure_11 = tmp19;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = { checked: false };
    cResult[3] = obj6;
    tmp20 = obj6;
  } else {
    tmp20 = cResult[3];
  }
  const tmpResult = tmp(4594);
  const accessibilityRole = tmpResult.useCheckboxA11yNative(tmp20).accessibilityRole;
  let tmp21 = first3[tmp18.id];
  if (tmp21 == null) {
    tmp21 = bound;
  }
  let closure_13 = tmp21;
  if (cResult[4] === first1) {
    if (cResult[5] === clarification) {
      if (cResult[6] === bound) {
        if (cResult[7] === onSubmit) {
          let tmp22;
          if (cResult[8] === clarification.questions[bound].id) {
            tmp22 = cResult[9];
          }
          let closure_14 = tmp22;
          if (cResult[10] === true === clarification.questions[bound].multi_select) {
            if (cResult[11] === clarification.questions[bound]) {
              let tmp23;
              if (cResult[12] === tmp22) {
                tmp23 = cResult[13];
              }
              let closure_15 = tmp23;
              if (cResult[14] === tmp16) {
                let str = first2[tmp18.id];
                if (str == null) {
                  str = "";
                }
                class G {
                  constructor() {
                    const tmp = closure_8 || 0 === bound;
                    if (!tmp) {
                      closure_7(bound - 1);
                    }
                  }
                }
                if (cResult[17] === str) {
                  if (cResult[18] === true === clarification.questions[bound].multi_select) {
                    if (cResult[19] === clarification.questions[bound]) {
                      let tmp25;
                      if (cResult[20] === tmp21) {
                        tmp25 = cResult[21];
                      }
                      const text = tmp25;
                      if (cResult[22] === str) {
                        if (cResult[23] === tmp25) {
                          let tmp30;
                          if (cResult[26] === first1) {
                            if (cResult[27] === str) {
                              if (cResult[28] === tmp25) {
                                let tmp29;
                                if (cResult[29] === clarification.questions[bound].id) {
                                  tmp29 = cResult[30];
                                }
                                let closure_18 = tmp29;
                                if (cResult[31] === first1) {
                                  if (cResult[32] === tmp29) {
                                    let tmp32;
                                    if (cResult[33] === clarification.questions[bound].id) {
                                      tmp32 = cResult[34];
                                    }
                                    if (cResult[35] === clarification) {
                                      if (cResult[36] === bound) {
                                        let tmp41;
                                        if (cResult[39] === bound) {
                                          let tmp40;
                                          if (cResult[40] === clarification.questions.length) {
                                            tmp40 = cResult[41];
                                          }
                                          if (cResult[42] === tmp4.customField) {
                                            let tmp44;
                                            let tmp47;
                                            if (cResult[43] === tmp40) {
                                              tmp44 = cResult[44];
                                            }
                                            if (cResult[45] !== onDismiss) {
                                              let tmp48 = null;
                                              if (null != onDismiss) {
                                                let obj7 = { IconComponent: tmp(6017).XSmallIcon, onPress: onDismiss, accessibilityLabel: intl.string(onSubmit(3723).fMdUNR) };
                                                class G {
                                                  constructor() {
                                                    const tmp = closure_8 || 0 === bound;
                                                    if (!tmp) {
                                                      closure_7(bound - 1);
                                                    }
                                                  }
                                                }
                                                intl = tmp(1126).intl;
                                                tmp48 = closure_6(tmp51, obj7);
                                              }
                                              class G {
                                                constructor() {
                                                  const tmp = closure_8 || 0 === bound;
                                                  if (!tmp) {
                                                    closure_7(bound - 1);
                                                  }
                                                }
                                              }
                                              cResult[46] = tmp48;
                                              tmp47 = tmp48;
                                            } else {
                                              tmp47 = cResult[46];
                                            }
                                            if (cResult[47] === tmp4.footer) {
                                              if (cResult[48] === tmp44) {
                                                if (cResult[51] !== clarification.questions[bound].question) {
                                                  let obj8 = { variant: "text-md/semibold", color: "text-default", children: clarification.questions[bound].question };
                                                  class G {
                                                    constructor() {
                                                      const tmp = closure_8 || 0 === bound;
                                                      if (!tmp) {
                                                        closure_7(bound - 1);
                                                      }
                                                    }
                                                  }
                                                  cResult[51] = clarification.questions[bound].question;
                                                  cResult[52] = tmp57;
                                                }
                                                if (cResult[53] !== (true === clarification.questions[bound].multi_select)) {
                                                  let tmp59 = null;
                                                  if (true === clarification.questions[bound].multi_select) {
                                                    let obj9 = { variant: "text-xs/normal", color: "text-muted", children: obj19.string(onSubmit(3723).jt5JBA) };
                                                    const Text2 = tmp(4886).Text;
                                                    class G {
                                                      constructor() {
                                                        const tmp = closure_8 || 0 === bound;
                                                        if (!tmp) {
                                                          closure_7(bound - 1);
                                                        }
                                                      }
                                                    }
                                                    tmp59 = closure_6(Text2, obj9);
                                                  }
                                                  class G {
                                                    constructor() {
                                                      const tmp = closure_8 || 0 === bound;
                                                      if (!tmp) {
                                                        closure_7(bound - 1);
                                                      }
                                                    }
                                                  }
                                                  cResult[54] = tmp59;
                                                }
                                                class G {
                                                  constructor() {
                                                    const tmp = closure_8 || 0 === bound;
                                                    if (!tmp) {
                                                      closure_7(bound - 1);
                                                    }
                                                  }
                                                }
                                                if (cResult[63] === accessibilityRole) {
                                                  if (cResult[64] === tmp16) {
                                                    if (cResult[65] === tmp23) {
                                                      if (cResult[66] === true === clarification.questions[bound].multi_select) {
                                                        if (cResult[67] === tmp21) {
                                                          let tmp63;
                                                          if (cResult[68] === tmp4.optionHeader) {
                                                            tmp63 = cResult[69];
                                                          }
                                                          const options = tmp18.options;
                                                          const mapped = options.map(tmp63);
                                                          class G {
                                                            constructor() {
                                                              const tmp = closure_8 || 0 === bound;
                                                              if (!tmp) {
                                                                closure_7(bound - 1);
                                                              }
                                                            }
                                                          }
                                                          cResult[55] = accessibilityRole;
                                                          cResult[56] = tmp16;
                                                          cResult[57] = tmp23;
                                                          cResult[58] = true === clarification.questions[bound].multi_select;
                                                          cResult[59] = clarification.questions[bound].options;
                                                          cResult[60] = tmp21;
                                                          cResult[61] = tmp4.optionHeader;
                                                          cResult[62] = mapped;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                function fe(answer) {
                                                  let formatToPlainString;
                                                  let intl2;
                                                  let items;
                                                  let items1;
                                                  let k7lEgj;
                                                  let obj3;
                                                  let obj4;
                                                  let obj5;
                                                  let str;
                                                  let tmp10;
                                                  let closure_0 = answer;
                                                  let fn;
                                                  const Card = clarification(optionHeader[15]).Card;
                                                  if (!closure_8) {
                                                    fn = () => closure_15(answer);
                                                  }
                                                  const obj = { onPress: fn, border: str, accessibilityLabel: formatToPlainString(k7lEgj, obj5), children: items1 };
                                                  str = undefined;
                                                  if (closure_11) {
                                                    if (closure_13.includes(answer.id)) {
                                                      str = "strong";
                                                    }
                                                  }
                                                  if (closure_11) {
                                                    const obj2 = { accessibilityRole, accessibilityState: obj3 };
                                                    obj4 = obj2;
                                                    obj3 = { checked: closure_13.includes(answer.id), selected: closure_13.includes(answer.id) };
                                                  } else {
                                                    obj4 = {};
                                                  }
                                                  const merged = Object.assign(obj4);
                                                  const intl = tmp2(tmp3[11]).intl;
                                                  formatToPlainString = intl.formatToPlainString;
                                                  if (true === answer.recommended) {
                                                    k7lEgj = onSubmit(tmp3[12]).aL1BKQ;
                                                    tmp10 = onSubmit;
                                                  } else {
                                                    k7lEgj = onSubmit(tmp3[12]).k7lEgj;
                                                    tmp10 = onSubmit;
                                                  }
                                                  let tmp13 = null;
                                                  obj5 = { answer: answer.label };
                                                  const obj6 = { style: optionHeader.optionHeader, children: items };
                                                  const tmp12 = closure_5;
                                                  if (closure_11) {
                                                    const obj7 = { checked: closure_13.includes(answer.id) };
                                                    const FormCheckbox = tmp2(tmp3[16]).FormCheckbox;
                                                    tmp13 = closure_6(FormCheckbox, obj7);
                                                  }
                                                  items = [tmp13, , ];
                                                  const obj8 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
                                                  items[1] = closure_6(clarification(optionHeader[10]).Text, obj8);
                                                  let tmp16Result = null;
                                                  if (true === answer.recommended) {
                                                    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp10(optionHeader[12]).OXRWyV) };
                                                    const Text = tmp2(tmp3[10]).Text;
                                                    intl2 = tmp2(tmp3[11]).intl;
                                                    tmp16Result = tmp16(Text, obj9);
                                                  }
                                                  items[2] = tmp16Result;
                                                  items1 = [closure_7(tmp12, obj6), ];
                                                  let tmp16Result2 = null;
                                                  if (null != answer.detail) {
                                                    tmp16Result2 = null;
                                                    if ("" !== answer.detail) {
                                                      const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
                                                      tmp16Result2 = tmp16(tmp2(tmp3[10]).Text, obj10);
                                                    }
                                                  }
                                                  items1[1] = tmp16Result2;
                                                  return closure_7(Card, obj, answer.id);
                                                }
                                                cResult[63] = accessibilityRole;
                                                cResult[64] = tmp16;
                                                cResult[65] = tmp23;
                                                cResult[66] = true === clarification.questions[bound].multi_select;
                                                cResult[67] = tmp21;
                                                cResult[68] = tmp4.optionHeader;
                                                cResult[69] = fe;
                                                tmp63 = fe;
                                              }
                                            }
                                            class G {
                                              constructor() {
                                                const tmp = closure_8 || 0 === bound;
                                                if (!tmp) {
                                                  closure_7(bound - 1);
                                                }
                                              }
                                            }
                                            let obj10 = { style: tmp4.footer, children: items };
                                            items = [tmp44, tmp47];
                                            cResult[47] = tmp4.footer;
                                            cResult[48] = tmp44;
                                            cResult[49] = tmp47;
                                            cResult[50] = closure_7(View, obj10);
                                            const tmp54 = closure_7(View, obj10);
                                          }
                                          class G {
                                            constructor() {
                                              const tmp = closure_8 || 0 === bound;
                                              if (!tmp) {
                                                closure_7(bound - 1);
                                              }
                                            }
                                          }
                                          const obj11 = { style: tmp4.customField, children: tmp40 };
                                          const tmp46 = closure_6(View, obj11);
                                          cResult[42] = tmp4.customField;
                                          cResult[43] = tmp40;
                                          cResult[44] = tmp46;
                                          tmp44 = tmp46;
                                        }
                                        class G {
                                          constructor() {
                                            const tmp = closure_8 || 0 === bound;
                                            if (!tmp) {
                                              closure_7(bound - 1);
                                            }
                                          }
                                        }
                                        if (clarification.questions.length > 1) {
                                          const obj13 = { variant: "text-xs/semibold", color: "text-muted", children: obj12.formatToPlainString(onSubmit(3723)["7bypa+"], obj14) };
                                          let Text = tmp(4886).Text;
                                          class G {
                                            constructor() {
                                              const tmp = closure_8 || 0 === bound;
                                              if (!tmp) {
                                                closure_7(bound - 1);
                                              }
                                            }
                                          }
                                          obj14 = { index: bound + 1, total: clarification.questions.length };
                                          tmp41 = closure_6(Text, obj13);
                                        }
                                        cResult[39] = bound;
                                        cResult[40] = clarification.questions.length;
                                        cResult[41] = tmp41;
                                        tmp40 = tmp41;
                                      }
                                    }
                                    tmp(16705);
                                    class G {
                                      constructor() {
                                        const tmp = closure_8 || 0 === bound;
                                        if (!tmp) {
                                          closure_7(bound - 1);
                                        }
                                      }
                                    }
                                    cResult[35] = clarification;
                                    cResult[36] = bound;
                                    cResult[37] = tmp32;
                                    cResult[38] = tmp38;
                                  }
                                }
                                class G {
                                  constructor() {
                                    const tmp = closure_8 || 0 === bound;
                                    if (!tmp) {
                                      closure_7(bound - 1);
                                    }
                                  }
                                }
                                if (null != tmp29) {
                                  const obj15 = {};
                                  class G {
                                    constructor() {
                                      const tmp = closure_8 || 0 === bound;
                                      if (!tmp) {
                                        closure_7(bound - 1);
                                      }
                                    }
                                  }
                                  obj15[clarification.questions[bound].id] = tmp29;
                                }
                                cResult[31] = first1;
                                cResult[32] = tmp29;
                                cResult[33] = clarification.questions[bound].id;
                                cResult[34] = tmp33;
                                tmp32 = tmp33;
                              }
                            }
                          }
                          if (null != tmp25) {
                            class G {
                              constructor() {
                                const tmp = closure_8 || 0 === bound;
                                if (!tmp) {
                                  closure_7(bound - 1);
                                }
                              }
                            }
                          } else if ("" !== str.trim()) {
                            tmp30 = { kind: "custom", text: str.trim() };
                            const obj16 = { kind: "custom", text: str.trim() };
                          } else {
                            tmp30 = first1[tmp18.id];
                            if (tmp30 == null) {
                              tmp30 = null;
                            }
                          }
                          class G {
                            constructor() {
                              const tmp = closure_8 || 0 === bound;
                              if (!tmp) {
                                closure_7(bound - 1);
                              }
                            }
                          }
                          cResult[26] = first1;
                          cResult[27] = str;
                          cResult[28] = tmp25;
                          cResult[29] = clarification.questions[bound].id;
                          cResult[30] = tmp30;
                          tmp29 = tmp30;
                        }
                      }
                      class G {
                        constructor() {
                          const tmp = closure_8 || 0 === bound;
                          if (!tmp) {
                            closure_7(bound - 1);
                          }
                        }
                      }
                      cResult[22] = str;
                      cResult[23] = tmp25;
                      cResult[24] = tmp22;
                      cResult[25] = tmp28;
                    }
                  }
                }
                let multiSelectAnswerResult = null;
                if (true === clarification.questions[bound].multi_select) {
                  const tmpResult4 = tmp(16705);
                  multiSelectAnswerResult = tmpResult4.multiSelectAnswer(tmp18, tmp21, str);
                }
                cResult[17] = str;
                cResult[18] = true === clarification.questions[bound].multi_select;
                cResult[19] = clarification.questions[bound];
                cResult[20] = tmp21;
                cResult[21] = multiSelectAnswerResult;
                tmp25 = multiSelectAnswerResult;
              }
              class G {
                constructor() {
                  const tmp = closure_8 || 0 === bound;
                  if (!tmp) {
                    closure_7(bound - 1);
                  }
                }
              }
              cResult[14] = tmp16;
              cResult[15] = bound;
              cResult[16] = G;
            }
          }
          class J {
            constructor(arg0) {
              let user;
              id = arg0;
              const tmp = closure_11;
              if (tmp) {
                closure_6((arr) => {
                  const obj = {};
                  const merged = Object.assign(arr);
                  id = user.id;
                  let tmp4 = arr[user.id];
                  const toggleClarificationOption = VibegrationsClarification.toggleClarificationOption;
                  VibegrationsClarification;
                  const tmp2 = user;
                  if (tmp4 == null) {
                    tmp4 = closure_9;
                  }
                  obj[id] = toggleClarificationOption(tmp2, tmp4, id.id);
                  return obj;
                });
              } else {
                let tmp2 = closure_5;
                const tmp3 = closure_5((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = "";
                  return obj;
                });
                let tmp4 = closure_14;
                let obj = { kind: "option", optionId: null, text: null };
                ({ id: obj.optionId, label: obj.text } = arg0);
                closure_14(obj);
              }
            }
          }
          cResult[10] = true === clarification.questions[bound].multi_select;
          cResult[11] = clarification.questions[bound];
          cResult[12] = tmp22;
          cResult[13] = J;
          tmp23 = J;
        }
      }
    }
  }
  class U {
    constructor(arg0) {
      if (null != onSubmit) {
        const obj = {};
        const merged = Object.assign(first1);
        obj[id.id] = arg0;
        closure_4(obj);
        const obj4 = VibegrationsClarification;
        const result = obj4.followingClarificationStep(clarification, obj, bound);
        if (null == result) {
          const tmp13Result = VibegrationsClarification;
          const result1 = tmp13Result.formatClarificationAnswers(tmp15, obj);
          if ("" !== result1) {
            const tmp13Result2 = VibegrationsClarification;
            tmp(result1, tmp13Result2.clarificationAnswersPayload(clarification, obj));
          }
        } else {
          closure_7(result);
        }
      }
    }
  }
  cResult[4] = first1;
  cResult[5] = clarification;
  cResult[6] = bound;
  cResult[7] = onSubmit;
  cResult[8] = clarification.questions[bound].id;
  cResult[9] = U;
  tmp22 = U;
}) : ((clarification) => {
  let S7Sa6j;
  let _undefined;
  let c5;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let items5;
  let items6;
  let obj14;
  let obj9;
  let optionHeader;
  let string;
  let tmp20;
  let tmp28Result;
  let tmp30Result;
  let tmp5;
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  const onDismiss = clarification.onDismiss;
  let first;
  react = undefined;
  c5 = undefined;
  closure_8 = undefined;
  let closure_13;
  let callback;
  let closure_15;
  let str;
  let c17;
  let c18;
  let tmp = closure_8();
  dependencyMap = tmp;
  let obj = react;
  let tmp2 = first(react.useState({}), 2);
  first = tmp2[0];
  react = tmp2[1];
  let tmp4 = first(react.useState({}), 2);
  [tmp5, c5] = tmp4;
  const tmp6 = first(react.useState({}), 2);
  let closure_6 = tmp6[1];
  const first1 = tmp6[0];
  const tmp8 = first(react.useState(0), 2);
  let closure_7 = tmp8[1];
  let tmp9 = null == onSubmit;
  closure_8 = tmp9;
  const bound = Math.min(tmp8[0], length - 1);
  id = tmp11;
  let tmp12 = true === tmp11.multi_select;
  let closure_11 = tmp12;
  let tmp13 = clarification;
  let obj2 = clarification(4594);
  const accessibilityRole = obj2.useCheckboxA11yNative({ checked: false }).accessibilityRole;
  let tmp15 = first1[tmp11.id];
  if (tmp15 == null) {
    tmp15 = bound;
  }
  closure_13 = tmp15;
  let items = [first, clarification, bound, onSubmit, tmp11.id];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const obj4 = VibegrationsClarification;
      const result = obj4.followingClarificationStep(clarification, obj, bound);
      if (null == result) {
        const tmp13Result = VibegrationsClarification;
        const result1 = tmp13Result.formatClarificationAnswers(tmp15, obj);
        if ("" !== result1) {
          const tmp13Result2 = VibegrationsClarification;
          tmp(result1, tmp13Result2.clarificationAnswersPayload(clarification, obj));
        }
      } else {
        closure_7(result);
      }
    }
  }, items);
  let items1 = [tmp12, tmp11, callback];
  closure_15 = obj.useCallback((arg0) => {
    let user;
    id = arg0;
    const tmp = closure_11;
    if (tmp) {
      closure_6((arr) => {
        const obj = {};
        const merged = Object.assign(arr);
        id = user.id;
        let tmp4 = arr[user.id];
        const toggleClarificationOption = VibegrationsClarification.toggleClarificationOption;
        VibegrationsClarification;
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
        const obj = {};
        const merged = Object.assign(arg0);
        obj[user.id] = "";
        return obj;
      });
      let tmp4 = callback;
      let obj = { kind: "option", optionId: null, text: null };
      ({ id: obj.optionId, label: obj.text } = arg0);
      callback(obj);
    }
  }, items1);
  const items2 = [tmp9, bound];
  str = tmp5[tmp11.id];
  const callback1 = obj.useCallback(() => {
    const tmp = closure_8 || 0 === bound;
    if (!tmp) {
      closure_7(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (tmp12) {
    let tmp13Result = tmp13(16705);
    multiSelectAnswerResult = tmp13Result.multiSelectAnswer(tmp11, tmp15, str);
  }
  c17 = multiSelectAnswerResult;
  const items3 = [str, multiSelectAnswerResult, callback];
  const callback2 = obj.useCallback(() => {
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
    let tmp21 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp21 = multiSelectAnswerResult;
    }
    tmp20 = tmp21;
  } else if ("" !== str.trim()) {
    let obj3 = { kind: "custom", text: str.trim() };
    tmp20 = obj3;
  } else {
    tmp20 = first[tmp11.id];
    if (tmp20 == null) {
      tmp20 = null;
    }
  }
  c18 = tmp20;
  let tmp13Result2 = tmp13(16705);
  let tmp23 = first;
  const followingClarificationStep = tmp13Result2.followingClarificationStep;
  if (null != tmp20) {
    let obj4 = {};
    let merged = Object.assign(first);
    obj4[clarification.questions[bound].id] = tmp20;
    tmp23 = obj4;
  }
  let obj5 = { style: tmp.card, children: items5 };
  let obj6 = { style: tmp.footer, children: items4 };
  let obj7 = { style: tmp.customField, children: tmp30Result };
  tmp30Result = null;
  const tmp27 = null == followingClarificationStep(clarification, tmp23, bound);
  if (clarification.questions.length > 1) {
    let obj8 = { variant: "text-xs/semibold", color: "text-muted", children: intl.formatToPlainString(onSubmit(3723)["7bypa+"], obj9) };
    let Text = tmp13(4886).Text;
    intl = tmp13(1126).intl;
    obj9 = { index: bound + 1, total: clarification.questions.length };
    tmp30Result = tmp30(Text, obj8);
  }
  items4 = [closure_6(c5, obj7), ];
  let tmp30Result4 = null;
  if (null != onDismiss) {
    let obj10 = { IconComponent: tmp13(6017).XSmallIcon, onPress: onDismiss, accessibilityLabel: intl2.string(onSubmit(3723).fMdUNR) };
    const tmp35 = onSubmit(16547);
    intl2 = tmp13(1126).intl;
    tmp30Result4 = tmp30(tmp35, obj10);
  }
  items4[1] = tmp30Result4;
  items5 = [closure_7(c5, obj6), , , , , ];
  const obj11 = { variant: "text-md/semibold", color: "text-default", children: clarification.questions[bound].question };
  items5[1] = closure_6(tmp13(4886).Text, obj11);
  let tmp30Result5 = null;
  if (tmp12) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(onSubmit(3723).jt5JBA) };
    const Text2 = tmp13(4886).Text;
    intl3 = tmp13(1126).intl;
    tmp30Result5 = tmp30(Text2, obj12);
  }
  items5[2] = tmp30Result5;
  const options = tmp11.options;
  items5[3] = options.map((answer) => {
    let formatToPlainString;
    let intl2;
    let items;
    let items1;
    let k7lEgj;
    let obj3;
    let obj4;
    let obj5;
    let tmp10;
    let closure_0 = answer;
    let fn;
    const Card = clarification(optionHeader[15]).Card;
    if (!closure_8) {
      fn = () => closure_15(answer);
    }
    const obj = { onPress: fn, border: str, accessibilityLabel: formatToPlainString(k7lEgj, obj5), children: items1 };
    str = undefined;
    if (closure_11) {
      if (closure_13.includes(answer.id)) {
        str = "strong";
      }
    }
    if (closure_11) {
      const obj2 = { accessibilityRole, accessibilityState: obj3 };
      obj4 = obj2;
      obj3 = { checked: closure_13.includes(answer.id), selected: closure_13.includes(answer.id) };
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    const intl = tmp2(tmp3[11]).intl;
    formatToPlainString = intl.formatToPlainString;
    if (true === answer.recommended) {
      k7lEgj = onSubmit(tmp3[12]).aL1BKQ;
      tmp10 = onSubmit;
    } else {
      k7lEgj = onSubmit(tmp3[12]).k7lEgj;
      tmp10 = onSubmit;
    }
    let tmp13 = null;
    obj5 = { answer: answer.label };
    const obj6 = { style: optionHeader.optionHeader, children: items };
    const tmp12 = c5;
    if (closure_11) {
      const obj7 = { checked: closure_13.includes(answer.id) };
      const FormCheckbox = tmp2(tmp3[16]).FormCheckbox;
      tmp13 = closure_6(FormCheckbox, obj7);
    }
    items = [tmp13, , ];
    const obj8 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
    items[1] = closure_6(clarification(optionHeader[10]).Text, obj8);
    let tmp16Result = null;
    if (true === answer.recommended) {
      const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp10(optionHeader[12]).OXRWyV) };
      const Text = tmp2(tmp3[10]).Text;
      intl2 = tmp2(tmp3[11]).intl;
      tmp16Result = tmp16(Text, obj9);
    }
    items[2] = tmp16Result;
    items1 = [closure_7(tmp12, obj6), ];
    let tmp16Result2 = null;
    if (null != answer.detail) {
      tmp16Result2 = null;
      if ("" !== answer.detail) {
        const obj10 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp16Result2 = tmp16(tmp2(tmp3[10]).Text, obj10);
      }
    }
    items1[1] = tmp16Result2;
    return closure_7(Card, obj, answer.id);
  });
  const obj13 = {
    size: "md",
    placeholder: intl4.string(onSubmit(3723).qifsdL),
    accessibilityLabel: intl5.formatToPlainString(onSubmit(3723).XHESTL, obj14),
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
    onSubmitEditing: callback2,
    returnKeyType: "send"
  };
  const TextInput = tmp13(6098).TextInput;
  intl4 = tmp13(1126).intl;
  intl5 = tmp13(1126).intl;
  obj14 = { question: clarification.questions[bound].question };
  items5[4] = closure_6(TextInput, obj13);
  if (clarification.questions.length > 1) {
    let tmp30Result6 = null;
    const obj15 = { style: tmp.footer, children: items6 };
    if (bound > 0) {
      tmp30Result6 = null;
      if (!tmp9) {
        const obj16 = { variant: "tertiary", size: "sm", text: intl6.string(onSubmit(3723).yKdgqw), onPress: callback1 };
        const Button = tmp13(5594).Button;
        intl6 = tmp13(1126).intl;
        tmp30Result6 = tmp30(Button, obj16);
      }
    }
    items6 = [tmp30Result6, , ];
    const obj17 = { style: tmp.customField };
    items6[1] = closure_6(c5, obj17);
    const Button2 = tmp13(5594).Button;
    if (!tmp9) {
      tmp9 = null == tmp20;
    }
    const obj18 = {
      variant: "primary",
      size: "sm",
      disabled: tmp9,
      text: string(S7Sa6j),
      onPress() {
          if (null != c18) {
            callback(tmp);
          }
        }
    };
    const intl7 = tmp13(1126).intl;
    string = intl7.string;
    if (tmp27) {
      S7Sa6j = tmp13(1126).t.geKm7t;
    } else {
      S7Sa6j = tmp38(3723).S7Sa6j;
    }
    items6[2] = closure_6(Button2, obj18);
    tmp28Result = tmp28(tmp29, obj15);
  } else {
    tmp28Result = null;
  }
  items5[5] = tmp28Result;
  return closure_7(c5, obj5);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default tmp4;
