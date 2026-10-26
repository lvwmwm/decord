// Module ID: 12472
// Function ID: 12473
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 4971, 587, 1128, 3830, 558, 576, 12473, 12474, 12475, 7008, 5234, 7959, 6931, 12477, 6987, 6900, 6905, 12481, 5244, 12484, 11819, 2]

// Module 12472 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ConjureClarification from "ConjureClarification" /* 12475 */;
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
const f114660 = (item) => "" !== item;
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
  let tmp10;
  let tmp12;
  let tmp19;
  let tmp27;
  let tmp = projectId;
  let tmp2 = onSubmit;
  let obj = projectId(onSubmit[9]);
  const cResult = obj.c(107);
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
    class X {
      constructor() {
        questions = clarification.questions;
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
    cResult[4] = X;
  } else {
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
  closure_10 = tmp6(obj3.useState(tmp16), 2)[1];
  onInputFocusChange(obj3.useState(tmp16), 2);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
      class X {
        constructor() {
          questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
    class X {
      constructor() {
        questions = clarification.questions;
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
  function fe(arg0) {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first1);
      obj[id.id] = arg0;
      closure_6(obj);
      const obj3 = ConjureClarification;
      const result = obj3.followingClarificationStep(clarification, obj, bound);
      const tmp18 = require;
      if (null == result) {
        const tmp18Result = tmp18(12475);
        const result1 = tmp18Result.submitClarificationAnswers(projectId, tmp20, obj, first2, tmp);
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
  cResult[16] = fe;
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
  let obj17;
  let obj23;
  let obj4;
  let obj9;
  let onBack;
  let onDismiss;
  let optionHeader;
  let options;
  let stringResult;
  let submitText;
  let tmp10;
  let tmp12;
  let tmp20Result11;
  let tmp4;
  let tmp50Result;
  let tmp56Result9;
  let tmp6;
  let tmp63;
  let tmp64;
  let tmp8;
  const f114675 = () => {
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
  let c22;
  let c23;
  let tmp = c8();
  react = tmp;
  let obj = react;
  [first, tmp4] = react.useState({});
  let closure_6 = tmp4;
  let tmp5 = _slicedToArray(react.useState({}), 2);
  [tmp6, c7] = tmp5;
  let tmp7 = _slicedToArray(react.useState({}), 2);
  [tmp8, c8] = tmp7;
  [tmp10, c9] = _slicedToArray(react.useState(f114675), 2);
  const tmp9 = _slicedToArray(react.useState(f114675), 2);
  [tmp12, c10] = _slicedToArray(react.useState({}), 2);
  const tmp11 = _slicedToArray(react.useState({}), 2);
  [first1, closure_12] = react.useState({});
  const tmp15 = _slicedToArray(react.useState(0), 2);
  let closure_13 = tmp15[1];
  let tmp16 = null == onSubmit;
  const disabled = tmp16;
  const bound = Math.min(tmp15[0], length - 1);
  let tmp18 = clarification.questions[bound];
  let id = tmp18;
  let closure_17 = tmp19;
  const tmp20 = projectId;
  let obj2 = projectId(onSubmit[10]);
  const isImageQuestionResult = obj2.isImageQuestion(tmp18);
  let c18 = isImageQuestionResult;
  if (true === tmp18.multi_select) {
    let tmp24 = tmp8[tmp18.id];
    if (tmp24 == null) {
      tmp24 = c9;
    }
    answeredOptionIdsResult = tmp24;
  } else {
    const tmp20Result = tmp20(onSubmit[10]);
    answeredOptionIdsResult = tmp20Result.answeredOptionIds(first[tmp18.id]);
  }
  c19 = answeredOptionIdsResult;
  const tmp20Result7 = tmp20(onSubmit[11]);
  const conjureOwnImages = tmp20Result7.useConjureOwnImages(projectId, first, tmp4);
  let items = [first, clarification, bound, first1, onSubmit, projectId, tmp18.id];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_6(obj);
      const obj3 = ConjureClarification;
      const result = obj3.followingClarificationStep(clarification, obj, bound);
      const tmp18 = require;
      if (null == result) {
        const tmp18Result = tmp18(12475);
        const result1 = tmp18Result.submitClarificationAnswers(projectId, tmp20, obj, first1, tmp);
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
  let str = tmp6[tmp18.id];
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
  if (true === tmp18.multi_select) {
    const tmp20Result8 = tmp20(onSubmit[12]);
    multiSelectAnswerResult = tmp20Result8.multiSelectAnswer(tmp18, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp18));
  }
  let entityAnswerResult = null;
  if (null != tmp18.input) {
    const input = tmp18.input;
    let tmp35 = tmp10[tmp18.id];
    const entityAnswer = tmp20(onSubmit[12]).entityAnswer;
    const tmp20Result9 = tmp20(onSubmit[12]);
    if (tmp35 == null) {
      tmp35 = c10;
    }
    entityAnswerResult = entityAnswer(input, tmp35, str, tmp12[tmp18.id]);
  }
  const items3 = [tmp18.id];
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
  const tmp20Result10 = tmp20(onSubmit[12]);
  let result = tmp20Result10.clarificationDraftAnswer(entityAnswerResult, multiSelectAnswerResult, str);
  c22 = result;
  const items4 = [result, callback];
  let tmp43 = result;
  const callback4 = obj.useCallback(() => {
    if (null != c22) {
      callback(tmp);
    }
  }, items4);
  if (result == null) {
    let tmp44 = null;
    if (null == entityAnswerResult) {
      tmp44 = null;
      if (null == multiSelectAnswerResult) {
        let tmp45 = first[tmp18.id];
        if (tmp45 == null) {
          tmp45 = null;
        }
        tmp44 = tmp45;
      }
    }
    tmp43 = tmp44;
  }
  c23 = tmp43;
  let tmp46;
  if (0 === bound) {
    if (!tmp16) {
      tmp46 = onBack;
    }
  }
  let tmp47 = null;
  if (!isImageQuestionResult) {
    let obj3 = {
      size: "md",
      placeholder: tmp20Result11.clarificationDraftPlaceholder(tmp18),
      accessibilityLabel: intl.formatToPlainString(clarification(tmp21[7])["4JeYPB"], obj4),
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
    const TextInput = tmp20(tmp21[13]).TextInput;
    tmp20Result11 = tmp20(onSubmit[12]);
    intl = tmp20(tmp21[6]).intl;
    obj4 = { question: tmp18.question };
    tmp47 = closure_6(TextInput, obj3);
  }
  let obj5 = { style: tmp.card, children: null };
  let obj6 = { style: tmp.footer, children: items6 };
  let tmp54 = null;
  const obj7 = { style: tmp.customField, children: items5 };
  const tmp52 = clarification(onSubmit[24]);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj9) };
    let Text = tmp20(tmp21[14]).Text;
    intl2 = tmp20(tmp21[6]).intl;
    obj9 = { index: bound + 1, total: clarification.questions.length };
    tmp54 = closure_6(Text, obj8);
  }
  items5 = [tmp54, ];
  const obj10 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp18.question };
  items5[1] = closure_6(tmp20(onSubmit[14]).Text, obj10);
  items6 = [c7(first, obj7), ];
  let tmp56Result = null;
  if (null != onDismiss) {
    const obj11 = { variant: "tertiary", size: "sm", icon: closure_6(tmp20(onSubmit[16]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl3.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp20(tmp21[15]).IconButton;
    intl3 = tmp20(tmp21[6]).intl;
    tmp56Result = tmp56(IconButton, obj11);
  }
  items6[1] = tmp56Result;
  const items7 = [c7(first, obj6), , , , , , , ];
  let tmp56Result8 = null;
  if (true === tmp18.multi_select) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(clarification(onSubmit[7]).tE8qbz) };
    const Text2 = tmp20(tmp21[14]).Text;
    intl4 = tmp20(tmp21[6]).intl;
    tmp56Result8 = tmp56(Text2, obj12);
  }
  items7[1] = tmp56Result8;
  if (isImageQuestionResult) {
    const obj13 = { projectId, question: tmp18, selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback1, own: conjureOwnImages.controlsFor(tmp18, tmp16) };
    const tmp51Result = clarification(onSubmit[17]);
    tmp56Result9 = tmp56(tmp51Result, obj13);
  } else if (true === tmp18.multi_select) {
    const obj14 = {
      hasIcons: false,
      children: options.map((label) => {
          let joined;
          let closure_0 = label;
          let str = "";
          const obj = {
            label: label.label,
            subLabel: joined,
            checked: _undefined5.includes(label.id),
            disabled,
            onPress() {
              return callback1(label);
            }
          };
          const TableCheckboxRow = projectId(onSubmit[19]).TableCheckboxRow;
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
          const found = items.filter(f114660);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp18.options;
    const TableRowGroup = tmp20(tmp21[18]).TableRowGroup;
    tmp56Result9 = tmp56(TableRowGroup, obj14);
  } else {
    const options1 = tmp18.options;
    tmp56Result9 = options1.map((answer) => {
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
      const Card = projectId(onSubmit[20]).Card;
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
      items[0] = closure_6(projectId(onSubmit[14]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = first;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
        const Text = tmp2(tmp3[14]).Text;
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
          tmp8Result2 = tmp8(tmp2(tmp3[14]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined(Card, obj, answer.id);
    });
  }
  items7[2] = tmp56Result9;
  let tmp56Result10 = null;
  if (null != tmp18.input) {
    const obj15 = { projectId, question: tmp18, value: tmp63, disabled: tmp16, onChange: callback3, fallback: tmp64 };
    tmp63 = tmp10[tmp18.id];
    const tmp51Result3 = clarification(onSubmit[21]);
    if (tmp63 == null) {
      tmp63 = c10;
    }
    tmp64 = null;
    if (false === tmp18.allow_custom) {
      tmp64 = tmp47;
    }
    tmp56Result10 = tmp56(tmp51Result3, obj15);
  }
  items7[3] = tmp56Result10;
  let tmp65 = null;
  if (true === tmp18.link) {
    let arr11 = tmp10[tmp18.id];
    if (arr11 == null) {
      arr11 = c10;
    }
    tmp65 = null;
    if (arr11.length > 0) {
      let tmp56Result11;
      if (null == first1[tmp18.id]) {
        const obj16 = { style: tmp.linkConfigure, children: closure_6(Button, obj17) };
        obj17 = {
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
        Button = tmp20(tmp21[22]).Button;
        intl5 = tmp20(tmp21[6]).intl;
        tmp56Result11 = tmp56(tmp53, obj16);
      } else {
        let str2 = first1[tmp18.id];
        const tmp51Result4 = clarification(onSubmit[23]);
        if (str2 == null) {
          str2 = "auto";
        }
        const obj18 = {
          value: str2,
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
        tmp56Result11 = tmp56(tmp51Result4, obj18);
      }
      tmp65 = tmp56Result11;
    }
  }
  items7[4] = tmp65;
  let tmp56Result12 = null;
  if (null != tmp18.note) {
    const obj19 = { variant: "text-xs/normal", color: "text-muted", children: tmp18.note };
    tmp56Result12 = tmp56(tmp20(tmp21[14]).Text, obj19);
  }
  items7[5] = tmp56Result12;
  let tmp69 = null;
  if (false !== tmp18.allow_custom) {
    tmp69 = tmp47;
  }
  items7[6] = tmp69;
  if (clarification.questions.length <= 1) {
    if (true !== tmp18.multi_select) {
      if (!isImageQuestionResult) {
        if (null == tmp18.input) {
          if (null == onBack) {
            tmp50Result = null;
            tmp20(onSubmit[12]);
          }
          items7[7] = tmp50Result;
          obj5.children = items7;
          return c7(tmp52, obj5);
        }
      }
    }
  }
  const obj20 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp56Result14 = null;
    const items8 = [tmp56Result14, ];
    let tmp56Result13 = null;
    if (!hideSubmit) {
      const Button3 = tmp20(tmp21[22]).Button;
      if (!tmp16) {
        tmp16 = null == tmp43;
      }
      const obj21 = {
        variant: "primary",
        size: "sm",
        disabled: tmp16,
        text: stringResult,
        onPress() {
              if (null != c23) {
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
        stringResult = intl7.string(tmp51(tmp21[7]).w1nRmT);
      }
      tmp56Result13 = tmp56(Button3, obj21);
    }
    items8[1] = tmp56Result13;
    obj20.children = items8;
    tmp50Result = tmp50(tmp53, obj20);
  }
  const obj22 = { style: tmp.backAction, children: closure_6(Button2, obj23) };
  Button2 = tmp20(tmp21[22]).Button;
  if (backText == null) {
    const intl6 = tmp20(tmp21[6]).intl;
    backText = intl6.string(tmp51(tmp21[7]).Pk5lfA);
  }
  obj23 = { variant: "tertiary", size: "sm", text: backText, onPress: tmp46 };
  if (tmp46 == null) {
    tmp46 = callback2;
  }
  tmp56Result14 = tmp56(tmp53, obj22);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default tmp4;
