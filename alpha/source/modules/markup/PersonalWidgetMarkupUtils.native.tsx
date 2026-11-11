// Module ID: 12026
// Function ID: 12027
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6280, 12, 6281, 5995, 9150, 2]

// Module 12026 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5995 */;
import MarkupRulesDefault from "MarkupRules" /* 6281 */;
import combineMarkupRules from "combineMarkupRules" /* 6280 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 9150 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
