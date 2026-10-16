// Module ID: 14078
// Function ID: 14079
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5463, 12, 5464, 5142, 8225, 2]

// Module 14078 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5142 */;
import MarkupRulesDefault from "MarkupRules" /* 5464 */;
import combineMarkupRules from "combineMarkupRules" /* 5463 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8225 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
