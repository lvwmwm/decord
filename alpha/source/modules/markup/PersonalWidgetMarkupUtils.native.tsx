// Module ID: 8344
// Function ID: 8345
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5793, 12, 5794, 4884, 7657, 2]

// Module 8344 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4884 */;
import MarkupRulesDefault from "MarkupRules" /* 5794 */;
import combineMarkupRules from "combineMarkupRules" /* 5793 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7657 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
