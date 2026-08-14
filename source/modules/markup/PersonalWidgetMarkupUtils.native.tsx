// Module ID: 12541
// Function ID: 12542
// Name: parsePersonalWidgetReact
// Dependencies: [4798, 12, 4799, 4333, 8160, 2]

// Module 12541 (parsePersonalWidgetReact)
import importDefaultResult from "combineMarkupRules";
import importDefaultResult1 from "apply";
import importAllResult from "reactParserFor";

const items = [require("apply").pick(require("parseLink").RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), require("MarkupText")()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("parseLink").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
