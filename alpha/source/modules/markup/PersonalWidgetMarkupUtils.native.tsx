// Module ID: 9018
// Function ID: 9019
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5295, 12, 5296, 4820, 8335, 2]

// Module 9018 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4820 */;
import MarkupRulesDefault from "MarkupRules" /* 5296 */;
import combineMarkupRules from "combineMarkupRules" /* 5295 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8335 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
