// Module ID: 14088
// Function ID: 14089
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5464, 12, 5465, 5143, 8226, 2]

// Module 14088 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5143 */;
import MarkupRulesDefault from "MarkupRules" /* 5465 */;
import combineMarkupRules from "combineMarkupRules" /* 5464 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8226 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
