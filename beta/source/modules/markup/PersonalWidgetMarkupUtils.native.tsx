// Module ID: 15271
// Function ID: 15272
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6197, 12, 6198, 5912, 8548, 2]

// Module 15271 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5912 */;
import MarkupRulesDefault from "MarkupRules" /* 6198 */;
import combineMarkupRules from "combineMarkupRules" /* 6197 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8548 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
