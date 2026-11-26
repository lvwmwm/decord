// Module ID: 14656
// Function ID: 14657
// Name: ApplicationWidgetMarkupUtils
// Dependencies: [7071, 12, 7072, 14657, 6121, 7179, 2]
// Exports: parseApplicationWidgetText, parseApplicationWidgetTextToAST

// Module 14656 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 6121 */;
import MarkupRulesDefault from "MarkupRules" /* 7072 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 14657 */;
import combineMarkupRules from "combineMarkupRules" /* 7071 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser_mod from "markup/MarkupParser" /* 7179 */;
import size from "module_2" /* 2 */;

const items = ["text", "link", "emoji"];
const items1 = [module_12.pick(MarkupRulesDefault.RULES, items), , ];
let obj = { image: MarkupLiteralImageRuleDefault };
items1[1] = obj;
items1[2] = MarkupReactRulesDefault();
const importDefaultResultResult = combineMarkupRules(items1);
let MarkupParser = MarkupParser_mod;
let closure_0 = MarkupParser.reactParserFor(importDefaultResultResult);
MarkupParser = MarkupParser_mod;
let closure_1 = MarkupParser.astParserFor(importDefaultResultResult);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx");

export const APPLICATION_WIDGET_TEXT_RULE_KEYS = items;
export function parseApplicationWidgetText(text, arg1) {
  const obj = { allowLinks: true };
  const merged = Object.assign(arg1);
  return closure_0(text, true, obj);
}
export function parseApplicationWidgetTextToAST(arg0, arg1) {
  const obj = { allowLinks: true };
  const merged = Object.assign(arg1);
  return closure_1(arg0, true, obj);
}
