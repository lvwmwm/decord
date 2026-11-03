// Module ID: 12894
// Function ID: 12895
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 5141, 575, 1113, 3995, 12895, 12896, 12723, 7208, 12272, 5747, 8152, 7180, 12897, 7186, 7100, 7103, 12890, 5754, 12901, 2]
// Exports: default

// Module 12894 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConjureClarification from "ConjureClarification" /* 12723 */;
import ConjureImageOptions from "ConjureImageOptions" /* 12895 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 }, actions: obj5, backAction: { marginRight: "auto" }, linkConfigure: { alignSelf: "flex-end" }, noImage: { alignSelf: "flex-start" } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let closure_9 = [];
let closure_10 = [];
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationCard.tsx");

export default function ConjureClarificationCard(projectId) {
  let Button;
  let Button2;
  let Button3;
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
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items6;
  let items7;
  let obj17;
  let obj21;
  let obj25;
  let obj4;
  let obj9;
  let onBack;
  let onDismiss;
  let optionHeader;
  let options;
  let stringResult;
  let stringResult1;
  let submitText;
  let tmp10;
  let tmp12;
  let tmp20Result15;
  let tmp4;
  let tmp52;
  let tmp55Result;
  let tmp6;
  let tmp61Result10;
  let tmp68;
  let tmp69;
  let tmp8;
  const f103020 = () => {
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
  [tmp10, c9] = _slicedToArray(react.useState(f103020), 2);
  const tmp9 = _slicedToArray(react.useState(f103020), 2);
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
  let obj2 = projectId(onSubmit[8]);
  const isImageQuestionResult = obj2.isImageQuestion(tmp18);
  let c18 = isImageQuestionResult;
  if (true === tmp18.multi_select) {
    let intl = tmp20(tmp21[6]).intl;
    stringResult = intl.string(clarification(tmp21[7]).tE8qbz);
  } else {
    const tmp20Result = tmp20(onSubmit[8]);
    stringResult = tmp20Result.uploadHint(tmp18);
  }
  if (true === tmp18.multi_select) {
    let tmp26 = tmp8[tmp18.id];
    if (tmp26 == null) {
      tmp26 = c9;
    }
    answeredOptionIdsResult = tmp26;
  } else {
    const tmp20Result9 = tmp20(onSubmit[8]);
    answeredOptionIdsResult = tmp20Result9.answeredOptionIds(first[tmp18.id]);
  }
  c19 = answeredOptionIdsResult;
  const tmp20Result10 = tmp20(onSubmit[9]);
  const conjureOwnImages = tmp20Result10.useConjureOwnImages(projectId, first, tmp4);
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
        const tmp18Result = tmp18(12723);
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
  let items2 = [tmp18.id, callback];
  const items3 = [tmp16, bound];
  const callback2 = obj.useCallback(() => {
    _undefined((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = "";
      return obj;
    });
    let obj = ConjureImageOptions;
    callback(obj.noImageAnswer());
  }, items2);
  let str = tmp6[tmp18.id];
  const callback3 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_13(bound - 1);
    }
  }, items3);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === tmp18.multi_select) {
    const tmp20Result11 = tmp20(onSubmit[10]);
    multiSelectAnswerResult = tmp20Result11.multiSelectAnswer(tmp18, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp18));
  }
  let entityAnswerResult = null;
  if (null != tmp18.input) {
    const input = tmp18.input;
    let tmp38 = tmp10[tmp18.id];
    const entityAnswer = tmp20(onSubmit[10]).entityAnswer;
    const tmp20Result12 = tmp20(onSubmit[10]);
    if (tmp38 == null) {
      tmp38 = c10;
    }
    entityAnswerResult = entityAnswer(input, tmp38, str, tmp12[tmp18.id]);
  }
  const items4 = [tmp18.id];
  const callback4 = obj.useCallback((arg0, arg1) => {
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
  }, items4);
  let uploadNoteAnswerResult = multiSelectAnswerResult;
  const clarificationDraftAnswer = tmp20(tmp21[10]).clarificationDraftAnswer;
  tmp20(onSubmit[10]);
  if (multiSelectAnswerResult == null) {
    const tmp20Result14 = tmp20(onSubmit[10]);
    uploadNoteAnswerResult = tmp20Result14.uploadNoteAnswer(tmp18, first[tmp18.id], str);
  }
  let result = clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str);
  c22 = result;
  const items5 = [result, callback];
  let tmp48 = result;
  const callback5 = obj.useCallback(() => {
    if (null != c22) {
      callback(tmp);
    }
  }, items5);
  if (result == null) {
    let tmp49 = null;
    if (null == entityAnswerResult) {
      tmp49 = null;
      if (null == multiSelectAnswerResult) {
        let tmp50 = first[tmp18.id];
        if (tmp50 == null) {
          tmp50 = null;
        }
        tmp49 = tmp50;
      }
    }
    tmp48 = tmp49;
  }
  c23 = tmp48;
  let tmp51;
  if (0 === bound) {
    if (!tmp16) {
      tmp51 = onBack;
    }
  }
  if (!isImageQuestionResult) {
    let obj3 = {
      size: "md",
      placeholder: tmp20Result15.clarificationDraftPlaceholder(tmp18),
      accessibilityLabel: intl2.formatToPlainString(clarification(tmp21[7])["4JeYPB"], obj4),
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
      onSubmitEditing: callback5,
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
    const TextInput = tmp20(tmp21[11]).TextInput;
    tmp20Result15 = tmp20(onSubmit[10]);
    intl2 = tmp20(tmp21[6]).intl;
    obj4 = { question: tmp18.question };
    tmp52 = closure_6(TextInput, obj3);
  } else {
    tmp52 = null;
  }
  let obj5 = { style: tmp.card, holdsKeyboard: true, children: null };
  let obj6 = { style: tmp.footer, children: items7 };
  let tmp59 = null;
  const obj7 = { style: tmp.customField, children: items6 };
  const tmp57 = clarification(onSubmit[12]);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj9) };
    let Text = tmp20(tmp21[13]).Text;
    intl3 = tmp20(tmp21[6]).intl;
    obj9 = { index: bound + 1, total: clarification.questions.length };
    tmp59 = closure_6(Text, obj8);
  }
  items6 = [tmp59, ];
  const obj10 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: tmp18.question };
  items6[1] = closure_6(tmp20(onSubmit[13]).Text, obj10);
  items7 = [c7(first, obj7), ];
  let tmp61Result = null;
  if (null != onDismiss) {
    const obj11 = { variant: "tertiary", size: "sm", icon: closure_6(tmp20(onSubmit[15]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp20(tmp21[14]).IconButton;
    intl4 = tmp20(tmp21[6]).intl;
    tmp61Result = tmp61(IconButton, obj11);
  }
  items7[1] = tmp61Result;
  const items8 = [c7(first, obj6), , , , , , , , ];
  let tmp61Result9 = null;
  if (null != stringResult) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
    tmp61Result9 = tmp61(tmp20(tmp21[13]).Text, obj12);
  }
  items8[1] = tmp61Result9;
  if (isImageQuestionResult) {
    const obj13 = { projectId, question: tmp18, selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback1, own: conjureOwnImages.controlsFor(tmp18, tmp16) };
    const tmp56Result = clarification(onSubmit[16]);
    tmp61Result10 = tmp61(tmp56Result, obj13);
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
          const TableCheckboxRow = projectId(onSubmit[18]).TableCheckboxRow;
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
          const found = items.filter((item) => "" !== item);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp18.options;
    const TableRowGroup = tmp20(tmp21[17]).TableRowGroup;
    tmp61Result10 = tmp61(TableRowGroup, obj14);
  } else {
    const options1 = tmp18.options;
    tmp61Result10 = options1.map((answer) => {
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
      const Card = projectId(onSubmit[19]).Card;
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
      items[0] = closure_6(projectId(onSubmit[13]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = first;
      if (true === answer.recommended) {
        const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
        const Text = tmp2(tmp3[13]).Text;
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
          tmp8Result2 = tmp8(tmp2(tmp3[13]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined(Card, obj, answer.id);
    });
  }
  items8[2] = tmp61Result10;
  let tmp61Result11 = null;
  if (null != tmp18.input) {
    const obj15 = { projectId, question: tmp18, value: tmp68, disabled: tmp16, onChange: callback4, fallback: tmp69 };
    tmp68 = tmp10[tmp18.id];
    const tmp56Result3 = clarification(onSubmit[20]);
    if (tmp68 == null) {
      tmp68 = c10;
    }
    tmp69 = null;
    if (false === tmp18.allow_custom) {
      tmp69 = tmp52;
    }
    tmp61Result11 = tmp61(tmp56Result3, obj15);
  }
  items8[3] = tmp61Result11;
  let tmp70 = null;
  if (true === tmp18.link) {
    let arr12 = tmp10[tmp18.id];
    if (arr12 == null) {
      arr12 = c10;
    }
    tmp70 = null;
    if (arr12.length > 0) {
      let tmp61Result12;
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
        Button = tmp20(tmp21[21]).Button;
        intl5 = tmp20(tmp21[6]).intl;
        tmp61Result12 = tmp61(tmp58, obj16);
      } else {
        let str2 = first1[tmp18.id];
        const tmp56Result4 = clarification(onSubmit[22]);
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
        tmp61Result12 = tmp61(tmp56Result4, obj18);
      }
      tmp70 = tmp61Result12;
    }
  }
  items8[4] = tmp70;
  let tmp61Result13 = null;
  if (null != tmp18.note) {
    const obj19 = { variant: "text-xs/normal", color: "text-muted", children: tmp18.note };
    tmp61Result13 = tmp61(tmp20(tmp21[13]).Text, obj19);
  }
  items8[5] = tmp61Result13;
  let tmp74 = null;
  if (false !== tmp18.allow_custom) {
    tmp74 = tmp52;
  }
  items8[6] = tmp74;
  let tmp61Result14 = null;
  if (true === tmp18.upload) {
    const obj20 = { style: tmp.noImage, children: closure_6(Button2, obj21) };
    obj21 = { variant: "tertiary", size: "sm", text: intl6.string(clarification(onSubmit[7]).zxSq2q), disabled: tmp16, onPress: callback2 };
    Button2 = tmp20(tmp21[21]).Button;
    intl6 = tmp20(tmp21[6]).intl;
    tmp61Result14 = tmp61(tmp58, obj20);
  }
  items8[7] = tmp61Result14;
  if (clarification.questions.length <= 1) {
    if (true !== tmp18.multi_select) {
      if (!isImageQuestionResult) {
        if (null == tmp18.input) {
          if (null == onBack) {
            tmp55Result = null;
            tmp20(onSubmit[10]);
          }
          items8[8] = tmp55Result;
          obj5.children = items8;
          return c7(tmp57, obj5);
        }
      }
    }
  }
  const obj22 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp61Result16 = null;
    const items9 = [tmp61Result16, ];
    let tmp61Result15 = null;
    if (!hideSubmit) {
      const Button4 = tmp20(tmp21[21]).Button;
      if (!tmp16) {
        tmp16 = null == tmp48;
      }
      const obj23 = {
        variant: "primary",
        size: "sm",
        disabled: tmp16,
        text: stringResult1,
        onPress() {
              if (null != c23) {
                callback(tmp);
              }
            }
      };
      if (bound === clarification.questions.length - 1) {
        if (submitText == null) {
          const intl9 = tmp20(tmp21[6]).intl;
          submitText = intl9.string(tmp20(tmp21[6]).t.geKm7t);
        }
        stringResult1 = submitText;
      } else {
        const intl8 = tmp20(tmp21[6]).intl;
        stringResult1 = intl8.string(tmp56(tmp21[7]).w1nRmT);
      }
      tmp61Result15 = tmp61(Button4, obj23);
    }
    items9[1] = tmp61Result15;
    obj22.children = items9;
    tmp55Result = tmp55(tmp58, obj22);
  }
  const obj24 = { style: tmp.backAction, children: closure_6(Button3, obj25) };
  Button3 = tmp20(tmp21[21]).Button;
  if (backText == null) {
    const intl7 = tmp20(tmp21[6]).intl;
    backText = intl7.string(tmp56(tmp21[7]).Pk5lfA);
  }
  obj25 = { variant: "tertiary", size: "sm", text: backText, onPress: tmp51 };
  if (tmp51 == null) {
    tmp51 = callback3;
  }
  tmp61Result16 = tmp61(tmp58, obj24);
};
