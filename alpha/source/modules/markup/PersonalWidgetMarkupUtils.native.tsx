// Module ID: 13352
// Function ID: 13353
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5401, 12, 5402, 5080, 8004, 2]

// Module 13352 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5080 */;
import MarkupRulesDefault from "MarkupRules" /* 5402 */;
import combineMarkupRules from "combineMarkupRules" /* 5401 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8004 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
