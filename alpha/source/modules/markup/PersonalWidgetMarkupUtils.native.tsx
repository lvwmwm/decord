// Module ID: 15106
// Function ID: 15107
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6153, 12, 6154, 5875, 8568, 2]

// Module 15106 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5875 */;
import MarkupRulesDefault from "MarkupRules" /* 6154 */;
import combineMarkupRules from "combineMarkupRules" /* 6153 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8568 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
