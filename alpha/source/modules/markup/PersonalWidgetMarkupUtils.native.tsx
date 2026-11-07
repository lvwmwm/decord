// Module ID: 15229
// Function ID: 15230
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6165, 12, 6166, 5880, 8515, 2]

// Module 15229 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5880 */;
import MarkupRulesDefault from "MarkupRules" /* 6166 */;
import combineMarkupRules from "combineMarkupRules" /* 6165 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8515 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
