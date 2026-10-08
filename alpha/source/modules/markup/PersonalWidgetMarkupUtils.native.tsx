// Module ID: 13209
// Function ID: 13210
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5397, 12, 5398, 5078, 7978, 2]

// Module 13209 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5078 */;
import MarkupRulesDefault from "MarkupRules" /* 5398 */;
import combineMarkupRules from "combineMarkupRules" /* 5397 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7978 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
