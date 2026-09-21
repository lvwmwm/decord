// Module ID: 8936
// Function ID: 8937
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5210, 12, 5211, 4749, 8250, 2]

// Module 8936 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4749 */;
import MarkupRulesDefault from "MarkupRules" /* 5211 */;
import combineMarkupRules from "combineMarkupRules" /* 5210 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8250 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
