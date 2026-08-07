// Module ID: 12387
// Function ID: 12388
// Name: parsePersonalWidgetReact
// Dependencies: [4733, 12, 4734, 4293, 8034, 2]

// Module 12387 (parsePersonalWidgetReact)
import importDefaultResult from "combineMarkupRules";
import importDefaultResult1 from "apply";
import importAllResult from "reactParserFor";

const items = [require("apply").pick(require("parseLink").RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), require("MarkupText")()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("parseLink").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
