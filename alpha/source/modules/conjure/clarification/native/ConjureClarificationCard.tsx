// Module ID: 13732
// Function ID: 13733
// Name: ConjureClarificationCard
// Dependencies: [32, 19, 17, 21, 5306, 575, 1113, 4131, 13733, 13734, 13735, 13571, 7619, 13211, 5929, 7988, 7549, 13736, 7746, 7733, 7445, 13740, 13744, 5936, 2]
// Exports: default

// Module 13732 (ConjureClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConjureClarification from "ConjureClarification" /* 13571 */;
import ConjureImageOptions from "ConjureImageOptions" /* 13734 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
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
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 }, actions: obj5, backAction: { marginRight: "auto" }, noImage: { alignSelf: "flex-start" } };
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
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let answeredOptionIdsResult;
  let backText;
  let c7;
  let c8;
  let c9;
  let first;
  let first1;
  let hideSubmit;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items7;
  let items8;
  let obj19;
  let obj23;
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
  let tmp22Result19;
  let tmp4;
  let tmp55;
  let tmp57Result;
  let tmp6;
  let tmp62Result10;
  let tmp69;
  let tmp70;
  let tmp8;
  const f108168 = () => {
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
  closure_10 = undefined;
  let c18;
  let callback;
  let callback1;
  let callback2;
  let c22;
  let c23;
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
  [tmp10, c9] = _slicedToArray(react.useState(f108168), 2);
  const tmp9 = _slicedToArray(react.useState(f108168), 2);
  [first1, closure_10] = react.useState({});
  const tmp15 = clarification(onSubmit[8])(projectId, clarification, tmp10);
  const builds = tmp15.builds;
  const linkFor = tmp15.linkFor;
  const tmp16 = _slicedToArray(react.useState(0), 2);
  let closure_12 = tmp16[1];
  let tmp17 = null == onSubmit;
  const disabled = tmp17;
  const bound = Math.min(tmp16[0], length - 1);
  let id = tmp19;
  const linkForResult = linkFor(clarification.questions[bound].id);
  let closure_16 = tmp21;
  let obj2 = projectId(onSubmit[9]);
  const isImageQuestionResult = obj2.isImageQuestion(clarification.questions[bound]);
  let c17 = isImageQuestionResult;
  if (true === clarification.questions[bound].multi_select) {
    let intl = tmp22(tmp14[6]).intl;
    stringResult = intl.string(tmp13(tmp14[7]).tE8qbz);
  } else {
    const tmp22Result = projectId(onSubmit[9]);
    stringResult = tmp22Result.uploadHint(tmp19);
  }
  if (true === clarification.questions[bound].multi_select) {
    let tmp26 = tmp8[tmp19.id];
    if (tmp26 == null) {
      tmp26 = c9;
    }
    answeredOptionIdsResult = tmp26;
  } else {
    const tmp22Result12 = projectId(onSubmit[9]);
    answeredOptionIdsResult = tmp22Result12.answeredOptionIds(first[tmp19.id]);
  }
  c18 = answeredOptionIdsResult;
  const tmp22Result13 = projectId(onSubmit[10]);
  const conjureOwnImages = tmp22Result13.useConjureOwnImages(projectId, first, tmp4);
  let items = [clarification, bound, builds, onSubmit, projectId];
  callback = obj.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = ConjureClarification;
      const result = obj.followingClarificationStep(clarification, arg0, bound);
      const tmp3 = require;
      if (null == result) {
        const tmp3Result = tmp3(13571);
        result1 = tmp3Result.submitClarificationAnswers(projectId, tmp5, arg0, builds, tmp);
      } else {
        closure_12(result);
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
    const tmp = closure_16;
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
      let tmp4 = c17;
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
  const items4 = [tmp17, bound];
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
  let str = tmp6[tmp19.id];
  const callback4 = obj.useCallback(() => {
    const tmp = disabled || 0 === bound;
    if (!tmp) {
      closure_12(bound - 1);
    }
  }, items4);
  if (str == null) {
    str = "";
  }
  let multiSelectAnswerResult = null;
  if (true === clarification.questions[bound].multi_select) {
    const tmp22Result14 = projectId(onSubmit[11]);
    multiSelectAnswerResult = tmp22Result14.multiSelectAnswer(tmp19, answeredOptionIdsResult, str, conjureOwnImages.multiPartFor(tmp19));
  }
  let entityAnswerResult = null;
  if (null != clarification.questions[bound].input) {
    const input = tmp19.input;
    let tmp39 = tmp10[tmp19.id];
    const entityAnswer = projectId(onSubmit[11]).entityAnswer;
    const tmp22Result15 = projectId(onSubmit[11]);
    if (tmp39 == null) {
      tmp39 = closure_10;
    }
    entityAnswerResult = entityAnswer(input, tmp39, str, first1[tmp19.id]);
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
    closure_10((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user.id] = closure_1;
      return obj;
    });
  }, items5);
  let uploadNoteAnswerResult = multiSelectAnswerResult;
  const clarificationDraftAnswer = projectId(tmp14[11]).clarificationDraftAnswer;
  projectId(onSubmit[11]);
  if (multiSelectAnswerResult == null) {
    const tmp22Result17 = projectId(onSubmit[11]);
    uploadNoteAnswerResult = tmp22Result17.uploadNoteAnswer(tmp19, first[tmp19.id], str);
  }
  let result = clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str);
  c22 = result;
  const items6 = [result, callback1];
  let tmp49 = result;
  const callback6 = obj.useCallback(() => {
    if (null != c22) {
      callback1(tmp);
    }
  }, items6);
  if (result == null) {
    let tmp50 = null;
    if (null == entityAnswerResult) {
      tmp50 = null;
      if (null == multiSelectAnswerResult) {
        let tmp51 = first[tmp19.id];
        if (tmp51 == null) {
          tmp51 = null;
        }
        tmp50 = tmp51;
      }
    }
    tmp49 = tmp50;
  }
  c23 = tmp49;
  result1 = null;
  if (null == tmp49) {
    const tmp22Result18 = projectId(onSubmit[11]);
    result1 = tmp22Result18.skippedClarificationAnswers(clarification, first, bound);
  }
  let tmp54;
  if (0 === bound) {
    if (!tmp17) {
      tmp54 = onBack;
    }
  }
  if (!isImageQuestionResult) {
    let obj3 = {
      size: "md",
      placeholder: tmp22Result19.clarificationDraftPlaceholder(clarification.questions[bound]),
      accessibilityLabel: intl2.formatToPlainString(tmp13(tmp14[7])["4JeYPB"], obj4),
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
    const TextInput = tmp22(tmp14[12]).TextInput;
    tmp22Result19 = projectId(onSubmit[11]);
    intl2 = tmp22(tmp14[6]).intl;
    obj4 = { question: clarification.questions[bound].question };
    tmp55 = closure_6(TextInput, obj3);
  } else {
    tmp55 = null;
  }
  let obj5 = { style: tmp.card, holdsKeyboard: true, children: null };
  let obj6 = { style: tmp.footer, children: items8 };
  let tmp60 = null;
  const obj7 = { style: tmp.customField, children: items7 };
  const tmp13Result = clarification(onSubmit[13]);
  if (clarification.questions.length > 1) {
    const obj8 = { variant: "body-xs/semibold", color: "text-muted", children: intl3.formatToPlainString(clarification(onSubmit[7]).yzYUjq, obj9) };
    let Text = tmp22(tmp14[14]).Text;
    intl3 = tmp22(tmp14[6]).intl;
    obj9 = { index: bound + 1, total: clarification.questions.length };
    tmp60 = closure_6(Text, obj8);
  }
  items7 = [tmp60, ];
  const obj10 = { variant: "body-md/semibold", color: "text-default", accessibilityRole: "header", children: clarification.questions[bound].question };
  items7[1] = closure_6(projectId(onSubmit[14]).Text, obj10);
  items8 = [c7(first, obj7), ];
  let tmp62Result = null;
  if (null != onDismiss) {
    const obj11 = { variant: "tertiary", size: "sm", icon: closure_6(projectId(onSubmit[16]).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl4.string(clarification(onSubmit[7]).qVXlk0) };
    const IconButton = tmp22(tmp14[15]).IconButton;
    intl4 = tmp22(tmp14[6]).intl;
    tmp62Result = tmp62(IconButton, obj11);
  }
  items8[1] = tmp62Result;
  const items9 = [c7(first, obj6), , , , , , , , ];
  let tmp62Result9 = null;
  if (null != stringResult) {
    const obj12 = { variant: "body-xs/normal", color: "text-muted", children: stringResult };
    tmp62Result9 = tmp62(tmp22(tmp14[14]).Text, obj12);
  }
  items9[1] = tmp62Result9;
  if (isImageQuestionResult) {
    const obj13 = { projectId, question: clarification.questions[bound], selectedIds: answeredOptionIdsResult, disabled: tmp17, onPick: callback2, own: conjureOwnImages.controlsFor(clarification.questions[bound], tmp17) };
    const tmp13Result4 = clarification(onSubmit[17]);
    tmp62Result10 = tmp62(tmp13Result4, obj13);
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
            checked: _undefined4.includes(label.id),
            disabled,
            onPress() {
              return callback2(label);
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
          const found = items.filter((item) => "" !== item);
          joined = undefined;
          if (found.length > 0) {
            joined = found.join(" \u00B7 ");
          }
          return tmp(TableCheckboxRow, obj, label.id);
        })
    };
    options = tmp19.options;
    const TableRowGroup = tmp22(tmp14[18]).TableRowGroup;
    tmp62Result10 = tmp62(TableRowGroup, obj14);
  } else {
    const options1 = tmp19.options;
    tmp62Result10 = options1.map((answer) => {
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
      const obj4 = { variant: "body-sm/semibold", color: "text-default", children: answer.label };
      items[0] = closure_6(projectId(onSubmit[14]).Text, obj4);
      let tmp8Result = null;
      const tmp7 = first;
      if (true === answer.recommended) {
        const obj5 = { variant: "body-xs/semibold", color: "text-muted", children: intl2.string(tmp5(onSubmit[7]).zku6r1) };
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
          const obj6 = { variant: "body-xs/normal", color: "text-muted", children: answer.detail };
          tmp8Result2 = tmp8(tmp2(tmp3[14]).Text, obj6);
        }
      }
      items1[1] = tmp8Result2;
      return _undefined(Card, obj, answer.id);
    });
  }
  items9[2] = tmp62Result10;
  let tmp62Result11 = null;
  if (null != clarification.questions[bound].input) {
    const obj15 = { projectId, question: clarification.questions[bound], value: tmp69, disabled: tmp17, onChange: callback5, fallback: tmp70 };
    tmp69 = tmp10[tmp19.id];
    const tmp13Result5 = clarification(onSubmit[21]);
    if (tmp69 == null) {
      tmp69 = closure_10;
    }
    tmp70 = null;
    const tmp22Result20 = projectId(onSubmit[11]);
    if (!tmp22Result20.clarificationShowsOtherAnswer(clarification.questions[bound])) {
      tmp70 = tmp55;
    }
    tmp62Result11 = tmp62(tmp13Result5, obj15);
  }
  items9[3] = tmp62Result11;
  let tmp62Result12 = null;
  if (null != linkForResult) {
    const obj16 = { link: linkForResult, disabled: tmp17 };
    tmp62Result12 = tmp62(tmp13(tmp14[22]), obj16);
  }
  items9[4] = tmp62Result12;
  let tmp62Result13 = null;
  if (null != clarification.questions[bound].note) {
    const obj17 = { variant: "body-xs/normal", color: "text-muted", children: clarification.questions[bound].note };
    tmp62Result13 = tmp62(tmp22(tmp14[14]).Text, obj17);
  }
  items9[5] = tmp62Result13;
  let tmp73 = null;
  const tmp22Result21 = projectId(onSubmit[11]);
  if (tmp22Result21.clarificationShowsOtherAnswer(clarification.questions[bound])) {
    tmp73 = tmp55;
  }
  items9[6] = tmp73;
  let tmp62Result14 = null;
  if (true === clarification.questions[bound].upload) {
    const obj18 = { style: tmp.noImage, children: closure_6(Button, obj19) };
    obj19 = { variant: "tertiary", size: "sm", text: intl5.string(clarification(onSubmit[7]).zxSq2q), disabled: tmp17, onPress: callback3 };
    Button = tmp22(tmp14[23]).Button;
    intl5 = tmp22(tmp14[6]).intl;
    tmp62Result14 = tmp62(tmp59, obj18);
  }
  items9[7] = tmp62Result14;
  if (clarification.questions.length <= 1) {
    if (true !== clarification.questions[bound].multi_select) {
      if (!isImageQuestionResult) {
        if (null == clarification.questions[bound].input) {
          if (null == onBack) {
            if (true !== clarification.questions[bound].optional) {
              tmp57Result = null;
              projectId(onSubmit[11]);
            }
            items9[8] = tmp57Result;
            obj5.children = items9;
            return c7(tmp13Result, obj5);
          }
        }
      }
    }
  }
  const obj20 = { style: tmp.actions, children: null };
  if (bound <= 0) {
    let tmp62Result16 = null;
    const items10 = [tmp62Result16, ];
    let tmp62Result15 = null;
    if (!hideSubmit) {
      const Button3 = tmp22(tmp14[23]).Button;
      if (!tmp17) {
        tmp17 = null == tmp49 && null == result1;
      }
      const obj21 = {
        variant: "primary",
        size: "sm",
        disabled: tmp17,
        text: stringResult1,
        onPress() {
              if (null != c23) {
                callback1(tmp);
              } else if (null != result1) {
                closure_6(result1);
                callback(result1);
              }
            }
      };
      if (bound === clarification.questions.length - 1) {
        if (submitText == null) {
          const intl8 = tmp22(tmp14[6]).intl;
          submitText = intl8.string(tmp22(tmp14[6]).t.geKm7t);
        }
        stringResult1 = submitText;
      } else {
        const intl7 = tmp22(tmp14[6]).intl;
        const string = intl7.string;
        const tmp13Result6 = clarification(onSubmit[7]);
        stringResult1 = string(tmp53 ? tmp13Result6.ZcrbKz : tmp13Result6.w1nRmT);
      }
      tmp62Result15 = tmp62(Button3, obj21);
    }
    items10[1] = tmp62Result15;
    obj20.children = items10;
    tmp57Result = tmp57(tmp59, obj20);
  }
  const obj22 = { style: tmp.backAction, children: closure_6(Button2, obj23) };
  Button2 = tmp22(tmp14[23]).Button;
  if (backText == null) {
    const intl6 = tmp22(tmp14[6]).intl;
    backText = intl6.string(tmp13(tmp14[7]).Pk5lfA);
  }
  obj23 = { variant: "tertiary", size: "sm", text: backText, onPress: tmp54 };
  if (tmp54 == null) {
    tmp54 = callback4;
  }
  tmp62Result16 = tmp62(tmp59, obj22);
};
