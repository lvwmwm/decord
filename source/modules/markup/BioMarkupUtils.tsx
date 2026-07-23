// Module ID: 9012
// Function ID: 70925
// Name: getOrParseBioAST
// Dependencies: [4564, 4565, 4121, 1362, 7674, 4120, 3829, 22, 2]
// Exports: parseBioReactWithCachedAST

// Module 9012 (getOrParseBioAST)
import importDefaultResult1 from "priv";
import importDefaultResult from "_createForOfIteratorHelperLoose";
import importAllResult from "reactParserFor";
import importDefaultResult2 from "combineAndInjectMentionRule";
import importAllResult1 from "reactParserFor";
import importDefaultResult3 from "_createForOfIteratorHelperLoose";
import importDefaultResult4 from "apply";

function getOrParseBioAST(description) {
  let value = importDefaultResult1.get(description);
  if (null == value) {
    const tmp3 = callback(description, true);
    const result = importDefaultResult1.set(description, tmp3);
    value = tmp3;
  }
  return value;
}
const items = [require("parseLink").PROFILE_BIO_RULES, require("MarkupText")({ enableBuildOverrides: false, mustConfirmExternalLink: true })];
const importDefaultResultResult = require("_createForOfIteratorHelperLoose")(items);
let obj = { max: 2000 };
importDefaultResult1 = new importDefaultResult1(obj);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
let closure_4 = require("combineAndInjectMentionRule").astParserFor(importDefaultResultResult);
const items1 = [require("apply").omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), ];
obj = {
  react() {
    return null;
  }
};
items1[1] = { emoji: obj };
const reactParserForResult1 = importAllResult1.reactParserFor(importDefaultResult3(items1));
let result = require("MarkupText").fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = reactParserForResult;
export { getOrParseBioAST };
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    const tmp2 = getOrParseBioAST(description);
    const obj = importDefault(3829);
    return obj.reactFor(importDefault(3829).ruleOutput(closure_2, "react"))(tmp2);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult1;
