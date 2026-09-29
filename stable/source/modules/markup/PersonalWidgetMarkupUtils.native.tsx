// Module ID: 8970
// Function ID: 8971
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5240, 12, 5241, 4779, 8277, 2]

// Module 8970 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4779 */;
import MarkupRulesDefault from "MarkupRules" /* 5241 */;
import combineMarkupRules from "combineMarkupRules" /* 5240 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8277 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
