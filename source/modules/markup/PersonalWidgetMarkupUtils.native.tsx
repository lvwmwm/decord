// Module ID: 8806
// Function ID: 8807
// Name: parsePersonalWidgetReact
// Dependencies: [4951, 12, 4952, 4469, 7908, 2]

// Module 8806 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4469 */;
import parseLinkDefault from "parseLink" /* 4952 */;
import importDefaultResult from "combineMarkupRules" /* 4951 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 7908 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
