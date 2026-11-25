// Module ID: 14603
// Function ID: 14604
// Name: ApplicationWidgetMarkupUtils
// Dependencies: [7040, 12, 7041, 14604, 6090, 7148, 2]
// Exports: parseApplicationWidgetText, parseApplicationWidgetTextToAST

// Module 14603 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 6090 */;
import MarkupRulesDefault from "MarkupRules" /* 7041 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 14604 */;
import combineMarkupRules from "combineMarkupRules" /* 7040 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser_mod from "markup/MarkupParser" /* 7148 */;
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
