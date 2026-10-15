// Module ID: 14046
// Function ID: 14047
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5461, 12, 5462, 5139, 8222, 2]

// Module 14046 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5139 */;
import MarkupRulesDefault from "MarkupRules" /* 5462 */;
import combineMarkupRules from "combineMarkupRules" /* 5461 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8222 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
