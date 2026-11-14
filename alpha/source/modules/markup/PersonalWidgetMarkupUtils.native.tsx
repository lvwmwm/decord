// Module ID: 12087
// Function ID: 12088
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6343, 12, 6344, 6058, 9216, 2]

// Module 12087 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 6058 */;
import MarkupRulesDefault from "MarkupRules" /* 6344 */;
import combineMarkupRules from "combineMarkupRules" /* 6343 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 9216 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
