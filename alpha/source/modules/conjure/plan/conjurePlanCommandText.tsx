// Module ID: 11928
// Function ID: 11929
// Name: conjurePlanCommandText
// Dependencies: [19, 11929, 558, 576, 4961, 2]
// Exports: conjurePlanCommandPattern, conjurePlanSlashCommandNames, splitConjurePlanCommandText

// Module 11928 (conjurePlanCommandText)
import react2 from "react" /* 576 */;
import escapeRegExpDefault from "escapeRegExp" /* 4961 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const f111163 = (item) => {
  const obj = closure_1_0(closure_1_2[1]);
  return "/" === obj.conjurePlanCommandPrefix(item);
};
const f111164 = (name) => name.name;
const f111165 = (arg0, arg1) => arg1.length - arg0.length;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanSlashCommandNames(arr) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arr) {
    const found = arr.filter(f111163);
    const mapped = found.map(f111164);
    cResult[0] = arr;
    cResult[1] = mapped;
    tmp2 = mapped;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useConjurePlanSlashCommandNames(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const found = closure_0.filter(f111163);
    return found.map(f111164);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
function conjurePlanSlashCommandNames(dependencyMap) {
  const found = dependencyMap.filter(f111163);
  return found.map(f111164);
}
function conjurePlanCommandPattern(size) {
  if (0 === size.length) {
    return null;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(items, size, 0);
    const sorted = items.sort(f111165);
    const mapped = sorted.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    return regExp;
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanCommandPattern(arg0) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    let regExp = null;
    if (0 !== arg0.length) {
      const items = [];
      HermesBuiltin.arraySpread(items, arg0, 0);
      const sorted = items.sort(f111165);
      const mapped = sorted.map(escapeRegExpDefault);
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    }
    cResult[0] = arg0;
    cResult[1] = regExp;
    tmp4 = regExp;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useConjurePlanCommandPattern(arg0) {
  const length = arg0;
  let items = [arg0];
  return react.useMemo(function() {
    let regExp = null;
    if (0 !== length.length) {
      const items = [];
      HermesBuiltin.arraySpread(items, length, 0);
      const sorted = items.sort(f111165);
      const mapped = sorted.map(escapeRegExpDefault);
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    }
    return regExp;
  }, items);
});
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanCommandText.tsx");

export { conjurePlanSlashCommandNames };
export const useConjurePlanSlashCommandNames = tmp2;
export { conjurePlanCommandPattern };
export const useConjurePlanCommandPattern = tmp3;
export const splitConjurePlanCommandText = function splitConjurePlanCommandText(text, conjurePlanCommandPattern) {
  if (null == conjurePlanCommandPattern) {
    return null;
  } else {
    const items = [];
    let num2 = 0;
    const matchAllResult = text.matchAll(conjurePlanCommandPattern);
    const iter = matchAllResult[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let num = nextResult.index;
      if (num == null) {
        num = 0;
      }
      let sum = num + tmp4[1].length;
      let tmp7 = sum;
      if (sum > num2) {
        let obj = { kind: "text", text: text.slice(num2, tmp7), start: num2 };
        let push = items.push;
        let arr = push(obj);
      }
      let obj2 = { kind: "command", name: tmp4[2], start: tmp7 };
      let arr3 = items.push(obj2);
      num2 = tmp7 + 1 + tmp4[2].length;
      continue;
    }
    let tmp15 = null;
    if (0 !== items.length) {
      tmp15 = items;
      if (num2 < text.length) {
        const push2 = items.push;
        const obj3 = { kind: "text", text: text.slice(num2), start: num2 };
        push2(obj3);
        tmp15 = items;
      }
    }
    return tmp15;
  }
};
