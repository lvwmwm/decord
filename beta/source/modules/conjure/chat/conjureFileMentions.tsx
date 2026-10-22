// Module ID: 12119
// Function ID: 12120
// Name: conjureFileMentions
// Dependencies: [19, 1951, 2]
// Exports: conjureFileMentionIds, createConjureFileMentionRule, filterConjureFileCandidates, hasConjureFileMentions, withoutInlineFileMentions

// Module 12119 (conjureFileMentions)
import _modDef1951 from "module_1951" /* 1951 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const f112002 = (arg0) => arg0[1];
let c2 = "<file:(\\d{16}-[a-z0-9]{6})>";
let regExp = new RegExp("<file:(\\d{16}-[a-z0-9]{6})>", "g");
const regExp1 = new RegExp("<file:(\\d{16}-[a-z0-9]{6})>");
const context = react.createContext(null);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureFileMentions.tsx");

export const CONJURE_FILE_MENTION = regExp;
export const ConjureFileMentionProjectContext = context;
export const hasConjureFileMentions = function hasConjureFileMentions(arg0) {
  return regExp1.test(arg0);
};
export const conjureFileMentionIds = function conjureFileMentionIds(str) {
  const items = [...new Set(Array.from(str.matchAll(regExp), f112002))];
  new Set(Array.from(str.matchAll(regExp), f112002));
  return items;
};
export const filterConjureFileCandidates = function filterConjureFileCandidates(arr, text) {
  let found;
  let formatted = text.toLowerCase();
  if ("" === formatted) {
    const items = [];
    HermesBuiltin.arraySpread(items, arr, 0);
    found = items;
  } else {
    found = arr.filter((name) => {
      const str = name.name;
      formatted = str.toLowerCase();
      let startsWithResult = formatted.startsWith(formatted);
      if (!startsWithResult) {
        const str2 = name.name;
        const str3 = str2.toLowerCase();
        const parts = str3.split(/[\s._\-()]+/);
        startsWithResult = parts.some((item) => item.startsWith(formatted));
      }
      return startsWithResult;
    });
  }
  return found;
};
export const withoutInlineFileMentions = function withoutInlineFileMentions(attachments, content) {
  if (null != attachments) {
    if (regExp1.test(content)) {
      let tmp = globalThis;
      const _Set = Set;
      const _Set2 = Set;
      const _Array = Array;
      const self = this;
      const self2 = this;
      const items = [];
      set = new Set(Array.from(content.matchAll(regExp), f112002));
      HermesBuiltin.arraySpread(items, set, 0);
      const self3 = this;
      const self4 = this;
      const set1 = new Set(items);
      return attachments.filter((id) => {
        const tmp = null == id.id || !set1.has(id.id);
        return tmp;
      });
    }
  }
  return attachments;
};
export const createConjureFileMentionRule = function createConjureFileMentionRule(arg0) {
  let closure_0 = arg0;
  regExp = new RegExp("^" + c2);
  const obj = {
    order: _modDef1951.defaultRules.autolink.order - 0.5,
    requiredFirstCharacters: ["<"],
    match(arg0) {
      return regExp.exec(arg0);
    },
    parse(attachmentId) {
      return { attachmentId: attachmentId[1] };
    },
    react(attachmentId, arg1, key) {
      return closure_0(attachmentId.attachmentId, key.key);
    }
  };
  return obj;
};
