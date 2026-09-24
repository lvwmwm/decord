// Module ID: 8968
// Function ID: 8969
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5242, 12, 5243, 4781, 8282, 2]

// Module 8968 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4781 */;
import MarkupRulesDefault from "MarkupRules" /* 5243 */;
import combineMarkupRules from "combineMarkupRules" /* 5242 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8282 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
