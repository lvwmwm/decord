// Module ID: 10819
// Function ID: 10820
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6341, 12, 6342, 6059, 9227, 2]

// Module 10819 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 6059 */;
import MarkupRulesDefault from "MarkupRules" /* 6342 */;
import combineMarkupRules from "combineMarkupRules" /* 6341 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "markup/MarkupParser" /* 9227 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
