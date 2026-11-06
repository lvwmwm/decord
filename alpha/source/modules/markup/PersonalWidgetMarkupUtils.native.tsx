// Module ID: 15195
// Function ID: 15196
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6191, 12, 6192, 5911, 8536, 2]

// Module 15195 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5911 */;
import MarkupRulesDefault from "MarkupRules" /* 6192 */;
import combineMarkupRules from "combineMarkupRules" /* 6191 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8536 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
