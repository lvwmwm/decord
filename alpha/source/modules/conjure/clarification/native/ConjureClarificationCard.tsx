// Module ID: 12468
// Function ID: 12469
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 4971, 587, 1128, 3830, 558, 576, 12469, 12470, 12471, 12472, 7008, 5234, 7959, 6931, 12473, 6987, 6900, 6905, 12477, 5244, 12480, 11816, 2]

// Module 12468 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 12471 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const f114621 = (item) => "" !== item;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 }, actions: obj5, backAction: { marginRight: "auto" }, linkConfigure: { alignSelf: "flex-end" } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let closure_9 = [];
let closure_10 = [];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationCard(projectId) {
  let backText;
  let first;
  let hideSubmit;
  let obj6;
  let onBack;
  let onDismiss;
  let onInputFocusChange;
  let onSubmit;
  let optionHeader;
  let submitText;
  let text;
  let text2;
  let tmp10;
  let tmp12;
  let tmp19;
  let tmp27;
  let tmp = projectId;
  let tmp2 = onSubmit;
  let obj = projectId(onSubmit[9]);
  const cResult = obj.c(121);
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange } = projectId);
  ({ submitText, onBack, backText, hideSubmit } = projectId);
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
  let closure_7 = tmp6(obj3.useState(tmp10), 2)[1];
  onInputFocusChange(obj3.useState(tmp10), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj5 = {};
    cResult[2] = obj5;
    tmp12 = obj5;
  } else {
    tmp12 = cResult[2];
  }
  [r10059, closure_8] = onInputFocusChange(obj3.useState(tmp12), 2);
  onInputFocusChange(obj3.useState(tmp12), 2);
  if (cResult[3] !== clarification.questions) {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    cResult[3] = clarification.questions;
    cResult[4] = D;
  } else {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  [r10071, closure_9] = onInputFocusChange(obj3.useState(tmp14), 2);
  onInputFocusChange(obj3.useState(tmp14), 2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    cResult[5] = tmp17;
  } else {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  [r10083, closure_10] = onInputFocusChange(obj3.useState(tmp16), 2);
  onInputFocusChange(obj3.useState(tmp16), 2);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    cResult[6] = tmp20;
    tmp19 = tmp20;
  } else {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  const tmp6Result9 = onInputFocusChange(obj3.useState(tmp19), 2);
  const first2 = tmp6Result9[0];
  let closure_12 = tmp6Result9[1];
  const tmp6Result10 = onInputFocusChange(obj3.useState(0), 2);
  let closure_13 = tmp6Result10[1];
  const disabled = null == onSubmit;
  const bound = Math.min(tmp6Result10[0], clarification.questions.length - 1);
  let id = tmp25;
  let closure_17 = tmp26;
  if (cResult[7] !== clarification.questions[bound]) {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    let isImageQuestionResult = obj6.isImageQuestion(tmp25);
    cResult[7] = clarification.questions[bound];
    cResult[8] = isImageQuestionResult;
    tmp27 = isImageQuestionResult;
  } else {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  isImageQuestionResult = tmp27;
  if (true === clarification.questions[bound].multi_select) {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    if (tmp30 == null) {
      class D {
        constructor() {
          const questions = clarification.questions;
          return Object.fromEntries(questions.flatMap((default_entities) => {
            let items2;
            if (null != default_entities.default_entities) {
              const items = [, ];
              ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
              const items1 = [items];
              items2 = items1;
            } else {
              items2 = [];
            }
            return items2;
          }));
        }
      }
    }
    let answeredOptionIdsResult = tmp30;
  } else {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
    answeredOptionIdsResult = obj7.answeredOptionIds(first1[tmp25.id]);
  }
  let tmpResult = tmp(tmp2[11]);
  const conjureOwnImages = tmpResult.useConjureOwnImages(projectId, first1, tmp9);
  if (cResult[9] === first1) {
    class D {
      constructor() {
        const questions = clarification.questions;
        return Object.fromEntries(questions.flatMap((default_entities) => {
          let items2;
          if (null != default_entities.default_entities) {
            const items = [, ];
            ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
            const items1 = [items];
            items2 = items1;
          } else {
            items2 = [];
          }
          return items2;
        }));
      }
    }
  }
  function xe(arg0) {
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
          tmp17Result2.sendAfterLinkingApps(obj, result1, obj, first2, () => {
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
  cResult[9] = first1;
  cResult[10] = clarification;
  cResult[11] = bound;
  cResult[12] = first2;
  cResult[13] = onSubmit;
  cResult[14] = projectId;
  cResult[15] = clarification.questions[bound].id;
  cResult[16] = xe;
}) : (function ConjureClarificationCard(projectId) {
  let Button;
  let Button2;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let _undefined5;
  let answeredOptionIdsResult;
  let backText;
  let c10;
  let c7;
  let c8;
  let c9;
  let closure_12;
  let first;
  let first1;
  let hideSubmit;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items5;
  let items6;
  let obj10;
  let obj18;
  let obj24;
  let obj5;
  let onBack;
  let onDismiss;
  let optionHeader;
  let options;
  let stringResult;
  let submitText;
  let tmp10;
  let tmp12;
  let tmp20Result9;
  let tmp4;
  let tmp42;
  let tmp49Result;
  let tmp55Result9;
  let tmp6;
  let tmp62;
  let tmp63;
  let tmp8;
  const f114636 = () => {
    const questions = clarification.questions;
    return Object.fromEntries(questions.flatMap((default_entities) => {
      let items2;
      if (null != default_entities.default_entities) {
        const items = [, ];
        ({ id: arr2[0], default_entities: arr2[1] } = default_entities);
        const items1 = [items];
        items2 = items1;
      } else {
        items2 = [];
      }
      return items2;
    }));
  };
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  const onSubmit = projectId.onSubmit;
  ({ onDismiss, onInputFocusChange: _slicedToArray, submitText, onBack, backText, hideSubmit } = projectId);
  if (hideSubmit === undefined) {
    hideSubmit = false;
  }
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
  [tmp10, c9] = _slicedToArray(react.useState(f114636), 2);
  const tmp9 = _slicedToArray(react.useState(f114636), 2);
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
  let items2 = [tmp16, bound];
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
  let tmp45;
  if (0 === bound) {
    if (!tmp16) {
      tmp45 = onBack;
    }
  }
  let tmp46 = null;
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
    tmp46 = closure_6(TextInput, obj4);
  }
  let obj6 = { style: tmp.card, children: null };
  let tmp53 = null;
  const obj7 = { style: tmp.footer, children: items6 };
  const obj8 = { style: tmp.customField, children: items5 };
  const tmp51 = clarification(onSubmit[25]);
  if (clarification.questions.length > 1) {
    const obj9 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj10) };
    let Text = tmp20(tmp21[15]).Text;
    intl2 = tmp20(tmp21[6]).intl;
    obj10 = { index: bound + 1, total: clarification.questions.length };
    tmp53 = closure_6(Text, obj9);
  }
  items5 = [tmp53, ];
  const obj11 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
  items5[1] = closure_6(projectId(onSubmit[15]).Text, obj11);
  items6 = [c7(first, obj8), ];
  let tmp55Result = null;
  if (null != onDismiss) {
    const obj12 = { variant: "tertiary", size: "sm", icon: closure_6(projectId(onSubmit[17]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl3.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp20(tmp21[16]).IconButton;
    intl3 = tmp20(tmp21[6]).intl;
    tmp55Result = tmp55(IconButton, obj12);
  }
  items6[1] = tmp55Result;
  const items7 = [c7(first, obj7), , , , , , , ];
  let tmp55Result8 = null;
  if (tmp19) {
    const obj13 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(clarification(onSubmit[7]).tE8qbz) };
    const Text2 = tmp20(tmp21[15]).Text;
    intl4 = tmp20(tmp21[6]).intl;
    tmp55Result8 = tmp55(Text2, obj13);
  }
  items7[1] = tmp55Result8;
  if (isImageQuestionResult) {
    const obj14 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback1, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp16) };
    const tmp50Result = clarification(onSubmit[18]);
    tmp55Result9 = tmp55(tmp50Result, obj14);
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
          const found = items.filter(f114621);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp18.options;
    const TableRowGroup = tmp20(tmp21[19]).TableRowGroup;
    tmp55Result9 = tmp55(TableRowGroup, obj15);
  } else {
    const options1 = tmp18.options;
    tmp55Result9 = options1.map((answer) => {
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
  items7[2] = tmp55Result9;
  let tmp55Result10 = null;
  if (null != clarification.questions[bound].input) {
    const obj16 = { projectId, question: clarification.questions[bound], value: tmp62, disabled: tmp16, onChange: callback3, fallback: tmp63 };
    tmp62 = tmp10[tmp18.id];
    const tmp50Result3 = clarification(onSubmit[22]);
    if (tmp62 == null) {
      tmp62 = c10;
    }
    tmp63 = null;
    if (false === clarification.questions[bound].allow_custom) {
      tmp63 = tmp46;
    }
    tmp55Result10 = tmp55(tmp50Result3, obj16);
  }
  items7[3] = tmp55Result10;
  let tmp64 = null;
  if (true === clarification.questions[bound].link) {
    let arr11 = tmp10[tmp18.id];
    if (arr11 == null) {
      arr11 = c10;
    }
    tmp64 = null;
    if (arr11.length > 0) {
      let tmp55Result11;
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
        tmp55Result11 = tmp55(tmp52, obj17);
      } else {
        let str5 = first1[tmp18.id];
        const tmp50Result4 = clarification(onSubmit[24]);
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
        tmp55Result11 = tmp55(tmp50Result4, obj19);
      }
      tmp64 = tmp55Result11;
    }
  }
  items7[4] = tmp64;
  let tmp55Result12 = null;
  if (null != clarification.questions[bound].note) {
    const obj20 = { variant: "text-xs/normal", color: "text-muted", children: clarification.questions[bound].note };
    tmp55Result12 = tmp55(tmp20(tmp21[15]).Text, obj20);
  }
  items7[5] = tmp55Result12;
  let tmp68 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp68 = tmp46;
  }
  items7[6] = tmp68;
  if (clarification.questions.length <= 1) {
    if (!tmp19) {
      if (!isImageQuestionResult) {
        if (null == clarification.questions[bound].input) {
          if (null == onBack) {
            tmp49Result = null;
            projectId(onSubmit[12]);
          }
          items7[7] = tmp49Result;
          obj6.children = items7;
          return c7(tmp51, obj6);
        }
      }
    }
  }
  const obj21 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp55Result14 = null;
    const items8 = [tmp55Result14, ];
    let tmp55Result13 = null;
    if (!hideSubmit) {
      const Button3 = tmp20(tmp21[23]).Button;
      if (!tmp16) {
        tmp16 = null == tmp42;
      }
      const obj22 = {
        variant: "primary",
        size: "sm",
        disabled: tmp16,
        text: stringResult,
        onPress() {
              if (null != c25) {
                callback(tmp);
              }
            }
      };
      if (bound === clarification.questions.length - 1) {
        if (submitText == null) {
          const intl8 = tmp20(tmp21[6]).intl;
          submitText = intl8.string(tmp20(tmp21[6]).t.geKm7t);
        }
        stringResult = submitText;
      } else {
        const intl7 = tmp20(tmp21[6]).intl;
        stringResult = intl7.string(tmp50(tmp21[7]).w1nRmT);
      }
      tmp55Result13 = tmp55(Button3, obj22);
    }
    items8[1] = tmp55Result13;
    obj21.children = items8;
    tmp49Result = tmp49(tmp52, obj21);
  }
  const obj23 = { style: tmp.backAction, children: closure_6(Button2, obj24) };
  Button2 = tmp20(tmp21[23]).Button;
  if (backText == null) {
    const intl6 = tmp20(tmp21[6]).intl;
    backText = intl6.string(tmp50(tmp21[7]).Pk5lfA);
  }
  obj24 = { variant: "tertiary", size: "sm", text: backText, onPress: tmp45 };
  if (tmp45 == null) {
    tmp45 = callback2;
  }
  tmp55Result14 = tmp55(tmp52, obj23);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;
