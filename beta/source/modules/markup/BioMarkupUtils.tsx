// Module ID: 8722
// Function ID: 8723
// Name: BioMarkupUtils
// Dependencies: [5303, 5304, 4824, 1439, 7429, 4823, 1930, 12, 2]
// Exports: getOrParseBioAST, parseBioReact, parseBioReactWithCachedAST

// Module 8722 (BioMarkupUtils)
import LRUCacheDefault from "LRUCache" /* 1439 */;
import _modDef1930 from "module_1930" /* 1930 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 4824 */;
import MarkupRulesDefault from "MarkupRules" /* 5304 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 5303 */;
import MarkupParser_mod from "MarkupParser" /* 7429 */;
import MarkupUtils from "MarkupUtils" /* 4823 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const MarkupReactRules = MarkupReactRulesDefault;

let combineMarkupRules = combineMarkupRules_mod;
const items = [MarkupRulesDefault.PROFILE_BIO_RULES, MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
items[2] = MarkupReactRules.createFetchingGameMentionRule();
const importDefaultResultResult = combineMarkupRules(items);
let c2 = importDefaultResultResult;
let tmp4 = new LRUCacheDefault({ max: 2000 });
let closure_3 = tmp4;
let closure_4 = { allowGameMentions: true };
let MarkupParser = MarkupParser_mod;
let closure_5 = MarkupParser.reactParserFor(importDefaultResultResult);
let closure_6 = MarkupUtils.astParserFor(importDefaultResultResult);
MarkupParser = MarkupParser_mod;
const reactParserFor = MarkupParser.reactParserFor;
combineMarkupRules = combineMarkupRules_mod;
const items1 = [module_12.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), ];
let obj = {
  emoji: {
    react() {
      return null;
    }
  }
};
items1[1] = obj;
const reactParserForResult = reactParserFor(combineMarkupRules(items1));
let result = size.fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = function parseBioReact(bio, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, obj, arg3);
};
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  let value = closure_3.get(arg0);
  const obj = closure_3;
  if (null == value) {
    const tmp3 = closure_6(arg0, true);
    const result = obj.set(arg0, tmp3);
    value = tmp3;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    let value = closure_3.get(description);
    const obj = closure_3;
    if (null == value) {
      const tmp4 = closure_6(description, true);
      const result = obj.set(description, tmp4);
      value = tmp4;
    }
    const reactFor = _modDef1930.reactFor;
    _modDef1930;
    const obj2 = _modDef1930;
    return reactFor(obj2.ruleOutput(c2, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult;
