// Module ID: 8117
// Function ID: 8118
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5304, 12, 5305, 4825, 7433, 2]

// Module 8117 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4825 */;
import MarkupRulesDefault from "MarkupRules" /* 5305 */;
import combineMarkupRules from "combineMarkupRules" /* 5304 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7433 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
