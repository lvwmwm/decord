// Module ID: 14329
// Function ID: 14330
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5968, 12, 5969, 5692, 8329, 2]

// Module 14329 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5692 */;
import MarkupRulesDefault from "MarkupRules" /* 5969 */;
import combineMarkupRules from "combineMarkupRules" /* 5968 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8329 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
