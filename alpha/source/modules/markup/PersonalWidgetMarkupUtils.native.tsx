// Module ID: 15200
// Function ID: 15201
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6171, 12, 6172, 5892, 8590, 2]

// Module 15200 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5892 */;
import MarkupRulesDefault from "MarkupRules" /* 6172 */;
import combineMarkupRules from "combineMarkupRules" /* 6171 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8590 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
