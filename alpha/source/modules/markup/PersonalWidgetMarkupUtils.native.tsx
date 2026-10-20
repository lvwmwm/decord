// Module ID: 14193
// Function ID: 14194
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5936, 12, 5937, 5668, 8288, 2]

// Module 14193 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5668 */;
import MarkupRulesDefault from "MarkupRules" /* 5937 */;
import combineMarkupRules from "combineMarkupRules" /* 5936 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8288 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
