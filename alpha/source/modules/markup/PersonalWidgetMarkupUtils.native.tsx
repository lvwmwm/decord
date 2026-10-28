// Module ID: 14655
// Function ID: 14656
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6017, 12, 6018, 5742, 8377, 2]

// Module 14655 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5742 */;
import MarkupRulesDefault from "MarkupRules" /* 6018 */;
import combineMarkupRules from "combineMarkupRules" /* 6017 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8377 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
