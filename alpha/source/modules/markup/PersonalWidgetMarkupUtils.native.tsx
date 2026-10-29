// Module ID: 14890
// Function ID: 14891
// Name: PersonalWidgetMarkupUtils
// Dependencies: [6021, 12, 6022, 5744, 8399, 2]

// Module 14890 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5744 */;
import MarkupRulesDefault from "MarkupRules" /* 6022 */;
import combineMarkupRules from "combineMarkupRules" /* 6021 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8399 */;
import size from "module_2" /* 2 */;

const items = [module_12.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items);
const reactParserForResult = MarkupParser.reactParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
