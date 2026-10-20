// Module ID: 14211
// Function ID: 14212
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5939, 12, 5940, 5668, 8292, 2]

// Module 14211 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5668 */;
import MarkupRulesDefault from "MarkupRules" /* 5940 */;
import combineMarkupRules from "combineMarkupRules" /* 5939 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8292 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
