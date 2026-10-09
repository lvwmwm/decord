// Module ID: 13302
// Function ID: 13303
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5398, 12, 5399, 5079, 7986, 2]

// Module 13302 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5079 */;
import MarkupRulesDefault from "MarkupRules" /* 5399 */;
import combineMarkupRules from "combineMarkupRules" /* 5398 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7986 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
