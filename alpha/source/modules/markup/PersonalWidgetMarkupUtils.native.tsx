// Module ID: 14367
// Function ID: 14368
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5979, 12, 5980, 5704, 8342, 2]

// Module 14367 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5704 */;
import MarkupRulesDefault from "MarkupRules" /* 5980 */;
import combineMarkupRules from "combineMarkupRules" /* 5979 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8342 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
