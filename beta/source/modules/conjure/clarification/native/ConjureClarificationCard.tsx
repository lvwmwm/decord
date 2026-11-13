// Module ID: 12991
// Function ID: 12992
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 5170, 575, 1113, 4026, 12992, 12993, 12822, 7181, 12336, 5783, 8131, 7153, 12994, 7159, 7070, 7073, 12987, 5790, 12998, 2]
// Exports: default

// Module 12991 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConjureClarification from "ConjureClarification" /* 12822 */;
import ConjureImageOptions from "ConjureImageOptions" /* 12992 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  let items7;
  let items8;
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
  let tmp20Result17;
  let tmp4;
  let tmp55;
  let tmp58Result;
  let tmp6;
  let tmp64Result10;
  let tmp71;
  let tmp72;
  let tmp8;
  const f104783 = () => {
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
  let callback2;
  let c23;
  let c24;
  let result1;
  let tmp = c8();
  react = tmp;
  let obj = react;
  [first, tmp4] = react.useState({});
  let closure_6 = tmp4;
  let tmp5 = _slicedToArray(react.useState({}), 2);
  [tmp6, c7] = tmp5;
  let tmp7 = _slicedToArray(react.useState({}), 2);
  [tmp8, c8] = tmp7;
  [tmp10, c9] = _slicedToArray(react.useState(f104783), 2);
  const tmp9 = _slicedToArray(react.useState(f104783), 2);
  [tmp12, c10] = _slicedToArray(react.useState({}), 2);
  const tmp11 = _slicedToArray(react.useState({}), 2);
  [first1, closure_12] = react.useState({});
  const tmp15 = _slicedToArray(react.useState(0), 2);
  let closure_13 = tmp15[1];
  let tmp16 = null == onSubmit;
  const disabled = tmp16;
  const bound = Math.min(tmp15[0], length - 1);
  let id = tmp18;
  let closure_17 = tmp19;
  let obj2 = projectId(onSubmit[8]);
  const isImageQuestionResult = obj2.isImageQuestion(clarification.questions[bound]);
  let c18 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let intl = tmp20(tmp21[6]).intl;
    stringResult = intl.string(clarification(tmp21[7]).tE8qbz);
  } else {
    const tmp20Result = projectId(onSubmit[8]);
    stringResult = tmp20Result.uploadHint(tmp18);
  }
  if (true === clarification.questions[bound].multi_select) {
    let tmp26 = tmp8[tmp18.id];
    if (tmp26 == null) {
      tmp26 = c9;
    }
    answeredOptionIdsResult = tmp26;
  } else {
    const tmp20Result10 = projectId(onSubmit[8]);
    answeredOptionIdsResult = tmp20Result10.answeredOptionIds(first[tmp18.id]);
  }
  c19 = answeredOptionIdsResult;
  const tmp20Result11 = projectId(onSubmit[9]);
  const conjureOwnImages = tmp20Result11.useConjureOwnImages(projectId, first, tmp4);
  let items = [clarification, bound, first1, onSubmit, projectId];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = ConjureClarification;
      const result = obj.followingClarificationStep(clarification, arg0, bound);
      const tmp3 = require;
      if (null == result) {
        const tmp3Result = tmp3(12822);
        result1 = tmp3Result.submitClarificationAnswers(projectId, tmp5, arg0, first1, tmp);
      } else {
        closure_13(result);
      }
    }
  }, items);
  let items1 = [callback, first, onSubmit, clarification.questions[bound].id];
  callback1 = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_6(obj);
      callback(obj);
    }
  }, items1);
  let items2 = [true === clarification.questions[bound].multi_select, isImageQuestionResult, clarification.questions[bound], callback1];
  callback2 = obj.useCallback((arg0) => {
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
        callback1(obj);
      }
    }
  }, items2);
  const items3 = [clarification.questions[bound].id, callback1];
  const items4 = [tmp16, bound];
  const callback3 = obj.useCallback(() => {
    _undefined((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = "";
      return obj;
    });
    let obj = ConjureImageOptions;
    callback1(obj.noImageAnswer());
  }, items3);
  let str = tmp6[tmp18.id];
  const callback4 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_13(bound - 1);
    }
  }, items4);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp20Result12 = projectId(onSubmit[10]);
    multiSelectAnswerResult = tmp20Result12.multiSelectAnswer(tmp18, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp18));
  }
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const input = tmp18.input;
    let tmp39 = tmp10[tmp18.id];
    const entityAnswer = projectId(onSubmit[10]).entityAnswer;
    const tmp20Result13 = projectId(onSubmit[10]);
    if (tmp39 == null) {
      tmp39 = c10;
    }
    entityAnswerResult = entityAnswer(input, tmp39, str, tmp12[tmp18.id]);
  }
  const items5 = [clarification.questions[bound].id];
  const callback5 = obj.useCallback((arg0, arg1) => {
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
  }, items5);
  let uploadNoteAnswerResult = multiSelectAnswerResult;
  const clarificationDraftAnswer = projectId(onSubmit[10]).clarificationDraftAnswer;
  projectId(onSubmit[10]);
  if (multiSelectAnswerResult == null) {
    const tmp20Result15 = projectId(onSubmit[10]);
    uploadNoteAnswerResult = tmp20Result15.uploadNoteAnswer(tmp18, first[tmp18.id], str);
  }
  let result = clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str);
  c23 = result;
  const items6 = [result, callback1];
  let tmp49 = result;
  const callback6 = obj.useCallback(() => {
    if (null != c23) {
      callback1(tmp);
    }
  }, items6);
  if (result == null) {
    let tmp50 = null;
    if (null == entityAnswerResult) {
      tmp50 = null;
      if (null == multiSelectAnswerResult) {
        let tmp51 = first[tmp18.id];
        if (tmp51 == null) {
          tmp51 = null;
        }
        tmp50 = tmp51;
      }
    }
    tmp49 = tmp50;
  }
  c24 = tmp49;
  result1 = null;
  if (null == tmp49) {
    const tmp20Result16 = projectId(onSubmit[10]);
    result1 = tmp20Result16.skippedClarificationAnswers(clarification, first, bound);
  }
  let tmp54;
  if (0 === bound) {
    if (!tmp16) {
      tmp54 = onBack;
    }
  }
  if (!isImageQuestionResult) {
    let obj3 = {
      size: "md",
      placeholder: tmp20Result17.clarificationDraftPlaceholder(clarification.questions[bound]),
      accessibilityLabel: intl2.formatToPlainString(clarification(onSubmit[7])["4JeYPB"], obj4),
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
      onSubmitEditing: callback6,
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
    tmp20Result17 = projectId(onSubmit[10]);
    intl2 = tmp20(tmp21[6]).intl;
    obj4 = { question: clarification.questions[bound].question };
    tmp55 = closure_6(TextInput, obj3);
  } else {
    tmp55 = null;
  }
  let obj5 = { style: tmp.card, holdsKeyboard: true, children: null };
  let obj6 = { style: tmp.footer, children: items8 };
  let tmp62 = null;
  const obj7 = { style: tmp.customField, children: items7 };
  const tmp60 = clarification(onSubmit[12]);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "body-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj9) };
    let Text = tmp20(tmp21[13]).Text;
    intl3 = tmp20(tmp21[6]).intl;
    obj9 = { index: bound + 1, total: clarification.questions.length };
    tmp62 = closure_6(Text, obj8);
  }
  items7 = [tmp62, ];
  const obj10 = { variant: "body-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
  items7[1] = closure_6(projectId(onSubmit[13]).Text, obj10);
  items8 = [c7(first, obj7), ];
  let tmp64Result = null;
  if (null != onDismiss) {
    const obj11 = { variant: "tertiary", size: "sm", icon: closure_6(projectId(onSubmit[15]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp20(tmp21[14]).IconButton;
    intl4 = tmp20(tmp21[6]).intl;
    tmp64Result = tmp64(IconButton, obj11);
  }
  items8[1] = tmp64Result;
  const items9 = [c7(first, obj6), , , , , , , , ];
  let tmp64Result9 = null;
  if (null != stringResult) {
    const obj12 = { variant: "body-xs/normal", color: "text-muted", children: stringResult };
    tmp64Result9 = tmp64(tmp20(tmp21[13]).Text, obj12);
  }
  items9[1] = tmp64Result9;
  if (isImageQuestionResult) {
    const obj13 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp16, onPick: callback2, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp16) };
    const tmp59Result = clarification(onSubmit[16]);
    tmp64Result10 = tmp64(tmp59Result, obj13);
  } else if (true === clarification.questions[bound].multi_select) {
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
              return callback2(label);
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
    tmp64Result10 = tmp64(TableRowGroup, obj14);
  } else {
    const options1 = tmp18.options;
    tmp64Result10 = options1.map((answer) => {
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
          return callback2(answer);
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
      const obj4 = { variant: "body-sm/semibold", color: "text-default", children: answer.label };
      items[0] = closure_6(projectId(onSubmit[13]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = first;
      if (true === answer.recommended) {
        const obj5 = { variant: "body-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
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
          const obj6 = { variant: "body-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = tmp8(tmp2(tmp3[13]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined(Card, obj, answer.id);
    });
  }
  items9[2] = tmp64Result10;
  let tmp64Result11 = null;
  if (null != clarification.questions[bound].input) {
    const obj15 = { projectId, question: clarification.questions[bound], value: tmp71, disabled: tmp16, onChange: callback5, fallback: tmp72 };
    tmp71 = tmp10[tmp18.id];
    const tmp59Result4 = clarification(onSubmit[20]);
    if (tmp71 == null) {
      tmp71 = c10;
    }
    tmp72 = null;
    if (false === clarification.questions[bound].allow_custom) {
      tmp72 = tmp55;
    }
    tmp64Result11 = tmp64(tmp59Result4, obj15);
  }
  items9[3] = tmp64Result11;
  let tmp73 = null;
  if (true === clarification.questions[bound].link) {
    let arr13 = tmp10[tmp18.id];
    if (arr13 == null) {
      arr13 = c10;
    }
    tmp73 = null;
    if (arr13.length > 0) {
      let tmp64Result12;
      if (null == first1[clarification.questions[bound].id]) {
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
        tmp64Result12 = tmp64(tmp61, obj16);
      } else {
        let str2 = first1[tmp18.id];
        const tmp59Result5 = clarification(onSubmit[22]);
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
        tmp64Result12 = tmp64(tmp59Result5, obj18);
      }
      tmp73 = tmp64Result12;
    }
  }
  items9[4] = tmp73;
  let tmp64Result13 = null;
  if (null != clarification.questions[bound].note) {
    const obj19 = { variant: "body-xs/normal", color: "text-muted", children: clarification.questions[bound].note };
    tmp64Result13 = tmp64(tmp20(tmp21[13]).Text, obj19);
  }
  items9[5] = tmp64Result13;
  let tmp77 = null;
  if (false !== clarification.questions[bound].allow_custom) {
    tmp77 = tmp55;
  }
  items9[6] = tmp77;
  let tmp64Result14 = null;
  if (true === clarification.questions[bound].upload) {
    const obj20 = { style: tmp.noImage, children: closure_6(Button2, obj21) };
    obj21 = { variant: "tertiary", size: "sm", text: intl6.string(clarification(onSubmit[7]).zxSq2q), disabled: tmp16, onPress: callback3 };
    Button2 = tmp20(tmp21[21]).Button;
    intl6 = tmp20(tmp21[6]).intl;
    tmp64Result14 = tmp64(tmp61, obj20);
  }
  items9[7] = tmp64Result14;
  if (clarification.questions.length <= 1) {
    if (true !== clarification.questions[bound].multi_select) {
      if (!isImageQuestionResult) {
        if (null == clarification.questions[bound].input) {
          if (null == onBack) {
            if (true !== clarification.questions[bound].optional) {
              tmp58Result = null;
              projectId(onSubmit[10]);
            }
            items9[8] = tmp58Result;
            obj5.children = items9;
            return c7(tmp60, obj5);
          }
        }
      }
    }
  }
  const obj22 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp64Result16 = null;
    const items10 = [tmp64Result16, ];
    let tmp64Result15 = null;
    if (!hideSubmit) {
      const Button4 = tmp20(tmp21[21]).Button;
      if (!tmp16) {
        tmp16 = null == tmp49 && null == result1;
      }
      const obj23 = {
        variant: "primary",
        size: "sm",
        disabled: tmp16,
        text: stringResult1,
        onPress() {
              if (null != c24) {
                callback1(tmp);
              } else if (null != result1) {
                closure_6(result1);
                callback(result1);
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
        const string = intl8.string;
        const tmp59Result6 = clarification(onSubmit[7]);
        stringResult1 = string(tmp53 ? tmp59Result6.ZcrbKz : tmp59Result6.w1nRmT);
      }
      tmp64Result15 = tmp64(Button4, obj23);
    }
    items10[1] = tmp64Result15;
    obj22.children = items10;
    tmp58Result = tmp58(tmp61, obj22);
  }
  const obj24 = { style: tmp.backAction, children: closure_6(Button3, obj25) };
  Button3 = tmp20(tmp21[21]).Button;
  if (backText == null) {
    const intl7 = tmp20(tmp21[6]).intl;
    backText = intl7.string(tmp59(tmp21[7]).Pk5lfA);
  }
  obj25 = { variant: "tertiary", size: "sm", text: backText, onPress: tmp54 };
  if (tmp54 == null) {
    tmp54 = callback4;
  }
  tmp64Result16 = tmp64(tmp61, obj24);
};
