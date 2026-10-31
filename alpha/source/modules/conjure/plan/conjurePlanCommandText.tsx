// Module ID: 12728
// Function ID: 12729
// Name: conjurePlanCommandText
// Dependencies: [19, 12729, 5065, 2]
// Exports: conjurePlanCommandPattern, conjurePlanSlashCommandNames, conjurePlanTextMentionsCommand, splitConjurePlanCommandText, useConjurePlanCommandPattern, useConjurePlanSlashCommandNames

// Module 12728 (conjurePlanCommandText)
import escapeRegExpDefault from "escapeRegExp" /* 5065 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const f102829 = (name) => name.name;
const f102830 = (arg0, arg1) => arg1.length - arg0.length;
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanCommandText.tsx");

export function conjurePlanSlashCommandNames(arr) {
  const found = arr.filter((item) => {
    const obj = commands(closure_1_2[1]);
    return "/" === obj.conjurePlanCommandPrefix(item);
  });
  return found.map(f102829);
}
export function useConjurePlanSlashCommandNames(commands) {
  const items = [commands];
  return react.useMemo(() => {
    const found = commands.filter((item) => {
      const obj = commands(closure_1_2[1]);
      return "/" === obj.conjurePlanCommandPrefix(item);
    });
    return found.map(f102829);
  }, items);
}
export function conjurePlanCommandPattern(arg0) {
  if (0 === arg0.length) {
    return null;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(items, arg0, 0);
    const sorted = items.sort(f102830);
    const mapped = sorted.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    return regExp;
  }
}
export function conjurePlanTextMentionsCommand(item, arr) {
  if (0 === arr.length) {
    return false;
  } else {
    const mapped = arr.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const regExp = new RegExp("(?<![\\p{L}\\p{N}/.:])/(?:" + mapped.join("|") + ")(?![\\p{L}\\p{N}_-])", "iu");
    return regExp.test(item);
  }
}
export function useConjurePlanCommandPattern(commandNames) {
  let items = [commandNames];
  return react.useMemo(function() {
    let regExp = null;
    if (0 !== commandNames.length) {
      const items = [];
      HermesBuiltin.arraySpread(items, commandNames, 0);
      const sorted = items.sort(f102830);
      const mapped = sorted.map(escapeRegExpDefault);
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    }
    return regExp;
  }, items);
}
export function splitConjurePlanCommandText(mapped, conjurePlanCommandPattern) {
  if (null == conjurePlanCommandPattern) {
    return null;
  } else {
    const items = [];
    let num2 = 0;
    const matchAllResult = mapped.matchAll(conjurePlanCommandPattern);
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
        let obj = { kind: "text", text: mapped.slice(num2, tmp7), start: num2 };
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
      if (num2 < mapped.length) {
        const push2 = items.push;
        const obj3 = { kind: "text", text: mapped.slice(num2), start: num2 };
        push2(obj3);
        tmp15 = items;
      }
    }
    return tmp15;
  }
}
