// Module ID: 14432
// Function ID: 14433
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5982, 12, 5983, 5707, 8343, 2]

// Module 14432 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5707 */;
import MarkupRulesDefault from "MarkupRules" /* 5983 */;
import combineMarkupRules from "combineMarkupRules" /* 5982 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8343 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
