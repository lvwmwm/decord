// Module ID: 15265
// Function ID: 15266
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6167, 12, 6168, 5882, 8521, 2]

// Module 15265 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5882 */;
import MarkupRulesDefault from "MarkupRules" /* 6168 */;
import combineMarkupRules from "combineMarkupRules" /* 6167 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8521 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
