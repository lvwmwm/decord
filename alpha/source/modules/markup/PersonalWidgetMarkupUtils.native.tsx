// Module ID: 14927
// Function ID: 14928
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6028, 12, 6029, 5750, 8436, 2]

// Module 14927 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5750 */;
import MarkupRulesDefault from "MarkupRules" /* 6029 */;
import combineMarkupRules from "combineMarkupRules" /* 6028 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8436 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
