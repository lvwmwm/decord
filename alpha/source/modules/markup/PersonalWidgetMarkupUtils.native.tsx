// Module ID: 14965
// Function ID: 14966
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6033, 12, 6034, 5755, 8444, 2]

// Module 14965 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5755 */;
import MarkupRulesDefault from "MarkupRules" /* 6034 */;
import combineMarkupRules from "combineMarkupRules" /* 6033 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8444 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
