// Module ID: 14428
// Function ID: 14429
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6013, 12, 6014, 5738, 8376, 2]

// Module 14428 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5738 */;
import MarkupRulesDefault from "MarkupRules" /* 6014 */;
import combineMarkupRules from "combineMarkupRules" /* 6013 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8376 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
