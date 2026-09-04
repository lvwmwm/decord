// Module ID: 8590
// Function ID: 8591
// Name: parsePersonalWidgetReact
// Dependencies: [4958, 12, 4959, 4472, 7918, 2]

// Module 8590 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4472 */;
import parseLinkDefault from "parseLink" /* 4959 */;
import importDefaultResult from "combineMarkupRules" /* 4958 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 7918 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
