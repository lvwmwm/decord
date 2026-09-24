// Module ID: 17055
// Function ID: 17056
// Name: VibegrationsClarificationCard
// Dependencies: [32, 19, 17, 21, 4790, 580, 558, 568, 17056, 4786, 1119, 3714, 5856, 5220, 6878, 2]

// Module 17055 (VibegrationsClarificationCard)
import nativeDefault from "native" /* 580 */;
import VibegrationsClarification from "VibegrationsClarification" /* 17056 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, optionHeader: null, footer: null, customField: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.optionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.customField = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsClarificationCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((clarification) => {
  const cResult = clarification(568).c(56);
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  let obj = clarification(568);
  dependencyMap = bound();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let tmp5 = first1(noop.useState(first), 2);
  first1 = tmp5[0];
  noop = tmp5[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {};
    cResult[1] = obj4;
    let tmp7 = obj4;
  } else {
    tmp7 = cResult[1];
  }
  const tmp2 = bound();
  closure_5 = first1(noop.useState(tmp7), 2)[1];
  const tmp4Result2 = first1(noop.useState(0), 2);
  closure_6 = tmp4Result2[1];
  closure_7 = tmp10;
  bound = Math.min(tmp4Result2[0], clarification.questions.length - 1);
  id = tmp12;
  if (cResult[2] === first1) {
    if (cResult[3] === clarification) {
      if (cResult[4] === bound) {
        if (cResult[5] === onSubmit) {
          if (cResult[6] === tmp12.id) {
            let tmp13 = cResult[7];
          }
          closure_10 = tmp13;
          if (cResult[8] !== tmp13) {
            class F {
              constructor(arg0) {
                obj = { kind: "option", optionId: clarification.id, text: clarification.label };
                return closure_10(obj);
              }
            }
            cResult[8] = tmp13;
            cResult[9] = F;
            const tmp14 = F;
          } else {
            class F {
              constructor(arg0) {
                obj = { kind: "option", optionId: clarification.id, text: clarification.label };
                return closure_10(obj);
              }
            }
          }
          closure_11 = tmp14;
          if (cResult[10] === clarification.questions) {
            class F {
              constructor(arg0) {
                obj = { kind: "option", optionId: clarification.id, text: clarification.label };
                return closure_10(obj);
              }
            }
          }
          let fn = function j() {
            if (!closure_7) {
              if (0 !== bound) {
                closure_0 = clarification.questions[tmp - 1];
                closure_4((arg0) => {
                  const merged = Object.assign(arg0);
                  delete tmp[tmp2];
                  return {};
                });
                closure_5((arg0) => {
                  const merged = Object.assign(arg0);
                  delete tmp[tmp2];
                  return {};
                });
                closure_6(tmp - 1);
              }
            }
          };
          cResult[10] = clarification.questions;
          cResult[11] = tmp10;
          cResult[12] = bound;
          cResult[13] = fn;
        }
      }
    }
  }
  class C {
    constructor(arg0) {
      if (null != onSubmit) {
        tmp6 = clarification;
        obj1 = {};
        tmp7 = closure_3;
        tmp8 = obj1;
        merged = Object.assign(closure_3);
        tmp10 = closure_9;
        obj1[closure_9.id] = clarification;
        tmp11 = closure_4;
        tmp12 = closure_4(obj1);
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj3 = closure_0(closure_2[8]);
        tmp16 = closure_8;
        tmp15 = clarification;
        result = obj3.nextClarificationStep(clarification, obj1, closure_8);
        if (null == result) {
          tmp13Result = tmp13(tmp14[8]);
          result1 = tmp13Result.formatClarificationAnswers(tmp15, obj1);
          str = "";
          if ("" !== result1) {
            tmpResult = tmp(result1);
          }
        } else {
          tmp2 = closure_6;
          tmp3 = closure_6(result);
        }
      }
      return;
    }
  }
  cResult[2] = first1;
  cResult[3] = clarification;
  cResult[4] = bound;
  cResult[5] = onSubmit;
  cResult[6] = clarification.questions[bound].id;
  cResult[7] = C;
  tmp13 = C;
}) : ((clarification) => {
  clarification = clarification.clarification;
  const onSubmit = clarification.onSubmit;
  let first;
  noop = undefined;
  let bound;
  const tmp = bound();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState({}), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const tmp4 = first(noop.useState({}), 2);
  closure_5 = tmp4[1];
  let tmp5 = first(noop.useState(0), 2);
  closure_6 = tmp5[1];
  closure_7 = tmp6;
  bound = Math.min(tmp5[0], length - 1);
  id = tmp8;
  let items = [first, clarification, bound, onSubmit, clarification.questions[bound].id];
  const callback = noop.useCallback((arg0) => {
    if (null != onSubmit) {
      const obj = {};
      const merged = Object.assign(first);
      obj[id.id] = arg0;
      closure_4(obj);
      const result = VibegrationsClarification.nextClarificationStep(clarification, obj, bound);
      if (null == result) {
        const result1 = tmp13(17056).formatClarificationAnswers(tmp15, obj);
        if ("" !== result1) {
          tmp(result1);
        }
        const tmp13Result = tmp13(17056);
      } else {
        closure_6(result);
      }
      tmp13 = require;
      tmp15 = clarification;
    }
  }, items);
  let items1 = [callback];
  closure_11 = noop.useCallback((id) => callback({ kind: "option", optionId: id.id, text: id.label }), items1);
  const items2 = [clarification, null == onSubmit, bound];
  let str = tmp4[0][tmp8.id];
  const callback1 = noop.useCallback(() => {
    if (!closure_7) {
      if (0 !== bound) {
        closure_0 = clarification.questions[tmp - 1];
        closure_4((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        closure_5((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        closure_6(tmp - 1);
      }
    }
  }, items2);
  if (str == null) {
    str = "";
  }
  const items3 = [str, callback];
  const obj2 = { style: tmp.card, children: null };
  let tmp14 = null;
  const callback2 = noop.useCallback(() => {
    const trimmed = str.trim();
    if ("" !== trimmed) {
      const obj = { kind: "custom", text: trimmed };
      callback(obj);
    }
  }, items3);
  if (clarification.questions.length > 1) {
    let obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    let intl = clarification(1119).intl;
    const obj4 = { index: bound + 1, total: length };
    obj3.children = intl.formatToPlainString(onSubmit(3714)["7bypa+"], obj4);
    tmp14 = closure_6(clarification(4786).Text, obj3);
  }
  const items4 = [tmp14, closure_6(clarification(4786).Text, { variant: "text-md/semibold", color: "text-default", children: clarification.questions[bound].question }), , ];
  options = tmp8.options;
  items4[2] = options.map((answer) => {
    closure_0 = answer;
    let fn;
    if (!closure_7) {
      fn = () => closure_11(closure_0);
    }
    const obj = { onPress: fn, accessibilityLabel: null, children: null };
    const intl = tmp2(tmp3[10]).intl;
    if (true === answer.recommended) {
      let k7lEgj = onSubmit(tmp3[11]).aL1BKQ;
      let tmp5 = onSubmit;
    } else {
      k7lEgj = onSubmit(tmp3[11]).k7lEgj;
      tmp5 = onSubmit;
    }
    obj.accessibilityLabel = intl.formatToPlainString(k7lEgj, { answer: answer.label });
    const obj3 = { style: optionHeader.optionHeader, children: null };
    const items = [closure_6(clarification(optionHeader[9]).Text, { variant: "text-sm/semibold", color: "text-default", children: answer.label }), ];
    let tmp8Result = null;
    if (true === answer.recommended) {
      const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl2 = tmp2(tmp3[10]).intl;
      obj5.children = intl2.string(tmp5(tmp3[11]).OXRWyV);
      tmp8Result = tmp8(tmp2(tmp3[9]).Text, obj5);
    }
    items[1] = tmp8Result;
    obj3.children = items;
    const items1 = [closure_7(closure_5, obj3), ];
    let tmp8Result2 = null;
    if (null != answer.detail) {
      tmp8Result2 = null;
      if ("" !== answer.detail) {
        const obj6 = { variant: "text-xs/normal", color: "text-muted", children: answer.detail };
        tmp8Result2 = tmp8(tmp2(tmp3[9]).Text, obj6);
      }
    }
    items1[1] = tmp8Result2;
    obj.children = items1;
    return closure_7(clarification(optionHeader[12]).Card, obj, answer.id);
  });
  let obj6 = { style: tmp.footer, children: null };
  let tmp19Result = null;
  if (bound > 0) {
    tmp19Result = null;
    if (!tmp6) {
      const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl2 = tmp20(1119).intl;
      obj7.text = intl2.string(onSubmit(3714).yKdgqw);
      obj7.onPress = callback1;
      tmp19Result = tmp19(tmp20(5220).Button, obj7);
    }
  }
  const items5 = [tmp19Result, ];
  const obj8 = { size: "md", containerStyle: tmp.customField, placeholder: null, accessibilityLabel: null, value: null, onChange: null, onSubmitEditing: null, returnKeyType: "send" };
  const intl3 = tmp20(1119).intl;
  obj8.placeholder = intl3.string(onSubmit(3714).qifsdL);
  const intl4 = tmp20(1119).intl;
  obj8.accessibilityLabel = intl4.formatToPlainString(onSubmit(3714).XHESTL, { question: clarification.questions[bound].question });
  obj8.value = str;
  obj8.onChange = function onChange(arg0) {
    closure_0 = arg0;
    return closure_5((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = closure_0;
      return obj;
    });
  };
  obj8.onSubmitEditing = callback2;
  items5[1] = closure_6(clarification(6878).TextInput, obj8);
  obj6.children = items5;
  items4[3] = closure_7(closure_5, obj6);
  obj2.children = items4;
  return closure_7(closure_5, obj2);
});
