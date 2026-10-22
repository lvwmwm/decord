// Module ID: 14343
// Function ID: 14344
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5967, 12, 5968, 5692, 8330, 2]

// Module 14343 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5692 */;
import MarkupRulesDefault from "MarkupRules" /* 5968 */;
import combineMarkupRules from "combineMarkupRules" /* 5967 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8330 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
