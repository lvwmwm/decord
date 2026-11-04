// Module ID: 15186
// Function ID: 15187
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6168, 12, 6169, 5889, 8585, 2]

// Module 15186 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5889 */;
import MarkupRulesDefault from "MarkupRules" /* 6169 */;
import combineMarkupRules from "combineMarkupRules" /* 6168 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8585 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
