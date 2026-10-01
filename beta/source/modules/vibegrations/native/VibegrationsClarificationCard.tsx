// Module ID: 16381
// Function ID: 16382
// Name: VibegrationsClarificationCard
// Dependencies: [32, 19, 17, 21, 4836, 576, 16382, 4832, 1115, 3715, 5919, 5281, 6024, 2]
// Exports: default

// Module 16381 (VibegrationsClarificationCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import VibegrationsClarification from "VibegrationsClarification" /* 16382 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, optionHeader: obj3, footer: obj4, customField: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default function VibegrationsClarificationCard(clarification) {
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let obj4;
  let obj9;
  let optionHeader;
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  let first;
  react = undefined;
  let bound;
  let tmp = bound();
  dependencyMap = tmp;
  let obj = react;
  const tmp2 = first(react.useState({}), 2);
  first = tmp2[0];
  react = tmp2[1];
  const tmp4 = first(react.useState({}), 2);
  let closure_5 = tmp4[1];
  const first1 = tmp4[0];
  const tmp6 = first(react.useState(0), 2);
  let closure_6 = tmp6[1];
  let tmp7 = null == onSubmit;
  let closure_7 = tmp7;
  bound = Math.min(tmp6[0], length - 1);
  const id = tmp9;
  let items = [first, clarification, bound, onSubmit, tmp9.id];
  const callback = react.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const obj3 = VibegrationsClarification;
      const result = obj3.nextClarificationStep(clarification, obj, bound);
      const tmp13 = require;
      const tmp15 = clarification;
      if (null == result) {
        const tmp13Result = tmp13(16382);
        const result1 = tmp13Result.formatClarificationAnswers(tmp15, obj);
        if ("" !== result1) {
          tmp(result1);
        }
      } else {
        closure_6(result);
      }
    }
  }, items);
  let items1 = [callback];
  let closure_11 = react.useCallback((id) => {
    const obj = { kind: "option", optionId: id.id, text: id.label };
    return callback(obj);
  }, items1);
  const items2 = [clarification, tmp7, bound];
  let str = first1[tmp9.id];
  const callback1 = react.useCallback(() => {
    const tmp = closure_7;
    if (!tmp) {
      if (0 !== bound) {
        let closure_0 = clarification.questions[tmp2 - 1];
        closure_4((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          delete obj[closure_0.id];
          return obj;
        });
        closure_5((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          delete obj[closure_0.id];
          return obj;
        });
        closure_6(bound - 1);
      }
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  const items3 = [str, callback];
  let tmp13 = closure_7;
  let obj2 = { style: tmp.card, children: items4 };
  let tmp15 = null;
  const callback2 = obj.useCallback(() => {
    const trimmed = str.trim();
    if ("" !== trimmed) {
      const obj = { kind: "custom", text: trimmed };
      callback(obj);
    }
  }, items3);
  if (clarification.questions.length > 1) {
    let obj3 = { variant: "text-xs/semibold", color: "text-muted", children: intl.formatToPlainString(onSubmit(3715)["7bypa+"], obj4) };
    let Text = clarification(4832).Text;
    intl = clarification(1115).intl;
    obj4 = { index: bound + 1, total: clarification.questions.length };
    tmp15 = closure_6(Text, obj3);
  }
  items4 = [tmp15, , , ];
  let obj5 = { variant: "text-md/semibold", color: "text-default", children: tmp9.question };
  items4[1] = closure_6(clarification(4832).Text, obj5);
  const options = tmp9.options;
  items4[2] = options.map((answer) => {
    let formatToPlainString;
    let intl2;
    let items;
    let items1;
    let k7lEgj;
    let obj2;
    let tmp5;
    let closure_0 = answer;
    let fn;
    const Card = clarification(optionHeader[10]).Card;
    if (!closure_7) {
      fn = () => closure_11(answer);
    }
    const obj = { onPress: fn, accessibilityLabel: formatToPlainString(k7lEgj, obj2), children: items1 };
    const intl = tmp2(tmp3[8]).intl;
    formatToPlainString = intl.formatToPlainString;
    if (true === answer.recommended) {
      k7lEgj = onSubmit(tmp3[9]).aL1BKQ;
      tmp5 = onSubmit;
    } else {
      k7lEgj = onSubmit(tmp3[9]).k7lEgj;
      tmp5 = onSubmit;
    }
    const obj3 = { style: optionHeader.optionHeader, children: items };
    items = [, ];
    obj2 = { answer: answer.label };
    const obj4 = { variant: "text-sm/semibold", color: "text-default", children: answer.label };
    items[0] = closure_6(clarification(optionHeader[7]).Text, obj4);
    let tmp8Result = null;
    const tmp7 = closure_5;
    if (true === answer.recommended) {
      const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: intl2.string(tmp5(optionHeader[9]).OXRWyV) };
      const Text = tmp2(tmp3[7]).Text;
      intl2 = tmp2(tmp3[8]).intl;
      tmp8Result = tmp8(Text, obj5);
    }
    items[1] = tmp8Result;
    items1 = [closure_7(tmp7, obj3), ];
    let tmp8Result2 = null;
    if (null != answer.detail) {
      tmp8Result2 = null;
      if ("" !== answer.detail) {
        const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp8Result2 = tmp8(tmp2(tmp3[7]).Text, obj6);
      }
    }
    items1[1] = tmp8Result2;
    return closure_7(Card, obj, answer.id);
  });
  let obj6 = { style: tmp.footer, children: items5 };
  let tmp20Result = null;
  if (bound > 0) {
    tmp20Result = null;
    if (!tmp7) {
      const obj7 = { variant: "secondary", size: "sm", text: intl2.string(onSubmit(3715).yKdgqw), onPress: callback1 };
      const Button = tmp21(5281).Button;
      intl2 = tmp21(1115).intl;
      tmp20Result = tmp20(Button, obj7);
    }
  }
  items5 = [tmp20Result, ];
  const obj8 = {
    size: "md",
    containerStyle: tmp.customField,
    placeholder: intl3.string(onSubmit(3715).qifsdL),
    accessibilityLabel: intl4.formatToPlainString(onSubmit(3715).XHESTL, obj9),
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
    onSubmitEditing: callback2,
    returnKeyType: "send"
  };
  const TextInput = tmp21(6024).TextInput;
  intl3 = tmp21(1115).intl;
  intl4 = tmp21(1115).intl;
  obj9 = { question: clarification.questions[bound].question };
  items5[1] = closure_6(TextInput, obj8);
  items4[3] = tmp13(closure_5, obj6);
  return tmp13(closure_5, obj2);
};
