// Module ID: 14160
// Function ID: 14161
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5501, 12, 5502, 5180, 8272, 2]

// Module 14160 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5180 */;
import MarkupRulesDefault from "MarkupRules" /* 5502 */;
import combineMarkupRules from "combineMarkupRules" /* 5501 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8272 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
