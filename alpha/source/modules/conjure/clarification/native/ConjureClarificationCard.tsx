// Module ID: 12406
// Function ID: 12407
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 4969, 587, 1128, 3830, 558, 576, 12407, 12408, 12409, 12410, 6994, 5220, 7943, 6917, 12411, 6973, 6886, 6891, 12415, 5230, 12417, 11759, 2]

// Module 12406 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 12409 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const f113986 = (item) => "" !== item;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 }, linkConfigure: { alignSelf: "flex-end" } };
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
  let onDismiss;
  let onInputFocusChange;
  let onSubmit;
  let optionHeader;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp30;
  let tmp = projectId;
  let tmp2 = onSubmit;
  let obj = projectId(onSubmit[9]);
  const cResult = obj.c(112);
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange } = projectId);
  let tmp4 = closure_8();
  react = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  let tmp7 = onInputFocusChange(react.useState(first), 2);
  const first1 = tmp7[0];
  let closure_6 = tmp9;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {};
    cResult[1] = obj4;
    tmp10 = obj4;
  } else {
    tmp10 = cResult[1];
  }
  const tmp6Result = onInputFocusChange(obj3.useState(tmp10), 2);
  let closure_7 = tmp6Result[1];
  const first2 = tmp6Result[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  const tmp6Result6 = onInputFocusChange(obj3.useState(tmp13), 2);
  closure_8 = tmp6Result6[1];
  const first3 = tmp6Result6[0];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj6 = {};
    cResult[3] = obj6;
    tmp16 = obj6;
  } else {
    tmp16 = cResult[3];
  }
  [tmp18, closure_9] = onInputFocusChange(obj3.useState(tmp16), 2);
  onInputFocusChange(obj3.useState(tmp16), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = {};
    cResult[4] = obj7;
    tmp19 = obj7;
  } else {
    tmp19 = cResult[4];
  }
  [tmp21, closure_10] = onInputFocusChange(obj3.useState(tmp19), 2);
  onInputFocusChange(obj3.useState(tmp19), 2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = {};
    cResult[5] = obj8;
    tmp22 = obj8;
  } else {
    tmp22 = cResult[5];
  }
  const tmp6Result9 = onInputFocusChange(obj3.useState(tmp22), 2);
  const first4 = tmp6Result9[0];
  let closure_12 = tmp6Result9[1];
  const tmp6Result10 = onInputFocusChange(obj3.useState(0), 2);
  let closure_13 = tmp6Result10[1];
  const disabled = tmp26;
  const bound = Math.min(tmp6Result10[0], clarification.questions.length - 1);
  let id = tmp28;
  let closure_17 = tmp29;
  if (cResult[6] !== clarification.questions[bound]) {
    let tmpResult = tmp(tmp2[10]);
    const isImageQuestionResult = tmpResult.isImageQuestion(clarification.questions[bound]);
    cResult[6] = clarification.questions[bound];
    cResult[7] = isImageQuestionResult;
    tmp30 = isImageQuestionResult;
  } else {
    tmp30 = cResult[7];
  }
  let closure_18 = tmp30;
  if (true === clarification.questions[bound].multi_select) {
    let tmp33 = first3[tmp28.id];
    if (tmp33 == null) {
      tmp33 = closure_9;
    }
    answeredOptionIdsResult = tmp33;
  } else {
    const tmpResult4 = tmp(tmp2[10]);
    answeredOptionIdsResult = tmpResult4.answeredOptionIds(first1[tmp28.id]);
  }
  const tmpResult5 = tmp(tmp2[11]);
  const conjureOwnImages = tmpResult5.useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[8] === first1) {
    if (cResult[9] === clarification) {
      if (cResult[10] === bound) {
        if (cResult[11] === first4) {
          if (cResult[12] === onSubmit) {
            if (cResult[13] === projectId) {
              let tmp34;
              if (cResult[14] === clarification.questions[bound].id) {
                tmp34 = cResult[15];
              }
              let closure_20 = tmp34;
              if (cResult[16] === true === clarification.questions[bound].multi_select) {
                if (cResult[17] === tmp30) {
                  if (cResult[18] === clarification.questions[bound]) {
                    let tmp35;
                    if (cResult[19] === tmp34) {
                      tmp35 = cResult[20];
                    }
                    let closure_21 = tmp35;
                    if (cResult[21] === null == onSubmit) {
                      let str = first2[tmp28.id];
                      if (str == null) {
                        str = "";
                      }
                      let multiSelectAnswerResult = null;
                      if (true === clarification.questions[bound].multi_select) {
                        const tmpResult6 = tmp(tmp2[12]);
                        multiSelectAnswerResult = tmpResult6.multiSelectAnswer(tmp28, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp28));
                      }
                      if (cResult[24] === str) {
                        if (cResult[25] === tmp18) {
                          if (cResult[26] === tmp21) {
                            if (cResult[27] === clarification.questions[bound].id) {
                              let tmp42;
                              if (cResult[28] === clarification.questions[bound].input) {
                                tmp42 = cResult[29];
                              }
                              const text = tmp42;
                              if (cResult[30] !== clarification.questions[bound].id) {
                                class Ce {
                                  constructor(arg0, arg1) {
                                    let user;
                                    let closure_0 = arg0;
                                    let closure_1 = arg1;
                                    closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                  }
                                }
                                cResult[30] = clarification.questions[bound].id;
                                cResult[31] = Ce;
                              } else {
                                class Ce {
                                  constructor(arg0, arg1) {
                                    let user;
                                    let closure_0 = arg0;
                                    let closure_1 = arg1;
                                    closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                  }
                                }
                              }
                              if (cResult[32] === str) {
                                class Ce {
                                  constructor(arg0, arg1) {
                                    let user;
                                    let closure_0 = arg0;
                                    let closure_1 = arg1;
                                    closure_9((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_0;
                                      return obj;
                                    });
                                    closure_10((arg0) => {
                                      const obj = {};
                                      const merged = Object.assign(arg0);
                                      obj[user.id] = closure_1;
                                      return obj;
                                    });
                                  }
                                }
                              }
                              function ke() {
                                if (null == text) {
                                  if (null == multiSelectAnswerResult) {
                                    const trimmed = str.trim();
                                    if ("" !== trimmed) {
                                      const obj = { kind: "custom", text: trimmed };
                                      closure_20(obj);
                                    }
                                  } else if ("" !== multiSelectAnswerResult.text) {
                                    closure_20(multiSelectAnswerResult);
                                  }
                                } else if ("" !== text.text) {
                                  closure_20(text);
                                }
                              }
                              cResult[32] = str;
                              cResult[33] = multiSelectAnswerResult;
                              cResult[34] = tmp42;
                              cResult[35] = tmp34;
                              cResult[36] = ke;
                            }
                          }
                        }
                      }
                      let entityAnswerResult = null;
                      if (null != clarification.questions[bound].input) {
                        class Ce {
                          constructor(arg0, arg1) {
                            let user;
                            let closure_0 = arg0;
                            let closure_1 = arg1;
                            closure_9((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = closure_0;
                              return obj;
                            });
                            closure_10((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj[user.id] = closure_1;
                              return obj;
                            });
                          }
                        }
                        const input = tmp28.input;
                        const entityAnswer = tmp44.entityAnswer;
                        if (tmp18[clarification.questions[bound].id] == null) {
                          class Ce {
                            constructor(arg0, arg1) {
                              let user;
                              let closure_0 = arg0;
                              let closure_1 = arg1;
                              closure_9((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = closure_0;
                                return obj;
                              });
                              closure_10((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj[user.id] = closure_1;
                                return obj;
                              });
                            }
                          }
                        }
                        entityAnswerResult = entityAnswer(input, tmp45, str, tmp21[tmp28.id]);
                      }
                      cResult[24] = str;
                      cResult[25] = tmp18;
                      cResult[26] = tmp21;
                      cResult[27] = clarification.questions[bound].id;
                      cResult[28] = clarification.questions[bound].input;
                      cResult[29] = entityAnswerResult;
                      tmp42 = entityAnswerResult;
                    }
                    function xe() {
                      const tmp = disabled || 0 === bound;
                      if (!tmp) {
                        closure_13(bound - 1);
                      }
                    }
                    cResult[21] = null == onSubmit;
                    cResult[22] = bound;
                    cResult[23] = xe;
                  }
                }
              }
              function fe(arg0) {
                let user;
                id = arg0;
                const tmp = closure_17;
                if (tmp) {
                  closure_8((arr) => {
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
                  let tmp2 = closure_7;
                  const tmp3 = closure_7((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[user.id] = "";
                    return obj;
                  });
                  let obj = { kind: "option", optionId: null, text: null };
                  ({ id: obj.optionId, label: obj.text } = arg0);
                  let tmp4 = closure_18;
                  if (tmp4) {
                    closure_6((arg0) => {
                      obj = {};
                      const merged = Object.assign(arg0);
                      obj[user.id] = obj;
                      return obj;
                    });
                  } else {
                    closure_20(obj);
                  }
                }
              }
              cResult[16] = true === clarification.questions[bound].multi_select;
              cResult[17] = tmp30;
              cResult[18] = clarification.questions[bound];
              cResult[19] = tmp34;
              cResult[20] = fe;
              tmp35 = fe;
            }
          }
        }
      }
    }
  }
  function de(arg0) {
    let result1;
    if (null != onSubmit) {
      let obj = {};
      const merged = Object.assign(first1);
      obj[id.id] = arg0;
      closure_6(obj);
      const obj4 = projectId(onSubmit[12]);
      let result = obj4.followingClarificationStep(result1, obj, bound);
      if (null == result) {
        const tmp17Result = projectId(onSubmit[12]);
        result1 = tmp17Result.formatClarificationAnswers(tmp19, obj);
        if ("" !== result1) {
          const tmp17Result2 = projectId(onSubmit[13]);
          tmp17Result2.sendAfterLinkingApps(obj, result1, obj, first4, () => {
            obj = ConjureClarification;
            const result = obj.clarificationAnswersPayload(clarification, obj);
            const obj2 = ConjureClarification;
            return onSubmit(result1, result, obj2.clarificationAnswerAttachments(clarification, obj));
          });
        }
      } else {
        closure_13(result);
      }
    }
  }
  cResult[8] = first1;
  cResult[9] = clarification;
  cResult[10] = bound;
  cResult[11] = first4;
  cResult[12] = onSubmit;
  cResult[13] = projectId;
  cResult[14] = clarification.questions[bound].id;
  cResult[15] = de;
  tmp34 = de;
}) : (function ConjureClarificationCard(projectId) {
  let Button;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let answeredOptionIdsResult;
  let c10;
  let c7;
  let c8;
  let c9;
  let closure_12;
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
  let obj18;
  let obj5;
  let onDismiss;
  let optionHeader;
  let options;
  let string;
  let tmp10;
  let tmp12;
  let tmp20Result9;
  let tmp4;
  let tmp42;
  let tmp54Result7;
  let tmp6;
  let tmp61;
  let tmp62;
  let tmp8;
  let w1nRmT;
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  const onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange: _slicedToArray } = projectId);
  first = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  first1 = undefined;
  closure_12 = undefined;
  let c19;
  let callback;
  let callback1;
  let str;
  let c23;
  let c24;
  let c25;
  let tmp = c8();
  react = tmp;
  let obj = react;
  [first, tmp4] = react.useState({});
  let closure_6 = tmp4;
  let tmp5 = _slicedToArray(react.useState({}), 2);
  [tmp6, c7] = tmp5;
  let tmp7 = _slicedToArray(react.useState({}), 2);
  [tmp8, c8] = tmp7;
  [tmp10, c9] = _slicedToArray(react.useState({}), 2);
  const tmp9 = _slicedToArray(react.useState({}), 2);
  [tmp12, c10] = _slicedToArray(react.useState({}), 2);
  const tmp11 = _slicedToArray(react.useState({}), 2);
  [first1, closure_12] = react.useState({});
  const tmp15 = _slicedToArray(react.useState(0), 2);
  let closure_13 = tmp15[1];
  let tmp16 = null == onSubmit;
  const disabled = tmp16;
  const bound = Math.min(tmp15[0], length - 1);
  let id = tmp18;
  const tmp19 = true === tmp18.multi_select;
  let closure_17 = tmp19;
  let obj2 = projectId(onSubmit[10]);
  const isImageQuestionResult = obj2.isImageQuestion(clarification.questions[bound]);
  let c18 = isImageQuestionResult;
  if (tmp19) {
    let tmp24 = tmp8[tmp18.id];
    if (tmp24 == null) {
      tmp24 = c9;
    }
    answeredOptionIdsResult = tmp24;
  } else {
    const tmp20Result = projectId(onSubmit[10]);
    answeredOptionIdsResult = tmp20Result.answeredOptionIds(first[tmp18.id]);
  }
  c19 = answeredOptionIdsResult;
  const tmp20Result6 = projectId(onSubmit[11]);
  const conjureOwnImages = tmp20Result6.useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, first1, onSubmit, projectId, tmp18.id];
  callback = obj.useCallback((arg0) => {
    let result1;
    if (null != onSubmit) {
      let obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_6(obj);
      const obj4 = projectId(onSubmit[12]);
      let result = obj4.followingClarificationStep(result1, obj, bound);
      if (null == result) {
        const tmp17Result = projectId(onSubmit[12]);
        result1 = tmp17Result.formatClarificationAnswers(tmp19, obj);
        if ("" !== result1) {
          const tmp17Result2 = projectId(onSubmit[13]);
          tmp17Result2.sendAfterLinkingApps(obj, result1, obj, first1, () => {
            obj = ConjureClarification;
            const result = obj.clarificationAnswersPayload(clarification, obj);
            const obj2 = ConjureClarification;
            return onSubmit(result1, result, obj2.clarificationAnswerAttachments(clarification, obj));
          });
        }
      } else {
        closure_13(result);
      }
    }
  }, items);
  let items1 = [tmp19, isImageQuestionResult, tmp18, callback];
  callback1 = obj.useCallback((arg0) => {
    let user;
    id = arg0;
    const tmp = closure_17;
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
      let tmp4 = c18;
      if (tmp4) {
        closure_6((arg0) => {
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
  const items2 = [tmp16, bound];
  str = tmp6[tmp18.id];
  const callback2 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_13(bound - 1);
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (tmp19) {
    const tmp20Result7 = projectId(onSubmit[12]);
    multiSelectAnswerResult = tmp20Result7.multiSelectAnswer(tmp18, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp18));
  }
  c23 = multiSelectAnswerResult;
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const input = tmp18.input;
    let tmp35 = tmp10[tmp18.id];
    const entityAnswer = projectId(onSubmit[12]).entityAnswer;
    const tmp20Result8 = projectId(onSubmit[12]);
    if (tmp35 == null) {
      tmp35 = c10;
    }
    entityAnswerResult = entityAnswer(input, tmp35, str, tmp12[tmp18.id]);
  }
  c24 = entityAnswerResult;
  const items3 = [tmp18.id];
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
    _undefined4((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user.id] = closure_1;
      return obj;
    });
  }, items3);
  const callback4 = obj.useCallback(() => {
    if (null == _undefined3) {
      if (null == _undefined2) {
        const trimmed = str.trim();
        if ("" !== trimmed) {
          const obj = { kind: "custom", text: trimmed };
          callback(obj);
        }
      } else if ("" !== _undefined2.text) {
        callback(_undefined2);
      }
    } else if ("" !== _undefined3.text) {
      callback(_undefined3);
    }
  }, items4);
  if (null != entityAnswerResult) {
    let tmp44 = null;
    if ("" !== entityAnswerResult.text) {
      tmp44 = entityAnswerResult;
    }
    tmp42 = tmp44;
  } else if (null != multiSelectAnswerResult) {
    let tmp43 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp43 = multiSelectAnswerResult;
    }
    tmp42 = tmp43;
  } else {
    let str2 = "";
    if ("" !== str.trim()) {
      let obj3 = { kind: "custom", text: str.trim() };
      tmp42 = obj3;
    } else {
      tmp42 = first[tmp18.id];
      if (tmp42 == null) {
        tmp42 = null;
      }
    }
  }
  c25 = tmp42;
  let tmp45 = null;
  if (!isImageQuestionResult) {
    let obj4 = {
      size: "md",
      placeholder: tmp20Result9.clarificationDraftPlaceholder(tmp18),
      accessibilityLabel: intl.formatToPlainString(clarification(onSubmit[7])["4JeYPB"], obj5),
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
      onFocus() {
          let tmpResult;
          if (_slicedToArray != null) {
            tmpResult = tmp(true);
          }
          return tmpResult;
        },
      onBlur() {
          let tmpResult;
          if (_slicedToArray != null) {
            tmpResult = tmp(false);
          }
          return tmpResult;
        },
      returnKeyType: "send"
    };
    const TextInput = tmp20(tmp21[14]).TextInput;
    tmp20Result9 = projectId(onSubmit[12]);
    intl = tmp20(tmp21[6]).intl;
    obj5 = { question: tmp18.question };
    tmp45 = closure_6(TextInput, obj4);
  }
  let obj6 = { style: tmp.card, children: null };
  let tmp52 = null;
  const obj7 = { style: tmp.footer, children: items6 };
  const obj8 = { style: tmp.customField, children: items5 };
  const tmp50 = clarification(onSubmit[25]);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj10) };
    let Text = tmp20(tmp21[15]).Text;
    intl2 = tmp20(tmp21[6]).intl;
    obj10 = { index: bound + 1, total: clarification.questions.length };
    tmp52 = closure_6(Text, obj9);
  }
  items5 = [tmp52, ];
  const obj11 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
  items5[1] = closure_6(projectId(onSubmit[15]).Text, obj11);
  items6 = [c7(first, obj8), ];
  let tmp54Result = null;
  if (null != onDismiss) {
    const obj12 = { variant: "tertiary", size: "sm", icon: closure_6(projectId(onSubmit[17]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl3.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp20(tmp21[16]).IconButton;
    intl3 = tmp20(tmp21[6]).intl;
    tmp54Result = tmp54(IconButton, obj12);
  }
  items6[1] = tmp54Result;
  const items7 = [c7(first, obj7), , , , , , ];
  let tmp54Result6 = null;
  if (tmp19) {
    const obj13 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(clarification(onSubmit[7]).tE8qbz) };
    const Text2 = tmp20(tmp21[15]).Text;
    intl4 = tmp20(tmp21[6]).intl;
    tmp54Result6 = tmp54(Text2, obj13);
  }
  items7[1] = tmp54Result6;
  if (isImageQuestionResult) {
    const obj14 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback1, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp16) };
    const tmp49Result = clarification(onSubmit[18]);
    tmp54Result7 = tmp54(tmp49Result, obj14);
  } else if (tmp19) {
    const obj15 = {
      hasIcons: false,
      children: options.map((label) => {
          let joined;
          let closure_0 = label;
          str = "";
          const obj = {
            label: label.label,
            subLabel: joined,
            checked: _undefined5.includes(label.id),
            disabled,
            onPress() {
              return callback1(label);
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
          const found = items.filter(f113986);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp18.options;
    const TableRowGroup = tmp20(tmp21[19]).TableRowGroup;
    tmp54Result7 = tmp54(TableRowGroup, obj15);
  } else {
    const options1 = tmp18.options;
    tmp54Result7 = options1.map((answer) => {
      let AQbxhf;
      let formatToPlainString;
      let intl2;
      let items;
      let items1;
      let obj2;
      let tmp5;
      let closure_0 = answer;
      const obj = {
        onPress() {
          return callback1(answer);
        },
        disabled,
        accessibilityLabel: formatToPlainString(AQbxhf, obj2),
        children: items1
      };
      const Card = projectId(onSubmit[21]).Card;
      const intl = projectId(onSubmit[6]).intl;
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
      const tmp7 = first;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
        const Text = tmp2(tmp3[15]).Text;
        intl2 = tmp2(tmp3[6]).intl;
        tmp8Result = tmp8(Text, obj5);
      }
      items[1] = tmp8Result;
      items1 = [_undefined(tmp7, obj3), ];
      let tmp8Result2 = null;
      if (null != answer.detail) {
        tmp8Result2 = null;
        if ("" !== answer.detail) {
          const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = tmp8(tmp2(tmp3[15]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined(Card, obj, answer.id);
    });
  }
  items7[2] = tmp54Result7;
  let tmp54Result8 = null;
  if (null != clarification.questions[bound].input) {
    const obj16 = { projectId, question: clarification.questions[bound], value: tmp61, disabled: tmp16, onChange: callback3, fallback: tmp62 };
    tmp61 = tmp10[tmp18.id];
    const tmp49Result3 = clarification(onSubmit[22]);
    if (tmp61 == null) {
      tmp61 = c10;
    }
    tmp62 = null;
    if (false === clarification.questions[bound].allow_custom) {
      tmp62 = tmp45;
    }
    tmp54Result8 = tmp54(tmp49Result3, obj16);
  }
  items7[3] = tmp54Result8;
  let tmp63 = null;
  if (true === clarification.questions[bound].link) {
    let arr11 = tmp10[tmp18.id];
    if (arr11 == null) {
      arr11 = c10;
    }
    tmp63 = null;
    if (arr11.length > 0) {
      let tmp54Result9;
      if (null == first1[clarification.questions[bound].id]) {
        const obj17 = { style: tmp.linkConfigure, children: closure_6(Button, obj18) };
        obj18 = {
          variant: "tertiary",
          size: "sm",
          text: intl5.string(clarification(onSubmit[7]).eCzCxC),
          disabled: tmp16,
          onPress() {
                  return closure_12((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[id.id] = "auto";
                    return obj;
                  });
                }
        };
        Button = tmp20(tmp21[23]).Button;
        intl5 = tmp20(tmp21[6]).intl;
        tmp54Result9 = tmp54(tmp51, obj17);
      } else {
        let str5 = first1[tmp18.id];
        const tmp49Result4 = clarification(onSubmit[24]);
        if (str5 == null) {
          str5 = "auto";
        }
        const obj19 = {
          value: str5,
          disabled: tmp16,
          onChange(arg0) {
                  let closure_0 = arg0;
                  return closure_12((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[id.id] = closure_0;
                    return obj;
                  });
                }
        };
        tmp54Result9 = tmp54(tmp49Result4, obj19);
      }
      tmp63 = tmp54Result9;
    }
  }
  items7[4] = tmp63;
  let tmp66 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp66 = tmp45;
  }
  items7[5] = tmp66;
  if (clarification.questions.length <= 1) {
    if (!tmp19) {
      if (!isImageQuestionResult) {
        let tmp48Result;
        if (null == clarification.questions[bound].input) {
          tmp48Result = null;
          projectId(onSubmit[12]);
        }
        items7[6] = tmp48Result;
        obj6.children = items7;
        return c7(tmp50, obj6);
      }
    }
  }
  let tmp54Result10 = null;
  const obj20 = { style: tmp.footer, children: items8 };
  if (bound > 0) {
    tmp54Result10 = null;
    if (!tmp16) {
      const obj21 = { variant: "tertiary", size: "sm", text: intl6.string(clarification(onSubmit[7]).Pk5lfA), onPress: callback2 };
      const Button2 = tmp20(tmp21[23]).Button;
      intl6 = tmp20(tmp21[6]).intl;
      tmp54Result10 = tmp54(Button2, obj21);
    }
  }
  items8 = [tmp54Result10, , ];
  const obj22 = { style: tmp.customField };
  items8[1] = closure_6(first, obj22);
  const Button3 = tmp20(tmp21[23]).Button;
  if (!tmp16) {
    tmp16 = null == tmp42;
  }
  const obj23 = {
    variant: "primary",
    size: "sm",
    disabled: tmp16,
    text: string(w1nRmT),
    onPress() {
      if (null != c25) {
        callback(tmp);
      }
    }
  };
  const intl7 = tmp20(tmp21[6]).intl;
  string = intl7.string;
  if (bound === clarification.questions.length - 1) {
    w1nRmT = tmp20(tmp21[6]).t.geKm7t;
  } else {
    w1nRmT = tmp49(tmp21[7]).w1nRmT;
  }
  items8[2] = closure_6(Button3, obj23);
  tmp48Result = tmp48(tmp51, obj20);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;
