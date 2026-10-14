// Module ID: 13750
// Function ID: 13751
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5406, 12, 5407, 5084, 8012, 2]

// Module 13750 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5084 */;
import MarkupRulesDefault from "MarkupRules" /* 5407 */;
import combineMarkupRules from "combineMarkupRules" /* 5406 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8012 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
