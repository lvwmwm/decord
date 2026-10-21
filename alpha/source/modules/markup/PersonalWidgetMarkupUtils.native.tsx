// Module ID: 14286
// Function ID: 14287
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5961, 12, 5962, 5688, 8320, 2]

// Module 14286 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5688 */;
import MarkupRulesDefault from "MarkupRules" /* 5962 */;
import combineMarkupRules from "combineMarkupRules" /* 5961 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8320 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
