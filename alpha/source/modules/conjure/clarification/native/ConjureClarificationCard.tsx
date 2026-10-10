// Module ID: 17238
// Function ID: 17239
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 5092, 587, 1126, 3849, 558, 576, 17239, 17240, 17241, 6285, 5088, 7573, 6207, 17242, 6264, 6176, 6181, 17248, 5379, 17149, 2]

// Module 17238 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 17241 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const f128386 = (item) => "" !== item;
let react = react_mod;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(onSubmit) {
  let answeredOptionIdsResult;
  let clarification;
  let closure_4;
  let closure_7;
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
  let optionHeader;
  let options;
  let projectId;
  let string;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp27;
  let tmp92;
  let tmp93;
  let w1nRmT;
  let tmp = clarification;
  let tmp2 = dependencyMap;
  let obj = clarification(576);
  const cResult = obj.c(101);
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
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
  let closure_5 = tmp6Result[1];
  const first2 = tmp6Result[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  const tmp6Result5 = first1(obj3.useState(tmp13), 2);
  let closure_6 = tmp6Result5[1];
  const first3 = tmp6Result5[0];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = {};
    cResult[3] = obj6;
    tmp16 = obj6;
  } else {
    tmp16 = cResult[3];
  }
  [tmp18, closure_7] = first1(obj3.useState(tmp16), 2);
  first1(obj3.useState(tmp16), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {};
    cResult[4] = obj7;
    tmp19 = obj7;
  } else {
    tmp19 = cResult[4];
  }
  [tmp21, closure_8] = first1(obj3.useState(tmp19), 2);
  first1(obj3.useState(tmp19), 2);
  const tmp6Result8 = first1(obj3.useState(0), 2);
  closure_9 = tmp6Result8[1];
  const disabled = tmp23;
  const bound = Math.min(tmp6Result8[0], length - 1);
  const tmp25 = clarification.questions[bound];
  let id = tmp25;
  let closure_13 = tmp26;
  if (cResult[5] !== tmp25) {
    const tmpResult = tmp(17239);
    const isImageQuestionResult = tmpResult.isImageQuestion(tmp25);
    cResult[5] = tmp25;
    cResult[6] = isImageQuestionResult;
    tmp27 = isImageQuestionResult;
  } else {
    tmp27 = cResult[6];
  }
  let closure_14 = tmp27;
  if (true === tmp25.multi_select) {
    let tmp30 = first3[tmp25.id];
    if (tmp30 == null) {
      tmp30 = closure_9;
    }
    answeredOptionIdsResult = tmp30;
  } else {
    const tmpResult5 = tmp(17239);
    answeredOptionIdsResult = tmpResult5.answeredOptionIds(first1[tmp25.id]);
  }
  const tmpResult6 = tmp(17240);
  const conjureOwnImages = tmpResult6.useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[7] === first1) {
    if (cResult[8] === clarification) {
      if (cResult[9] === bound) {
        if (cResult[10] === onSubmit) {
          let tmp31;
          if (cResult[11] === tmp25.id) {
            tmp31 = cResult[12];
          }
          let closure_16 = tmp31;
          if (cResult[13] === true === tmp25.multi_select) {
            if (cResult[14] === tmp27) {
              if (cResult[15] === tmp25) {
                let tmp32;
                if (cResult[16] === tmp31) {
                  tmp32 = cResult[17];
                }
                let closure_17 = tmp32;
                if (cResult[18] === null == onSubmit) {
                  let tmp33;
                  if (cResult[19] === bound) {
                    tmp33 = cResult[20];
                  }
                  let str = first2[tmp25.id];
                  if (str == null) {
                    str = "";
                  }
                  let multiSelectAnswerResult = null;
                  if (true === tmp25.multi_select) {
                    const tmpResult7 = tmp(17241);
                    multiSelectAnswerResult = tmpResult7.multiSelectAnswer(tmp25, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp25));
                  }
                  if (cResult[21] === str) {
                    if (cResult[22] === tmp18) {
                      if (cResult[23] === tmp21) {
                        if (cResult[24] === tmp25.id) {
                          let tmp39;
                          let tmp47;
                          if (cResult[25] === tmp25.input) {
                            tmp39 = cResult[26];
                          }
                          const text = tmp39;
                          if (cResult[27] !== tmp25.id) {
                            function fe(arg0, arg1) {
                              let user;
                              let closure_0 = arg0;
                              let closure_1 = arg1;
                              closure_7((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = closure_0;
                                return obj;
                              });
                              closure_8((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = closure_1;
                                return obj;
                              });
                            }
                            cResult[27] = tmp25.id;
                            cResult[28] = fe;
                            tmp47 = fe;
                          } else {
                            tmp47 = cResult[28];
                          }
                          if (cResult[29] === str) {
                            if (cResult[30] === multiSelectAnswerResult) {
                              if (cResult[31] === tmp39) {
                                let tmp48;
                                let tmp50;
                                if (cResult[32] === tmp31) {
                                  tmp48 = cResult[33];
                                }
                                if (cResult[34] === first1) {
                                  if (cResult[35] === str) {
                                    if (cResult[36] === multiSelectAnswerResult) {
                                      if (cResult[37] === tmp39) {
                                        let tmp49;
                                        if (cResult[38] === tmp25.id) {
                                          tmp49 = cResult[39];
                                        }
                                        let closure_21 = tmp49;
                                        if (cResult[40] === tmp48) {
                                          if (cResult[41] === str) {
                                            if (cResult[42] === tmp27) {
                                              if (cResult[43] === tmp25.id) {
                                                let tmp54;
                                                if (cResult[44] === tmp25.question) {
                                                  tmp54 = cResult[45];
                                                }
                                                if (cResult[46] === bound) {
                                                  let tmp58;
                                                  let tmp62;
                                                  if (cResult[47] === clarification.questions.length) {
                                                    tmp58 = cResult[48];
                                                  }
                                                  if (cResult[49] !== tmp25.question) {
                                                    const obj8 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp25.question };
                                                    const tmp64 = closure_6(tmp(5088).Text, obj8);
                                                    cResult[49] = tmp25.question;
                                                    cResult[50] = tmp64;
                                                    tmp62 = tmp64;
                                                  } else {
                                                    tmp62 = cResult[50];
                                                  }
                                                  if (cResult[51] === tmp4.customField) {
                                                    if (cResult[52] === tmp58) {
                                                      let tmp65;
                                                      let tmp69;
                                                      if (cResult[53] === tmp62) {
                                                        tmp65 = cResult[54];
                                                      }
                                                      if (cResult[55] !== onDismiss) {
                                                        let tmp70 = null;
                                                        if (null != onDismiss) {
                                                          const obj9 = { variant: "tertiary", size: "sm", icon: closure_6(tmp(6207).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(onSubmit(3849).qVXlk0) };
                                                          const IconButton = tmp(7573).IconButton;
                                                          intl4 = tmp(1126).intl;
                                                          tmp70 = closure_6(IconButton, obj9);
                                                        }
                                                        cResult[55] = onDismiss;
                                                        cResult[56] = tmp70;
                                                        tmp69 = tmp70;
                                                      } else {
                                                        tmp69 = cResult[56];
                                                      }
                                                      if (cResult[57] === tmp4.footer) {
                                                        if (cResult[58] === tmp65) {
                                                          let tmp73;
                                                          let tmp77;
                                                          let mapped;
                                                          if (cResult[59] === tmp69) {
                                                            tmp73 = cResult[60];
                                                          }
                                                          if (cResult[61] !== (true === tmp25.multi_select)) {
                                                            let tmp78 = null;
                                                            if (true === tmp25.multi_select) {
                                                              const obj10 = { variant: "text-xs/normal", color: "text-muted", children: intl5.string(onSubmit(3849).tE8qbz) };
                                                              const Text2 = tmp(5088).Text;
                                                              intl5 = tmp(1126).intl;
                                                              tmp78 = closure_6(Text2, obj10);
                                                            }
                                                            cResult[61] = true === tmp25.multi_select;
                                                            cResult[62] = tmp78;
                                                            tmp77 = tmp78;
                                                          } else {
                                                            tmp77 = cResult[62];
                                                          }
                                                          if (cResult[63] === null == onSubmit) {
                                                            if (cResult[64] === tmp32) {
                                                              if (cResult[65] === true === tmp25.multi_select) {
                                                                if (cResult[66] === conjureOwnImages) {
                                                                  if (cResult[67] === tmp27) {
                                                                    if (cResult[68] === projectId) {
                                                                      if (cResult[69] === tmp25) {
                                                                        if (cResult[70] === answeredOptionIdsResult) {
                                                                          let tmp81;
                                                                          if (cResult[71] === tmp4.optionHeader) {
                                                                            tmp81 = cResult[72];
                                                                          }
                                                                          if (cResult[73] === null == onSubmit) {
                                                                            if (cResult[74] === tmp18) {
                                                                              if (cResult[75] === tmp54) {
                                                                                if (cResult[76] === tmp47) {
                                                                                  if (cResult[77] === projectId) {
                                                                                    let tmp87;
                                                                                    let tmp96;
                                                                                    if (cResult[78] === tmp25) {
                                                                                      tmp87 = cResult[79];
                                                                                    }
                                                                                    let tmp94 = null;
                                                                                    if (false !== tmp25.allow_custom) {
                                                                                      tmp94 = tmp54;
                                                                                    }
                                                                                    if (cResult[80] === null == onSubmit) {
                                                                                      if (cResult[81] === tmp33) {
                                                                                        if (cResult[82] === bound) {
                                                                                          if (cResult[83] === true === tmp25.multi_select) {
                                                                                            if (cResult[84] === tmp49) {
                                                                                              if (cResult[85] === tmp27) {
                                                                                                if (cResult[86] === tmp25.input) {
                                                                                                  if (cResult[87] === tmp31) {
                                                                                                    if (cResult[88] === tmp4.customField) {
                                                                                                      if (cResult[89] === tmp4.footer) {
                                                                                                        if (cResult[90] === bound === tmp53) {
                                                                                                          if (cResult[91] === clarification.questions.length) {
                                                                                                            tmp96 = cResult[92];
                                                                                                          }
                                                                                                          if (cResult[93] === tmp4.card) {
                                                                                                            if (cResult[94] === tmp73) {
                                                                                                              if (cResult[95] === tmp77) {
                                                                                                                if (cResult[96] === tmp81) {
                                                                                                                  if (cResult[97] === tmp87) {
                                                                                                                    if (cResult[98] === tmp94) {
                                                                                                                      let tmp106;
                                                                                                                      if (cResult[99] === tmp96) {
                                                                                                                        tmp106 = cResult[100];
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
                                                                                                          const tmp109 = closure_7(onSubmit(17149), obj11);
                                                                                                          cResult[93] = tmp4.card;
                                                                                                          cResult[94] = tmp73;
                                                                                                          cResult[95] = tmp77;
                                                                                                          cResult[96] = tmp81;
                                                                                                          cResult[97] = tmp87;
                                                                                                          cResult[98] = tmp94;
                                                                                                          cResult[99] = tmp96;
                                                                                                          cResult[100] = tmp109;
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
                                                                                        cResult[80] = null == onSubmit;
                                                                                        cResult[81] = tmp33;
                                                                                        cResult[82] = bound;
                                                                                        cResult[83] = true === tmp25.multi_select;
                                                                                        cResult[84] = tmp49;
                                                                                        cResult[85] = tmp27;
                                                                                        cResult[86] = tmp25.input;
                                                                                        cResult[87] = tmp31;
                                                                                        cResult[88] = tmp4.customField;
                                                                                        cResult[89] = tmp4.footer;
                                                                                        cResult[90] = bound === tmp53;
                                                                                        cResult[91] = clarification.questions.length;
                                                                                        cResult[92] = tmp98Result;
                                                                                        tmp96 = tmp98Result;
                                                                                      }
                                                                                    }
                                                                                    let tmp100 = null;
                                                                                    const obj12 = { style: tmp4.footer, children: items1 };
                                                                                    const tmp98 = closure_7;
                                                                                    if (bound > 0) {
                                                                                      tmp100 = null;
                                                                                      if (null != onSubmit) {
                                                                                        const obj13 = { variant: "tertiary", size: "sm", text: intl6.string(onSubmit(3849).Pk5lfA), onPress: tmp33 };
                                                                                        const Button = tmp(5379).Button;
                                                                                        intl6 = tmp(1126).intl;
                                                                                        tmp100 = closure_6(Button, obj13);
                                                                                      }
                                                                                    }
                                                                                    items1 = [tmp100, , ];
                                                                                    const obj14 = { style: tmp4.customField };
                                                                                    items1[1] = closure_6(closure_5, obj14);
                                                                                    let tmp104 = tmp23;
                                                                                    const Button2 = tmp(5379).Button;
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
                                                                                                                                                                          if (null != closure_21) {
                                                                                                                                                                            closure_16(tmp);
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                    };
                                                                                    const intl7 = tmp(1126).intl;
                                                                                    string = intl7.string;
                                                                                    if (bound === tmp53) {
                                                                                      w1nRmT = tmp(1126).t.geKm7t;
                                                                                    } else {
                                                                                      w1nRmT = onSubmit(3849).w1nRmT;
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
                                                                            const tmp91 = onSubmit(17248);
                                                                            if (tmp92 == null) {
                                                                              tmp92 = disabled;
                                                                            }
                                                                            tmp93 = null;
                                                                            if (false === tmp25.allow_custom) {
                                                                              tmp93 = tmp54;
                                                                            }
                                                                            tmp89Result = tmp89(tmp91, obj16);
                                                                          }
                                                                          cResult[73] = null == onSubmit;
                                                                          cResult[74] = tmp18;
                                                                          cResult[75] = tmp54;
                                                                          cResult[76] = tmp47;
                                                                          cResult[77] = projectId;
                                                                          cResult[78] = tmp25;
                                                                          cResult[79] = tmp89Result;
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
                                                            const tmp86 = onSubmit(17242);
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
                                                                                                                              return closure_17(label);
                                                                                                                            }
                                                                                                                          };
                                                                                                                          const TableCheckboxRow = clarification(optionHeader[19]).TableCheckboxRow;
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
                                                                                                                          const found = items.filter(f128386);
                                                                                                                          joined = undefined;
                                                                                                                          if (found.length > 0) {
                                                                                                                            joined = found.join(" \u00B7 ");
                                                                                                                          }
                                                                                                                          return tmp(TableCheckboxRow, obj, label.id);
                                                                                                                        })
                                                            };
                                                            options = tmp25.options;
                                                            const TableRowGroup = tmp(6264).TableRowGroup;
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
                                                              const Card = clarification(optionHeader[20]).Card;
                                                              if (!closure_10) {
                                                                fn = () => closure_17(answer);
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
                                                              items[0] = closure_6(clarification(optionHeader[14]).Text, obj4);
                                                              let tmp8Result = null;
                                                              const tmp7 = closure_5;
                                                              if (true === answer.recommended) {
                                                                const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(optionHeader[7]).zku6r1) };
                                                                const Text = tmp2(tmp3[14]).Text;
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
                                                                  tmp8Result2 = tmp8(tmp2(tmp3[14]).Text, obj6);
                                                                }
                                                              }
                                                              items1[1] = tmp8Result2;
                                                              return closure_7(Card, obj, answer.id);
                                                            });
                                                          }
                                                          cResult[63] = null == onSubmit;
                                                          cResult[64] = tmp32;
                                                          cResult[65] = true === tmp25.multi_select;
                                                          cResult[66] = conjureOwnImages;
                                                          cResult[67] = tmp27;
                                                          cResult[68] = projectId;
                                                          cResult[69] = tmp25;
                                                          cResult[70] = answeredOptionIdsResult;
                                                          cResult[71] = tmp4.optionHeader;
                                                          cResult[72] = mapped;
                                                          tmp81 = mapped;
                                                        }
                                                      }
                                                      const obj19 = { style: tmp4.footer, children: items2 };
                                                      items2 = [tmp65, tmp69];
                                                      const tmp76 = closure_7(closure_5, obj19);
                                                      cResult[57] = tmp4.footer;
                                                      cResult[58] = tmp65;
                                                      cResult[59] = tmp69;
                                                      cResult[60] = tmp76;
                                                      tmp73 = tmp76;
                                                    }
                                                  }
                                                  const obj20 = { style: tmp4.customField, children: items3 };
                                                  items3 = [tmp58, tmp62];
                                                  const tmp68 = closure_7(closure_5, obj20);
                                                  cResult[51] = tmp4.customField;
                                                  cResult[52] = tmp58;
                                                  cResult[53] = tmp62;
                                                  cResult[54] = tmp68;
                                                  tmp65 = tmp68;
                                                }
                                                let tmp59 = null;
                                                if (clarification.questions.length > 1) {
                                                  const obj21 = { variant: "text-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(onSubmit(3849).yzYUjq, obj22) };
                                                  let Text = tmp(5088).Text;
                                                  intl3 = tmp(1126).intl;
                                                  obj22 = { index: bound + 1, total: clarification.questions.length };
                                                  tmp59 = closure_6(Text, obj21);
                                                }
                                                cResult[46] = bound;
                                                cResult[47] = clarification.questions.length;
                                                cResult[48] = tmp59;
                                                tmp58 = tmp59;
                                              }
                                            }
                                          }
                                        }
                                        let tmp55 = null;
                                        if (!tmp27) {
                                          const obj23 = {
                                            size: "md",
                                            placeholder: intl.string(onSubmit(3849)["tOC+tn"]),
                                            accessibilityLabel: intl2.formatToPlainString(onSubmit(3849)["4JeYPB"], obj24),
                                            value: str,
                                            onChange(arg0) {
                                                                                      let closure_0 = arg0;
                                                                                      return closure_5((arg0) => {
                                                                                        const obj = {};
                                                                                        const merged = Object.assign(arg0);
                                                                                        obj[id.id] = closure_0;
                                                                                        return obj;
                                                                                      });
                                                                                    },
                                            onSubmitEditing: tmp48,
                                            returnKeyType: "send"
                                          };
                                          const TextInput = tmp(6285).TextInput;
                                          intl = tmp(1126).intl;
                                          intl2 = tmp(1126).intl;
                                          obj24 = { question: tmp25.question };
                                          tmp55 = closure_6(TextInput, obj23);
                                        }
                                        cResult[40] = tmp48;
                                        cResult[41] = str;
                                        cResult[42] = tmp27;
                                        cResult[43] = tmp25.id;
                                        cResult[44] = tmp25.question;
                                        cResult[45] = tmp55;
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
                                cResult[34] = first1;
                                cResult[35] = str;
                                cResult[36] = multiSelectAnswerResult;
                                cResult[37] = tmp39;
                                cResult[38] = tmp25.id;
                                cResult[39] = tmp50;
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
                                  closure_16(obj);
                                }
                              } else if ("" !== multiSelectAnswerResult.text) {
                                closure_16(multiSelectAnswerResult);
                              }
                            } else if ("" !== text.text) {
                              closure_16(text);
                            }
                          }
                          cResult[29] = str;
                          cResult[30] = multiSelectAnswerResult;
                          cResult[31] = tmp39;
                          cResult[32] = tmp31;
                          cResult[33] = ve;
                          tmp48 = ve;
                        }
                      }
                    }
                  }
                  let entityAnswerResult = null;
                  if (null != tmp25.input) {
                    const input = tmp25.input;
                    let tmp42 = tmp18[tmp25.id];
                    const entityAnswer = tmp(17241).entityAnswer;
                    const tmpResult8 = tmp(17241);
                    if (tmp42 == null) {
                      tmp42 = disabled;
                    }
                    entityAnswerResult = entityAnswer(input, tmp42, str, tmp21[tmp25.id]);
                  }
                  cResult[21] = str;
                  cResult[22] = tmp18;
                  cResult[23] = tmp21;
                  cResult[24] = tmp25.id;
                  cResult[25] = tmp25.input;
                  cResult[26] = entityAnswerResult;
                  tmp39 = entityAnswerResult;
                }
                function de() {
                  const tmp = disabled || 0 === bound;
                  if (!tmp) {
                    closure_9(bound - 1);
                  }
                }
                cResult[18] = null == onSubmit;
                cResult[19] = bound;
                cResult[20] = de;
                tmp33 = de;
              }
            }
          }
          function re(arg0) {
            let user;
            id = arg0;
            const tmp = closure_13;
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
              let tmp2 = closure_5;
              const tmp3 = closure_5((arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                obj[user.id] = "";
                return obj;
              });
              let obj = { kind: "option", optionId: null, text: null };
              ({ id: obj.optionId, label: obj.text } = arg0);
              let tmp4 = closure_14;
              if (tmp4) {
                closure_4((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[user.id] = obj;
                  return obj;
                });
              } else {
                closure_16(obj);
              }
            }
          }
          cResult[13] = true === tmp25.multi_select;
          cResult[14] = tmp27;
          cResult[15] = tmp25;
          cResult[16] = tmp31;
          cResult[17] = re;
          tmp32 = re;
        }
      }
    }
  }
  function le(arg0) {
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
        closure_9(result);
      }
    }
  }
  cResult[7] = first1;
  cResult[8] = clarification;
  cResult[9] = bound;
  cResult[10] = onSubmit;
  cResult[11] = tmp25.id;
  cResult[12] = le;
  tmp31 = le;
}) : (function ConjureClarificationCard(onSubmit) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let answeredOptionIdsResult;
  let c5;
  let c6;
  let c7;
  let clarification;
  let closure_4;
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
  let projectId;
  let string;
  let tmp10;
  let tmp40;
  let tmp52Result6;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp8;
  let w1nRmT;
  ({ projectId, clarification } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const onDismiss = onSubmit.onDismiss;
  let first;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  let c15;
  let callback;
  let callback1;
  let str;
  let c19;
  let c20;
  let c21;
  let tmp = closure_8();
  dependencyMap = tmp;
  let obj = react;
  let tmp2 = first(react.useState({}), 2);
  first = tmp2[0];
  let tmp4 = tmp2[1];
  react = tmp4;
  let tmp5 = first(react.useState({}), 2);
  [tmp6, c5] = tmp5;
  let tmp7 = first(react.useState({}), 2);
  [tmp8, c6] = tmp7;
  [tmp10, c7] = first(react.useState({}), 2);
  const tmp9 = first(react.useState({}), 2);
  const tmp11 = first(react.useState({}), 2);
  closure_8 = tmp11[1];
  const first1 = tmp11[0];
  const tmp13 = first(react.useState(0), 2);
  closure_9 = tmp13[1];
  let tmp14 = null == onSubmit;
  const disabled = tmp14;
  const bound = Math.min(tmp13[0], length - 1);
  const tmp16 = clarification.questions[bound];
  let id = tmp16;
  let closure_13 = tmp17;
  let obj2 = clarification(17239);
  const isImageQuestionResult = obj2.isImageQuestion(tmp16);
  let c14 = isImageQuestionResult;
  if (true === tmp16.multi_select) {
    let tmp22 = tmp8[tmp16.id];
    if (tmp22 == null) {
      tmp22 = closure_9;
    }
    answeredOptionIdsResult = tmp22;
  } else {
    const tmp18Result = clarification(17239);
    answeredOptionIdsResult = tmp18Result.answeredOptionIds(first[tmp16.id]);
  }
  c15 = answeredOptionIdsResult;
  const tmp18Result4 = clarification(17240);
  const conjureOwnImages = tmp18Result4.useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, onSubmit, tmp16.id];
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
        closure_9(result);
      }
    }
  }, items);
  let items1 = [tmp17, isImageQuestionResult, tmp16, callback];
  callback1 = obj.useCallback((arg0) => {
    let user;
    id = arg0;
    const tmp = closure_13;
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
      let tmp4 = c14;
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
  const items2 = [tmp14, bound];
  str = tmp6[tmp16.id];
  const callback2 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_9(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === tmp16.multi_select) {
    const tmp18Result5 = clarification(17241);
    multiSelectAnswerResult = tmp18Result5.multiSelectAnswer(tmp16, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp16));
  }
  c19 = multiSelectAnswerResult;
  let entityAnswerResult = null;
  if (null != tmp16.input) {
    const input = tmp16.input;
    let tmp33 = tmp10[tmp16.id];
    const entityAnswer = clarification(17241).entityAnswer;
    const tmp18Result6 = clarification(17241);
    if (tmp33 == null) {
      tmp33 = disabled;
    }
    entityAnswerResult = entityAnswer(input, tmp33, str, first1[tmp16.id]);
  }
  c20 = entityAnswerResult;
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
    closure_8((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user.id] = closure_1;
      return obj;
    });
  }, items3);
  const callback4 = obj.useCallback(() => {
    if (null == _undefined4) {
      if (null == _undefined) {
        const trimmed = str.trim();
        if ("" !== trimmed) {
          const obj = { kind: "custom", text: trimmed };
          callback(obj);
        }
      } else if ("" !== _undefined.text) {
        callback(_undefined);
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
  c21 = tmp40;
  let tmp43 = null;
  if (!isImageQuestionResult) {
    let obj4 = {
      size: "md",
      placeholder: intl.string(onSubmit(3849)["tOC+tn"]),
      accessibilityLabel: intl2.formatToPlainString(onSubmit(3849)["4JeYPB"], obj5),
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
    const TextInput = tmp18(6285).TextInput;
    intl = tmp18(1126).intl;
    intl2 = tmp18(1126).intl;
    obj5 = { question: tmp16.question };
    tmp43 = c6(TextInput, obj4);
  }
  let obj6 = { style: tmp.card, children: null };
  let tmp50 = null;
  const obj7 = { style: tmp.footer, children: items6 };
  const obj8 = { style: tmp.customField, children: items5 };
  const tmp48 = onSubmit(17149);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(onSubmit(3849).yzYUjq, obj10) };
    let Text = tmp18(5088).Text;
    intl3 = tmp18(1126).intl;
    obj10 = { index: bound + 1, total: clarification.questions.length };
    tmp50 = c6(Text, obj9);
  }
  items5 = [tmp50, ];
  const obj11 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp16.question };
  items5[1] = c6(clarification(5088).Text, obj11);
  items6 = [c7(c5, obj8), ];
  let tmp52Result = null;
  if (null != onDismiss) {
    const obj12 = { variant: "tertiary", size: "sm", icon: c6(clarification(6207).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(onSubmit(3849).qVXlk0) };
    const IconButton = tmp18(7573).IconButton;
    intl4 = tmp18(1126).intl;
    tmp52Result = tmp52(IconButton, obj12);
  }
  items6[1] = tmp52Result;
  const items7 = [c7(c5, obj7), , , , , ];
  let tmp52Result5 = null;
  if (true === tmp16.multi_select) {
    const obj13 = { variant: "text-xs/normal", color: "text-muted", children: intl5.string(onSubmit(3849).tE8qbz) };
    const Text2 = tmp18(5088).Text;
    intl5 = tmp18(1126).intl;
    tmp52Result5 = tmp52(Text2, obj13);
  }
  items7[1] = tmp52Result5;
  if (isImageQuestionResult) {
    const obj14 = { projectId, question: tmp16, selectedIds: answeredOptionIdsResult, disabled: tmp14, onPick: callback1, own: conjureOwnImages.controlsFor(tmp16, tmp14) };
    const tmp47Result = onSubmit(17242);
    tmp52Result6 = tmp52(tmp47Result, obj14);
  } else if (true === tmp16.multi_select) {
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
          const TableCheckboxRow = clarification(optionHeader[19]).TableCheckboxRow;
          const tmp = c6;
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
          const found = items.filter(f128386);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp16.options;
    const TableRowGroup = tmp18(6264).TableRowGroup;
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
      const Card = clarification(optionHeader[20]).Card;
      if (!closure_10) {
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
      items[0] = _undefined2(clarification(optionHeader[14]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = c5;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(optionHeader[7]).zku6r1) };
        const Text = tmp2(tmp3[14]).Text;
        intl2 = tmp2(tmp3[6]).intl;
        tmp8Result = tmp8(Text, obj5);
      }
      items[1] = tmp8Result;
      items1 = [_undefined3(tmp7, obj3), ];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = tmp8(tmp2(tmp3[14]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined3(Card, obj, answer.id);
    });
  }
  items7[2] = tmp52Result6;
  let tmp52Result7 = null;
  if (null != tmp16.input) {
    const obj16 = { projectId, question: tmp16, value: tmp59, disabled: tmp14, onChange: callback3, fallback: tmp60 };
    tmp59 = tmp10[tmp16.id];
    const tmp47Result2 = onSubmit(17248);
    if (tmp59 == null) {
      tmp59 = disabled;
    }
    tmp60 = null;
    if (false === tmp16.allow_custom) {
      tmp60 = tmp43;
    }
    tmp52Result7 = tmp52(tmp47Result2, obj16);
  }
  items7[3] = tmp52Result7;
  let tmp61 = null;
  if (false !== tmp16.allow_custom) {
    tmp61 = tmp43;
  }
  items7[4] = tmp61;
  if (clarification.questions.length <= 1) {
    if (true !== tmp16.multi_select) {
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
      const obj18 = { variant: "tertiary", size: "sm", text: intl6.string(onSubmit(3849).Pk5lfA), onPress: callback2 };
      const Button = tmp18(5379).Button;
      intl6 = tmp18(1126).intl;
      tmp52Result8 = tmp52(Button, obj18);
    }
  }
  items8 = [tmp52Result8, , ];
  const obj19 = { style: tmp.customField };
  items8[1] = c6(c5, obj19);
  const Button2 = tmp18(5379).Button;
  if (!tmp14) {
    tmp14 = null == tmp40;
  }
  const obj20 = {
    variant: "primary",
    size: "sm",
    disabled: tmp14,
    text: string(w1nRmT),
    onPress() {
      if (null != c21) {
        callback(tmp);
      }
    }
  };
  const intl7 = tmp18(1126).intl;
  string = intl7.string;
  if (bound === clarification.questions.length - 1) {
    w1nRmT = tmp18(1126).t.geKm7t;
  } else {
    w1nRmT = tmp47(3849).w1nRmT;
  }
  items8[2] = c6(Button2, obj20);
  tmp46Result = tmp46(tmp49, obj17);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;
