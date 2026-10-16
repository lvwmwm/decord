// Module ID: 12205
// Function ID: 12206
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 5154, 587, 1128, 3865, 558, 576, 12206, 12207, 12208, 12209, 6510, 5150, 7794, 6432, 12210, 6489, 6401, 6406, 12214, 5442, 12086, 2]

// Module 12205 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 12208 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5154 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const f112103 = (item) => "" !== item;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let closure_9 = [];
let closure_10 = [];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(projectId) {
  let answeredOptionIdsResult;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let items3;
  let obj22;
  let obj24;
  let onSubmit;
  let optionHeader;
  let options;
  let string;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp27;
  let tmp9;
  let tmp92;
  let tmp93;
  let w1nRmT;
  let tmp = projectId;
  let tmp2 = onSubmit;
  let obj = projectId(onSubmit[9]);
  const cResult = obj.c(102);
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  onSubmit = projectId.onSubmit;
  const onDismiss = projectId.onDismiss;
  let tmp4 = closure_8();
  _slicedToArray = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = first1;
  [first1, tmp9] = first1.useState(first);
  let closure_5 = tmp9;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    tmp10 = obj4;
  } else {
    tmp10 = cResult[1];
  }
  const tmp6Result = _slicedToArray(obj3.useState(tmp10), 2);
  let closure_6 = tmp6Result[1];
  const first2 = tmp6Result[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  const tmp6Result5 = _slicedToArray(obj3.useState(tmp13), 2);
  let closure_7 = tmp6Result5[1];
  const first3 = tmp6Result5[0];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = {};
    cResult[3] = obj6;
    tmp16 = obj6;
  } else {
    tmp16 = cResult[3];
  }
  [tmp18, closure_8] = _slicedToArray(obj3.useState(tmp16), 2);
  _slicedToArray(obj3.useState(tmp16), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {};
    cResult[4] = obj7;
    tmp19 = obj7;
  } else {
    tmp19 = cResult[4];
  }
  [tmp21, closure_9] = _slicedToArray(obj3.useState(tmp19), 2);
  _slicedToArray(obj3.useState(tmp19), 2);
  const tmp6Result8 = _slicedToArray(obj3.useState(0), 2);
  closure_10 = tmp6Result8[1];
  const disabled = tmp23;
  const bound = Math.min(tmp6Result8[0], length - 1);
  const tmp25 = clarification.questions[bound];
  let id = tmp25;
  let closure_14 = tmp26;
  if (cResult[5] !== tmp25) {
    const tmpResult = tmp(tmp2[10]);
    const isImageQuestionResult = tmpResult.isImageQuestion(tmp25);
    cResult[5] = tmp25;
    cResult[6] = isImageQuestionResult;
    tmp27 = isImageQuestionResult;
  } else {
    tmp27 = cResult[6];
  }
  let closure_15 = tmp27;
  if (true === tmp25.multi_select) {
    let tmp30 = first3[tmp25.id];
    if (tmp30 == null) {
      tmp30 = closure_9;
    }
    answeredOptionIdsResult = tmp30;
  } else {
    const tmpResult5 = tmp(tmp2[10]);
    answeredOptionIdsResult = tmpResult5.answeredOptionIds(first1[tmp25.id]);
  }
  const tmpResult6 = tmp(tmp2[11]);
  const conjureOwnImages = tmpResult6.useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[7] === first1) {
    if (cResult[8] === clarification) {
      if (cResult[9] === bound) {
        if (cResult[10] === onSubmit) {
          if (cResult[11] === projectId) {
            let tmp31;
            if (cResult[12] === tmp25.id) {
              tmp31 = cResult[13];
            }
            let closure_17 = tmp31;
            if (cResult[14] === true === tmp25.multi_select) {
              if (cResult[15] === tmp27) {
                if (cResult[16] === tmp25) {
                  let tmp32;
                  if (cResult[17] === tmp31) {
                    tmp32 = cResult[18];
                  }
                  let closure_18 = tmp32;
                  if (cResult[19] === null == onSubmit) {
                    let tmp33;
                    if (cResult[20] === bound) {
                      tmp33 = cResult[21];
                    }
                    let str = first2[tmp25.id];
                    if (str == null) {
                      str = "";
                    }
                    let multiSelectAnswerResult = null;
                    if (true === tmp25.multi_select) {
                      const tmpResult7 = tmp(tmp2[12]);
                      multiSelectAnswerResult = tmpResult7.multiSelectAnswer(tmp25, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp25));
                    }
                    if (cResult[22] === str) {
                      if (cResult[23] === tmp18) {
                        if (cResult[24] === tmp21) {
                          if (cResult[25] === tmp25.id) {
                            let tmp39;
                            let tmp47;
                            if (cResult[26] === tmp25.input) {
                              tmp39 = cResult[27];
                            }
                            const text = tmp39;
                            if (cResult[28] !== tmp25.id) {
                              function fe(arg0, arg1) {
                                let user;
                                let closure_0 = arg0;
                                let closure_1 = arg1;
                                closure_8((arg0) => {
                                  const obj = {};
                                  const merged = Object.assign(arg0);
                                  obj[user.id] = closure_0;
                                  return obj;
                                });
                                closure_9((arg0) => {
                                  const obj = {};
                                  const merged = Object.assign(arg0);
                                  obj[user.id] = closure_1;
                                  return obj;
                                });
                              }
                              cResult[28] = tmp25.id;
                              cResult[29] = fe;
                              tmp47 = fe;
                            } else {
                              tmp47 = cResult[29];
                            }
                            if (cResult[30] === str) {
                              if (cResult[31] === multiSelectAnswerResult) {
                                if (cResult[32] === tmp39) {
                                  let tmp48;
                                  let tmp50;
                                  if (cResult[33] === tmp31) {
                                    tmp48 = cResult[34];
                                  }
                                  if (cResult[35] === first1) {
                                    if (cResult[36] === str) {
                                      if (cResult[37] === multiSelectAnswerResult) {
                                        if (cResult[38] === tmp39) {
                                          let tmp49;
                                          if (cResult[39] === tmp25.id) {
                                            tmp49 = cResult[40];
                                          }
                                          let closure_22 = tmp49;
                                          if (cResult[41] === tmp48) {
                                            if (cResult[42] === str) {
                                              if (cResult[43] === tmp27) {
                                                if (cResult[44] === tmp25.id) {
                                                  let tmp54;
                                                  if (cResult[45] === tmp25.question) {
                                                    tmp54 = cResult[46];
                                                  }
                                                  if (cResult[47] === bound) {
                                                    let tmp58;
                                                    let tmp62;
                                                    if (cResult[48] === clarification.questions.length) {
                                                      tmp58 = cResult[49];
                                                    }
                                                    if (cResult[50] !== tmp25.question) {
                                                      const obj8 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp25.question };
                                                      const tmp64 = closure_6(tmp(tmp2[15]).Text, obj8);
                                                      cResult[50] = tmp25.question;
                                                      cResult[51] = tmp64;
                                                      tmp62 = tmp64;
                                                    } else {
                                                      tmp62 = cResult[51];
                                                    }
                                                    if (cResult[52] === tmp4.customField) {
                                                      if (cResult[53] === tmp58) {
                                                        let tmp65;
                                                        let tmp69;
                                                        if (cResult[54] === tmp62) {
                                                          tmp65 = cResult[55];
                                                        }
                                                        if (cResult[56] !== onDismiss) {
                                                          let tmp70 = null;
                                                          if (null != onDismiss) {
                                                            const obj9 = { variant: "tertiary", size: "sm", icon: closure_6(tmp(tmp2[17]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(clarification(tmp2[7]).qVXlk0) };
                                                            const IconButton = tmp(tmp2[16]).IconButton;
                                                            intl4 = tmp(tmp2[6]).intl;
                                                            tmp70 = closure_6(IconButton, obj9);
                                                          }
                                                          cResult[56] = onDismiss;
                                                          cResult[57] = tmp70;
                                                          tmp69 = tmp70;
                                                        } else {
                                                          tmp69 = cResult[57];
                                                        }
                                                        if (cResult[58] === tmp4.footer) {
                                                          if (cResult[59] === tmp65) {
                                                            let tmp73;
                                                            let tmp77;
                                                            let mapped;
                                                            if (cResult[60] === tmp69) {
                                                              tmp73 = cResult[61];
                                                            }
                                                            if (cResult[62] !== (true === tmp25.multi_select)) {
                                                              let tmp78 = null;
                                                              if (true === tmp25.multi_select) {
                                                                const obj10 = { variant: "text-xs/normal", color: "text-muted", children: intl5.string(clarification(tmp2[7]).tE8qbz) };
                                                                const Text2 = tmp(tmp2[15]).Text;
                                                                intl5 = tmp(tmp2[6]).intl;
                                                                tmp78 = closure_6(Text2, obj10);
                                                              }
                                                              cResult[62] = true === tmp25.multi_select;
                                                              cResult[63] = tmp78;
                                                              tmp77 = tmp78;
                                                            } else {
                                                              tmp77 = cResult[63];
                                                            }
                                                            if (cResult[64] === null == onSubmit) {
                                                              if (cResult[65] === tmp32) {
                                                                if (cResult[66] === true === tmp25.multi_select) {
                                                                  if (cResult[67] === conjureOwnImages) {
                                                                    if (cResult[68] === tmp27) {
                                                                      if (cResult[69] === projectId) {
                                                                        if (cResult[70] === tmp25) {
                                                                          if (cResult[71] === answeredOptionIdsResult) {
                                                                            let tmp81;
                                                                            if (cResult[72] === tmp4.optionHeader) {
                                                                              tmp81 = cResult[73];
                                                                            }
                                                                            if (cResult[74] === null == onSubmit) {
                                                                              if (cResult[75] === tmp18) {
                                                                                if (cResult[76] === tmp54) {
                                                                                  if (cResult[77] === tmp47) {
                                                                                    if (cResult[78] === projectId) {
                                                                                      let tmp87;
                                                                                      let tmp96;
                                                                                      if (cResult[79] === tmp25) {
                                                                                        tmp87 = cResult[80];
                                                                                      }
                                                                                      let tmp94 = null;
                                                                                      if (false !== tmp25.allow_custom) {
                                                                                        tmp94 = tmp54;
                                                                                      }
                                                                                      if (cResult[81] === null == onSubmit) {
                                                                                        if (cResult[82] === tmp33) {
                                                                                          if (cResult[83] === bound) {
                                                                                            if (cResult[84] === true === tmp25.multi_select) {
                                                                                              if (cResult[85] === tmp49) {
                                                                                                if (cResult[86] === tmp27) {
                                                                                                  if (cResult[87] === tmp25.input) {
                                                                                                    if (cResult[88] === tmp31) {
                                                                                                      if (cResult[89] === tmp4.customField) {
                                                                                                        if (cResult[90] === tmp4.footer) {
                                                                                                          if (cResult[91] === bound === tmp53) {
                                                                                                            if (cResult[92] === clarification.questions.length) {
                                                                                                              tmp96 = cResult[93];
                                                                                                            }
                                                                                                            if (cResult[94] === tmp4.card) {
                                                                                                              if (cResult[95] === tmp73) {
                                                                                                                if (cResult[96] === tmp77) {
                                                                                                                  if (cResult[97] === tmp81) {
                                                                                                                    if (cResult[98] === tmp87) {
                                                                                                                      if (cResult[99] === tmp94) {
                                                                                                                        let tmp106;
                                                                                                                        if (cResult[100] === tmp96) {
                                                                                                                          tmp106 = cResult[101];
                                                                                                                        }
                                                                                                                        return tmp106;
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                            const obj11 = { style: tmp4.card, children: items };
                                                                                                            items = [tmp73, tmp77, tmp81, tmp87, tmp94, tmp96];
                                                                                                            const tmp109 = closure_7(clarification(tmp2[24]), obj11);
                                                                                                            cResult[94] = tmp4.card;
                                                                                                            cResult[95] = tmp73;
                                                                                                            cResult[96] = tmp77;
                                                                                                            cResult[97] = tmp81;
                                                                                                            cResult[98] = tmp87;
                                                                                                            cResult[99] = tmp94;
                                                                                                            cResult[100] = tmp96;
                                                                                                            cResult[101] = tmp109;
                                                                                                            tmp106 = tmp109;
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
                                                                                      if (clarification.questions.length <= 1) {
                                                                                        if (true !== tmp25.multi_select) {
                                                                                          let tmp98Result;
                                                                                          if (!tmp27) {
                                                                                            tmp98Result = null;
                                                                                          }
                                                                                          cResult[81] = null == onSubmit;
                                                                                          cResult[82] = tmp33;
                                                                                          cResult[83] = bound;
                                                                                          cResult[84] = true === tmp25.multi_select;
                                                                                          cResult[85] = tmp49;
                                                                                          cResult[86] = tmp27;
                                                                                          cResult[87] = tmp25.input;
                                                                                          cResult[88] = tmp31;
                                                                                          cResult[89] = tmp4.customField;
                                                                                          cResult[90] = tmp4.footer;
                                                                                          cResult[91] = bound === tmp53;
                                                                                          cResult[92] = clarification.questions.length;
                                                                                          cResult[93] = tmp98Result;
                                                                                          tmp96 = tmp98Result;
                                                                                        }
                                                                                      }
                                                                                      let tmp100 = null;
                                                                                      const obj12 = { style: tmp4.footer, children: items1 };
                                                                                      const tmp98 = closure_7;
                                                                                      if (bound > 0) {
                                                                                        tmp100 = null;
                                                                                        if (null != onSubmit) {
                                                                                          const obj13 = { variant: "tertiary", size: "sm", text: intl6.string(clarification(tmp2[7]).Pk5lfA), onPress: tmp33 };
                                                                                          const Button = tmp(tmp2[23]).Button;
                                                                                          intl6 = tmp(tmp2[6]).intl;
                                                                                          tmp100 = closure_6(Button, obj13);
                                                                                        }
                                                                                      }
                                                                                      items1 = [tmp100, , ];
                                                                                      const obj14 = { style: tmp4.customField };
                                                                                      items1[1] = closure_6(closure_5, obj14);
                                                                                      let tmp104 = tmp23;
                                                                                      const Button2 = tmp(tmp2[23]).Button;
                                                                                      const tmp103 = closure_6;
                                                                                      if (null != onSubmit) {
                                                                                        tmp104 = null == tmp49;
                                                                                      }
                                                                                      const obj15 = {
                                                                                        variant: "primary",
                                                                                        size: "sm",
                                                                                        disabled: tmp104,
                                                                                        text: string(w1nRmT),
                                                                                        onPress() {
                                                                                                                                                                              if (null != closure_22) {
                                                                                                                                                                                closure_17(tmp);
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                      };
                                                                                      const intl7 = tmp(tmp2[6]).intl;
                                                                                      string = intl7.string;
                                                                                      if (bound === tmp53) {
                                                                                        w1nRmT = tmp(tmp2[6]).t.geKm7t;
                                                                                      } else {
                                                                                        w1nRmT = clarification(tmp2[7]).w1nRmT;
                                                                                      }
                                                                                      items1[2] = tmp103(Button2, obj15);
                                                                                      tmp98Result = tmp98(tmp99, obj12);
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            let tmp89Result = null;
                                                                            if (null != tmp25.input) {
                                                                              const obj16 = { projectId, question: tmp25, value: tmp92, disabled: null == onSubmit, onChange: tmp47, fallback: tmp93 };
                                                                              tmp92 = tmp18[tmp25.id];
                                                                              const tmp89 = closure_6;
                                                                              const tmp91 = clarification(tmp2[22]);
                                                                              if (tmp92 == null) {
                                                                                tmp92 = closure_10;
                                                                              }
                                                                              tmp93 = null;
                                                                              if (false === tmp25.allow_custom) {
                                                                                tmp93 = tmp54;
                                                                              }
                                                                              tmp89Result = tmp89(tmp91, obj16);
                                                                            }
                                                                            cResult[74] = null == onSubmit;
                                                                            cResult[75] = tmp18;
                                                                            cResult[76] = tmp54;
                                                                            cResult[77] = tmp47;
                                                                            cResult[78] = projectId;
                                                                            cResult[79] = tmp25;
                                                                            cResult[80] = tmp89Result;
                                                                            tmp87 = tmp89Result;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            if (tmp27) {
                                                              const obj17 = { projectId, question: tmp25, selectedIds: answeredOptionIdsResult, disabled: null == onSubmit, onPick: tmp32, own: conjureOwnImages.controlsFor(tmp25, null == onSubmit) };
                                                              const tmp86 = clarification(tmp2[18]);
                                                              mapped = closure_6(tmp86, obj17);
                                                            } else if (true === tmp25.multi_select) {
                                                              const obj18 = {
                                                                hasIcons: false,
                                                                children: options.map((label) => {
                                                                                                                              let joined;
                                                                                                                              let closure_0 = label;
                                                                                                                              str = "";
                                                                                                                              const obj = {
                                                                                                                                label: label.label,
                                                                                                                                subLabel: joined,
                                                                                                                                checked: answeredOptionIdsResult.includes(label.id),
                                                                                                                                disabled,
                                                                                                                                onPress() {
                                                                                                                                  return closure_18(label);
                                                                                                                                }
                                                                                                                              };
                                                                                                                              const TableCheckboxRow = projectId(onSubmit[20]).TableCheckboxRow;
                                                                                                                              const tmp = closure_6;
                                                                                                                              const tmp2 = projectId;
                                                                                                                              if (true === label.recommended) {
                                                                                                                                const intl = tmp2(tmp3[6]).intl;
                                                                                                                                str = intl.string(clarification(tmp3[7]).zku6r1);
                                                                                                                              }
                                                                                                                              const items = [str, ];
                                                                                                                              let str2 = label.detail;
                                                                                                                              if (str2 == null) {
                                                                                                                                str2 = "";
                                                                                                                              }
                                                                                                                              items[1] = str2;
                                                                                                                              const found = items.filter(f112103);
                                                                                                                              joined = undefined;
                                                                                                                              if (found.length > 0) {
                                                                                                                                joined = found.join(" \u00B7 ");
                                                                                                                              }
                                                                                                                              return tmp(TableCheckboxRow, obj, label.id);
                                                                                                                            })
                                                              };
                                                              options = tmp25.options;
                                                              const TableRowGroup = tmp(tmp2[19]).TableRowGroup;
                                                              mapped = closure_6(TableRowGroup, obj18);
                                                            } else {
                                                              const options1 = tmp25.options;
                                                              mapped = options1.map((answer) => {
                                                                let AQbxhf;
                                                                let formatToPlainString;
                                                                let intl2;
                                                                let items;
                                                                let items1;
                                                                let obj2;
                                                                let tmp5;
                                                                let closure_0 = answer;
                                                                let fn;
                                                                const Card = projectId(onSubmit[21]).Card;
                                                                if (!closure_11) {
                                                                  fn = () => closure_18(answer);
                                                                }
                                                                const obj = { onPress: fn, accessibilityLabel: formatToPlainString(AQbxhf, obj2), children: items1 };
                                                                const intl = tmp2(tmp3[6]).intl;
                                                                formatToPlainString = intl.formatToPlainString;
                                                                if (true === answer.recommended) {
                                                                  AQbxhf = clarification(tmp3[7])["2p6UFz"];
                                                                  tmp5 = clarification;
                                                                } else {
                                                                  AQbxhf = clarification(tmp3[7]).AQbxhf;
                                                                  tmp5 = clarification;
                                                                }
                                                                const obj3 = { style: optionHeader.optionHeader, children: items };
                                                                items = [, ];
                                                                obj2 = { answer: answer.label };
                                                                const obj4 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
                                                                items[0] = closure_6(projectId(onSubmit[15]).Text, obj4);
                                                                let tmp8Result = null;
                                                                const tmp7 = closure_5;
                                                                if (true === answer.recommended) {
                                                                  const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
                                                                  const Text = tmp2(tmp3[15]).Text;
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
                                                                    tmp8Result2 = tmp8(tmp2(tmp3[15]).Text, obj6);
                                                                  }
                                                                }
                                                                items1[1] = tmp8Result2;
                                                                return closure_7(Card, obj, answer.id);
                                                              });
                                                            }
                                                            cResult[64] = null == onSubmit;
                                                            cResult[65] = tmp32;
                                                            cResult[66] = true === tmp25.multi_select;
                                                            cResult[67] = conjureOwnImages;
                                                            cResult[68] = tmp27;
                                                            cResult[69] = projectId;
                                                            cResult[70] = tmp25;
                                                            cResult[71] = answeredOptionIdsResult;
                                                            cResult[72] = tmp4.optionHeader;
                                                            cResult[73] = mapped;
                                                            tmp81 = mapped;
                                                          }
                                                        }
                                                        const obj19 = { style: tmp4.footer, children: items2 };
                                                        items2 = [tmp65, tmp69];
                                                        const tmp76 = closure_7(closure_5, obj19);
                                                        cResult[58] = tmp4.footer;
                                                        cResult[59] = tmp65;
                                                        cResult[60] = tmp69;
                                                        cResult[61] = tmp76;
                                                        tmp73 = tmp76;
                                                      }
                                                    }
                                                    const obj20 = { style: tmp4.customField, children: items3 };
                                                    items3 = [tmp58, tmp62];
                                                    const tmp68 = closure_7(closure_5, obj20);
                                                    cResult[52] = tmp4.customField;
                                                    cResult[53] = tmp58;
                                                    cResult[54] = tmp62;
                                                    cResult[55] = tmp68;
                                                    tmp65 = tmp68;
                                                  }
                                                  let tmp59 = null;
                                                  if (clarification.questions.length > 1) {
                                                    const obj21 = { variant: "text-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(clarification(tmp2[7]).yzYUjq, obj22) };
                                                    let Text = tmp(tmp2[15]).Text;
                                                    intl3 = tmp(tmp2[6]).intl;
                                                    obj22 = { index: bound + 1, total: clarification.questions.length };
                                                    tmp59 = closure_6(Text, obj21);
                                                  }
                                                  cResult[47] = bound;
                                                  cResult[48] = clarification.questions.length;
                                                  cResult[49] = tmp59;
                                                  tmp58 = tmp59;
                                                }
                                              }
                                            }
                                          }
                                          let tmp55 = null;
                                          if (!tmp27) {
                                            const obj23 = {
                                              size: "md",
                                              placeholder: intl.string(clarification(tmp2[7])["tOC+tn"]),
                                              accessibilityLabel: intl2.formatToPlainString(clarification(tmp2[7])["4JeYPB"], obj24),
                                              value: str,
                                              onChange(arg0) {
                                                                                          let closure_0 = arg0;
                                                                                          return closure_6((arg0) => {
                                                                                            const obj = {};
                                                                                            const merged = Object.assign(arg0);
                                                                                            obj[id.id] = closure_0;
                                                                                            return obj;
                                                                                          });
                                                                                        },
                                              onSubmitEditing: tmp48,
                                              returnKeyType: "send"
                                            };
                                            const TextInput = tmp(tmp2[14]).TextInput;
                                            intl = tmp(tmp2[6]).intl;
                                            intl2 = tmp(tmp2[6]).intl;
                                            obj24 = { question: tmp25.question };
                                            tmp55 = closure_6(TextInput, obj23);
                                          }
                                          cResult[41] = tmp48;
                                          cResult[42] = str;
                                          cResult[43] = tmp27;
                                          cResult[44] = tmp25.id;
                                          cResult[45] = tmp25.question;
                                          cResult[46] = tmp55;
                                          tmp54 = tmp55;
                                        }
                                      }
                                    }
                                  }
                                  if (null != tmp39) {
                                    let tmp52 = null;
                                    if ("" !== tmp39.text) {
                                      tmp52 = tmp39;
                                    }
                                    tmp50 = tmp52;
                                  } else if (null != multiSelectAnswerResult) {
                                    let tmp51 = null;
                                    if ("" !== multiSelectAnswerResult.text) {
                                      tmp51 = multiSelectAnswerResult;
                                    }
                                    tmp50 = tmp51;
                                  } else {
                                    let str2 = "";
                                    if ("" !== str.trim()) {
                                      tmp50 = { kind: "custom", text: str.trim() };
                                      const obj25 = { kind: "custom", text: str.trim() };
                                    } else {
                                      tmp50 = first1[tmp25.id];
                                      if (tmp50 == null) {
                                        tmp50 = null;
                                      }
                                    }
                                  }
                                  cResult[35] = first1;
                                  cResult[36] = str;
                                  cResult[37] = multiSelectAnswerResult;
                                  cResult[38] = tmp39;
                                  cResult[39] = tmp25.id;
                                  cResult[40] = tmp50;
                                  tmp49 = tmp50;
                                }
                              }
                            }
                            function ve() {
                              if (null == text) {
                                if (null == multiSelectAnswerResult) {
                                  const trimmed = str.trim();
                                  if ("" !== trimmed) {
                                    const obj = { kind: "custom", text: trimmed };
                                    closure_17(obj);
                                  }
                                } else if ("" !== multiSelectAnswerResult.text) {
                                  closure_17(multiSelectAnswerResult);
                                }
                              } else if ("" !== text.text) {
                                closure_17(text);
                              }
                            }
                            cResult[30] = str;
                            cResult[31] = multiSelectAnswerResult;
                            cResult[32] = tmp39;
                            cResult[33] = tmp31;
                            cResult[34] = ve;
                            tmp48 = ve;
                          }
                        }
                      }
                    }
                    let entityAnswerResult = null;
                    if (null != tmp25.input) {
                      const input = tmp25.input;
                      let tmp42 = tmp18[tmp25.id];
                      const entityAnswer = tmp(tmp2[12]).entityAnswer;
                      const tmpResult8 = tmp(tmp2[12]);
                      if (tmp42 == null) {
                        tmp42 = closure_10;
                      }
                      entityAnswerResult = entityAnswer(input, tmp42, str, tmp21[tmp25.id]);
                    }
                    cResult[22] = str;
                    cResult[23] = tmp18;
                    cResult[24] = tmp21;
                    cResult[25] = tmp25.id;
                    cResult[26] = tmp25.input;
                    cResult[27] = entityAnswerResult;
                    tmp39 = entityAnswerResult;
                  }
                  function de() {
                    const tmp = disabled || 0 === bound;
                    if (!tmp) {
                      closure_10(bound - 1);
                    }
                  }
                  cResult[19] = null == onSubmit;
                  cResult[20] = bound;
                  cResult[21] = de;
                  tmp33 = de;
                }
              }
            }
            function re(arg0) {
              let user;
              id = arg0;
              const tmp = closure_14;
              if (tmp) {
                closure_7((arr) => {
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
                let tmp2 = closure_6;
                const tmp3 = closure_6((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = "";
                  return obj;
                });
                let obj = { kind: "option", optionId: null, text: null };
                ({ id: obj.optionId, label: obj.text } = arg0);
                let tmp4 = closure_15;
                if (tmp4) {
                  closure_5((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = obj;
                    return obj;
                  });
                } else {
                  closure_17(obj);
                }
              }
            }
            cResult[14] = true === tmp25.multi_select;
            cResult[15] = tmp27;
            cResult[16] = tmp25;
            cResult[17] = tmp31;
            cResult[18] = re;
            tmp32 = re;
          }
        }
      }
    }
  }
  function le(arg0) {
    let result1;
    if (null != onSubmit) {
      let obj = {};
      const merged = Object.assign(first1);
      obj[id.id] = arg0;
      closure_5(obj);
      const obj4 = projectId(onSubmit[12]);
      let result = obj4.followingClarificationStep(result1, obj, bound);
      if (null == result) {
        const tmp16Result = projectId(onSubmit[12]);
        result1 = tmp16Result.formatClarificationAnswers(tmp18, obj);
        if ("" !== result1) {
          const tmp16Result2 = projectId(onSubmit[13]);
          tmp16Result2.sendAfterLinkingApps(obj, result1, obj, () => {
            obj = ConjureClarification;
            const result = obj.clarificationAnswersPayload(clarification, obj);
            const obj2 = ConjureClarification;
            return onSubmit(result1, result, obj2.clarificationAnswerAttachments(clarification, obj));
          });
        }
      } else {
        closure_10(result);
      }
    }
  }
  cResult[7] = first1;
  cResult[8] = clarification;
  cResult[9] = bound;
  cResult[10] = onSubmit;
  cResult[11] = projectId;
  cResult[12] = tmp25.id;
  cResult[13] = le;
  tmp31 = le;
}) : (function ConjureClarificationCard(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let answeredOptionIdsResult;
  let c6;
  let c7;
  let c8;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items5;
  let items6;
  let items8;
  let obj10;
  let obj5;
  let optionHeader;
  let options;
  let string;
  let tmp10;
  let tmp4;
  let tmp40;
  let tmp52Result6;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp8;
  let w1nRmT;
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  const onSubmit = projectId.onSubmit;
  const onDismiss = projectId.onDismiss;
  first = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  let c16;
  let callback;
  let callback1;
  let str;
  let c20;
  let c21;
  let c22;
  let tmp = c8();
  _slicedToArray = tmp;
  let obj = first;
  [first, tmp4] = first.useState({});
  let closure_5 = tmp4;
  let tmp5 = _slicedToArray(first.useState({}), 2);
  [tmp6, c6] = tmp5;
  let tmp7 = _slicedToArray(first.useState({}), 2);
  [tmp8, c7] = tmp7;
  [tmp10, c8] = _slicedToArray(first.useState({}), 2);
  const tmp9 = _slicedToArray(first.useState({}), 2);
  [first1, closure_9] = first.useState({});
  const tmp13 = _slicedToArray(first.useState(0), 2);
  closure_10 = tmp13[1];
  let tmp14 = null == onSubmit;
  const disabled = tmp14;
  const bound = Math.min(tmp13[0], length - 1);
  let id = tmp16;
  let closure_14 = tmp17;
  const tmp18 = projectId;
  let obj2 = projectId(onSubmit[10]);
  const isImageQuestionResult = obj2.isImageQuestion(clarification.questions[bound]);
  let c15 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let tmp22 = tmp8[tmp16.id];
    if (tmp22 == null) {
      tmp22 = closure_9;
    }
    answeredOptionIdsResult = tmp22;
  } else {
    const tmp18Result = tmp18(onSubmit[10]);
    answeredOptionIdsResult = tmp18Result.answeredOptionIds(first[tmp16.id]);
  }
  c16 = answeredOptionIdsResult;
  const tmp18Result4 = tmp18(onSubmit[11]);
  const conjureOwnImages = tmp18Result4.useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, onSubmit, projectId, tmp16.id];
  callback = obj.useCallback((arg0) => {
    let result1;
    if (null != onSubmit) {
      let obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_5(obj);
      const obj4 = projectId(onSubmit[12]);
      let result = obj4.followingClarificationStep(result1, obj, bound);
      if (null == result) {
        const tmp16Result = projectId(onSubmit[12]);
        result1 = tmp16Result.formatClarificationAnswers(tmp18, obj);
        if ("" !== result1) {
          const tmp16Result2 = projectId(onSubmit[13]);
          tmp16Result2.sendAfterLinkingApps(obj, result1, obj, () => {
            obj = ConjureClarification;
            const result = obj.clarificationAnswersPayload(clarification, obj);
            const obj2 = ConjureClarification;
            return onSubmit(result1, result, obj2.clarificationAnswerAttachments(clarification, obj));
          });
        }
      } else {
        closure_10(result);
      }
    }
  }, items);
  let items1 = [tmp17, isImageQuestionResult, tmp16, callback];
  callback1 = obj.useCallback((arg0) => {
    let user;
    id = arg0;
    const tmp = closure_14;
    if (tmp) {
      _undefined2((arr) => {
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
      let tmp4 = c15;
      if (tmp4) {
        closure_5((arg0) => {
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
  const items2 = [tmp14, bound];
  str = tmp6[tmp16.id];
  const callback2 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_10(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp18Result5 = tmp18(onSubmit[12]);
    multiSelectAnswerResult = tmp18Result5.multiSelectAnswer(tmp16, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp16));
  }
  c20 = multiSelectAnswerResult;
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const input = tmp16.input;
    let tmp33 = tmp10[tmp16.id];
    const entityAnswer = tmp18(onSubmit[12]).entityAnswer;
    const tmp18Result6 = tmp18(onSubmit[12]);
    if (tmp33 == null) {
      tmp33 = closure_10;
    }
    entityAnswerResult = entityAnswer(input, tmp33, str, first1[tmp16.id]);
  }
  c21 = entityAnswerResult;
  const items3 = [tmp16.id];
  const items4 = [str, multiSelectAnswerResult, entityAnswerResult, callback];
  const callback3 = obj.useCallback((arg0, arg1) => {
    let user;
    let closure_0 = arg0;
    let closure_1 = arg1;
    _undefined3((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user.id] = closure_0;
      return obj;
    });
    closure_9((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user.id] = closure_1;
      return obj;
    });
  }, items3);
  const callback4 = obj.useCallback(() => {
    if (null == _undefined4) {
      if (null == _undefined3) {
        const trimmed = str.trim();
        if ("" !== trimmed) {
          const obj = { kind: "custom", text: trimmed };
          callback(obj);
        }
      } else if ("" !== _undefined3.text) {
        callback(_undefined3);
      }
    } else if ("" !== _undefined4.text) {
      callback(_undefined4);
    }
  }, items4);
  if (null != entityAnswerResult) {
    let tmp42 = null;
    if ("" !== entityAnswerResult.text) {
      tmp42 = entityAnswerResult;
    }
    tmp40 = tmp42;
  } else if (null != multiSelectAnswerResult) {
    let tmp41 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp41 = multiSelectAnswerResult;
    }
    tmp40 = tmp41;
  } else {
    let str2 = "";
    if ("" !== str.trim()) {
      let obj3 = { kind: "custom", text: str.trim() };
      tmp40 = obj3;
    } else {
      tmp40 = first[tmp16.id];
      if (tmp40 == null) {
        tmp40 = null;
      }
    }
  }
  c22 = tmp40;
  let tmp43 = null;
  if (!isImageQuestionResult) {
    let obj4 = {
      size: "md",
      placeholder: intl.string(clarification(tmp19[7])["tOC+tn"]),
      accessibilityLabel: intl2.formatToPlainString(clarification(tmp19[7])["4JeYPB"], obj5),
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
      onSubmitEditing: callback4,
      returnKeyType: "send"
    };
    const TextInput = tmp18(tmp19[14]).TextInput;
    intl = tmp18(tmp19[6]).intl;
    intl2 = tmp18(tmp19[6]).intl;
    obj5 = { question: tmp16.question };
    tmp43 = c6(TextInput, obj4);
  }
  let obj6 = { style: tmp.card, children: null };
  let tmp50 = null;
  const obj7 = { style: tmp.footer, children: items6 };
  const obj8 = { style: tmp.customField, children: items5 };
  const tmp48 = clarification(onSubmit[24]);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj10) };
    let Text = tmp18(tmp19[15]).Text;
    intl3 = tmp18(tmp19[6]).intl;
    obj10 = { index: bound + 1, total: clarification.questions.length };
    tmp50 = c6(Text, obj9);
  }
  items5 = [tmp50, ];
  const obj11 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
  items5[1] = c6(tmp18(onSubmit[15]).Text, obj11);
  items6 = [c7(closure_5, obj8), ];
  let tmp52Result = null;
  if (null != onDismiss) {
    const obj12 = { variant: "tertiary", size: "sm", icon: c6(tmp18(onSubmit[17]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp18(tmp19[16]).IconButton;
    intl4 = tmp18(tmp19[6]).intl;
    tmp52Result = tmp52(IconButton, obj12);
  }
  items6[1] = tmp52Result;
  const items7 = [c7(closure_5, obj7), , , , , ];
  let tmp52Result5 = null;
  if (true === clarification.questions[bound].multi_select) {
    const obj13 = { variant: "text-xs/normal", color: "text-muted", children: intl5.string(clarification(onSubmit[7]).tE8qbz) };
    const Text2 = tmp18(tmp19[15]).Text;
    intl5 = tmp18(tmp19[6]).intl;
    tmp52Result5 = tmp52(Text2, obj13);
  }
  items7[1] = tmp52Result5;
  if (isImageQuestionResult) {
    const obj14 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp14, onPick: callback1, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp14) };
    const tmp47Result = clarification(onSubmit[18]);
    tmp52Result6 = tmp52(tmp47Result, obj14);
  } else if (true === clarification.questions[bound].multi_select) {
    const obj15 = {
      hasIcons: false,
      children: options.map((label) => {
          let joined;
          let closure_0 = label;
          str = "";
          const obj = {
            label: label.label,
            subLabel: joined,
            checked: _undefined4.includes(label.id),
            disabled,
            onPress() {
              return callback1(label);
            }
          };
          const TableCheckboxRow = projectId(onSubmit[20]).TableCheckboxRow;
          const tmp = c6;
          const tmp2 = projectId;
          if (true === label.recommended) {
            const intl = tmp2(tmp3[6]).intl;
            str = intl.string(clarification(tmp3[7]).zku6r1);
          }
          const items = [str, ];
          let str2 = label.detail;
          if (str2 == null) {
            str2 = "";
          }
          items[1] = str2;
          const found = items.filter(f112103);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp16.options;
    const TableRowGroup = tmp18(tmp19[19]).TableRowGroup;
    tmp52Result6 = tmp52(TableRowGroup, obj15);
  } else {
    const options1 = tmp16.options;
    tmp52Result6 = options1.map((answer) => {
      let AQbxhf;
      let formatToPlainString;
      let intl2;
      let items;
      let items1;
      let obj2;
      let tmp5;
      let closure_0 = answer;
      let fn;
      const Card = projectId(onSubmit[21]).Card;
      if (!closure_11) {
        fn = () => callback1(answer);
      }
      const obj = { onPress: fn, accessibilityLabel: formatToPlainString(AQbxhf, obj2), children: items1 };
      const intl = tmp2(tmp3[6]).intl;
      formatToPlainString = intl.formatToPlainString;
      if (true === answer.recommended) {
        AQbxhf = clarification(tmp3[7])["2p6UFz"];
        tmp5 = clarification;
      } else {
        AQbxhf = clarification(tmp3[7]).AQbxhf;
        tmp5 = clarification;
      }
      const obj3 = { style: optionHeader.optionHeader, children: items };
      items = [, ];
      obj2 = { answer: answer.label };
      const obj4 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
      items[0] = _undefined(projectId(onSubmit[15]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = closure_5;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
        const Text = tmp2(tmp3[15]).Text;
        intl2 = tmp2(tmp3[6]).intl;
        tmp8Result = tmp8(Text, obj5);
      }
      items[1] = tmp8Result;
      items1 = [_undefined2(tmp7, obj3), ];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = tmp8(tmp2(tmp3[15]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined2(Card, obj, answer.id);
    });
  }
  items7[2] = tmp52Result6;
  let tmp52Result7 = null;
  if (null != clarification.questions[bound].input) {
    const obj16 = { projectId, question: clarification.questions[bound], value: tmp59, disabled: tmp14, onChange: callback3, fallback: tmp60 };
    tmp59 = tmp10[tmp16.id];
    const tmp47Result2 = clarification(onSubmit[22]);
    if (tmp59 == null) {
      tmp59 = closure_10;
    }
    tmp60 = null;
    if (false === clarification.questions[bound].allow_custom) {
      tmp60 = tmp43;
    }
    tmp52Result7 = tmp52(tmp47Result2, obj16);
  }
  items7[3] = tmp52Result7;
  let tmp61 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp61 = tmp43;
  }
  items7[4] = tmp61;
  if (clarification.questions.length <= 1) {
    if (true !== clarification.questions[bound].multi_select) {
      let tmp46Result;
      if (!isImageQuestionResult) {
        tmp46Result = null;
      }
      items7[5] = tmp46Result;
      obj6.children = items7;
      return c7(tmp48, obj6);
    }
  }
  let tmp52Result8 = null;
  const obj17 = { style: tmp.footer, children: items8 };
  if (bound > 0) {
    tmp52Result8 = null;
    if (!tmp14) {
      const obj18 = { variant: "tertiary", size: "sm", text: intl6.string(clarification(onSubmit[7]).Pk5lfA), onPress: callback2 };
      const Button = tmp18(tmp19[23]).Button;
      intl6 = tmp18(tmp19[6]).intl;
      tmp52Result8 = tmp52(Button, obj18);
    }
  }
  items8 = [tmp52Result8, , ];
  const obj19 = { style: tmp.customField };
  items8[1] = c6(closure_5, obj19);
  const Button2 = tmp18(tmp19[23]).Button;
  if (!tmp14) {
    tmp14 = null == tmp40;
  }
  const obj20 = {
    variant: "primary",
    size: "sm",
    disabled: tmp14,
    text: string(w1nRmT),
    onPress() {
      if (null != c22) {
        callback(tmp);
      }
    }
  };
  const intl7 = tmp18(tmp19[6]).intl;
  string = intl7.string;
  if (bound === clarification.questions.length - 1) {
    w1nRmT = tmp18(tmp19[6]).t.geKm7t;
  } else {
    w1nRmT = tmp47(tmp19[7]).w1nRmT;
  }
  items8[2] = c6(Button2, obj20);
  tmp46Result = tmp46(tmp49, obj17);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;
