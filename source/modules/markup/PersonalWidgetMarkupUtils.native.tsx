// Module ID: 12662
// Function ID: 12663
// Name: parsePersonalWidgetReact
// Dependencies: [4836, 12, 4837, 4371, 8247, 2]

// Module 12662 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4371 */;
import parseLinkDefault from "parseLink" /* 4837 */;
import importDefaultResult from "combineMarkupRules" /* 4836 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 8247 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
