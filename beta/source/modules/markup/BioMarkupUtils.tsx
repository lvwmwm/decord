// Module ID: 9565
// Function ID: 9566
// Name: BioMarkupUtils
// Dependencies: [5240, 5241, 4779, 1438, 8277, 4778, 1929, 12, 2]
// Exports: getOrParseBioAST, parseBioReact, parseBioReactWithCachedAST

// Module 9565 (BioMarkupUtils)
import privDefault from "priv" /* 1438 */;
import _modDef1929 from "module_1929" /* 1929 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 4779 */;
import MarkupRulesDefault from "MarkupRules" /* 5241 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 5240 */;
import MarkupParser_mod from "MarkupParser" /* 8277 */;
import MarkupUtils from "MarkupUtils" /* 4778 */;
import apply from "module_12" /* 12 */;

let combineMarkupRules = combineMarkupRules_mod;
const items = [MarkupRulesDefault.PROFILE_BIO_RULES, MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
const MarkupReactRules = fn(4779);
items[2] = MarkupReactRules.createFetchingGameMentionRule();
const importDefaultResultResult = combineMarkupRules(items);
let c2 = importDefaultResultResult;
let closure_3 = new privDefault({ max: 2000 });
let closure_4 = { allowGameMentions: true };
let MarkupParser = MarkupParser_mod;
let closure_5 = MarkupParser.reactParserFor(importDefaultResultResult);
let closure_6 = MarkupUtils.astParserFor(importDefaultResultResult);
let MarkupParser = MarkupParser_mod;
let combineMarkupRules = combineMarkupRules_mod;
const items1 = [
  apply.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
  {
    emoji: {
      react() {
        return null;
      }
    }
  }
];
let obj2 = {
  emoji: {
    react() {
      return null;
    }
  }
};
let tmp4 = new privDefault({ max: 2000 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = function parseBioReact(bio, arg1, arg2, arg3) {
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, {}, arg3);
};
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  value = closure_3.get(arg0);
  if (null == value) {
    const tmp3 = closure_6(arg0, true);
    const result = closure_3.set(arg0, tmp3);
    value = tmp3;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    value = closure_3.get(description);
    if (null == value) {
      const tmp4 = closure_6(description, true);
      const result = obj.set(description, tmp4);
      value = tmp4;
    }
    obj = closure_3;
    const obj2 = _modDef1929;
    return obj2.reactFor(_modDef1929.ruleOutput(importDefaultResultResult, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = MarkupParser.reactParserFor(combineMarkupRules(items1));
