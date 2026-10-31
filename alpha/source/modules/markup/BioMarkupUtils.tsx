// Module ID: 11493
// Function ID: 11494
// Name: BioMarkupUtils
// Dependencies: [6033, 6034, 5755, 1451, 8444, 5754, 1943, 12, 2]
// Exports: getOrParseBioAST, parseBioReact, parseBioReactWithCachedAST

// Module 11493 (BioMarkupUtils)
import LRUCacheDefault from "LRUCache" /* 1451 */;
import _modDef1943 from "module_1943" /* 1943 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 5755 */;
import MarkupRulesDefault from "MarkupRules" /* 6034 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 6033 */;
import MarkupParser_mod from "MarkupParser" /* 8444 */;
import MarkupUtils from "MarkupUtils" /* 5754 */;
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

export function parseBioReact(bio, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, obj, arg3);
}
export function getOrParseBioAST(arg0, guildId) {
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
}
export function parseBioReactWithCachedAST(description, guildId) {
  if (0 === description.trim().length) {
    return null;
  } else {
    let str = guildId;
    if (guildId == null) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + description;
    let value = closure_3.get(combined);
    const obj = closure_3;
    if (null == value) {
      const obj2 = { guildId };
      const tmp5 = closure_6(description, true, obj2);
      const result = obj.set(combined, tmp5);
      value = tmp5;
    }
    const reactFor = _modDef1943.reactFor;
    _modDef1943;
    const obj3 = _modDef1943;
    return reactFor(obj3.ruleOutput(c2, "react"))(value);
  }
}
export const parseBioReactWithoutScrolling = reactParserForResult;
