// Module ID: 12522
// Function ID: 12523
// Name: parsePersonalWidgetReact
// Dependencies: [4776, 12, 4777, 4333, 8139, 2]

// Module 12522 (parsePersonalWidgetReact)
import importDefaultResult from "combineMarkupRules";
import importDefaultResult1 from "apply";
import importAllResult from "reactParserFor";

const items = [require("apply").pick(require("parseLink").RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), require("MarkupText")()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
const result = require("parseLink").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
