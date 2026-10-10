// Module ID: 10614
// Function ID: 10615
// Name: BioMarkupUtils
// Dependencies: [5401, 5402, 5080, 1457, 8004, 5079, 1949, 12, 2]
// Exports: getOrParseBioAST, parseBioReact, parseBioReactWithCachedAST

// Module 10614 (BioMarkupUtils)
import LRUCacheDefault from "LRUCache" /* 1457 */;
import _modDef1949 from "module_1949" /* 1949 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 5080 */;
import MarkupRulesDefault from "MarkupRules" /* 5402 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 5401 */;
import MarkupParser_mod from "MarkupParser" /* 8004 */;
import MarkupUtils from "MarkupUtils" /* 5079 */;
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
export const getOrParseBioAST = function getOrParseBioAST(arg0, guildId) {
  let str = guildId;
  if (guildId == null) {
    str = "";
  }
  const combined = "" + str + ":" + arg0;
  let value = closure_3.get(combined);
  const obj = closure_3;
  if (null == value) {
    const obj2 = { guildId };
    const tmp4 = closure_6(arg0, true, obj2);
    const result = obj.set(combined, tmp4);
    value = tmp4;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(cResult, guildId) {
  if (0 === cResult.trim().length) {
    return null;
  } else {
    let str = guildId;
    if (guildId == null) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + cResult;
    let value = closure_3.get(combined);
    const obj = closure_3;
    if (null == value) {
      const obj2 = { guildId };
      const tmp5 = closure_6(cResult, true, obj2);
      const result = obj.set(combined, tmp5);
      value = tmp5;
    }
    const reactFor = _modDef1949.reactFor;
    _modDef1949;
    const obj3 = _modDef1949;
    return reactFor(obj3.ruleOutput(c2, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult;
