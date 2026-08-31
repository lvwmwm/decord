// Module ID: 8750
// Function ID: 8751
// Name: parsePersonalWidgetReact
// Dependencies: [4918, 12, 4919, 4439, 7864, 2]

// Module 8750 (parsePersonalWidgetReact)
import MarkupTextDefault from "MarkupText" /* 4439 */;
import parseLinkDefault from "parseLink" /* 4919 */;
import importDefaultResult from "combineMarkupRules" /* 4918 */;
import importDefaultResult1 from "apply" /* 12 */;
import importAllResult from "reactParserFor" /* 7864 */;

const items = [importDefaultResult1.pick(parseLinkDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupTextDefault()];
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
