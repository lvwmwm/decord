// Module ID: 11489
// Function ID: 11490
// Name: ApplicationWidgetMarkupUtils
// Dependencies: [5401, 12, 5402, 11490, 5080, 8005, 2]
// Exports: parseApplicationWidgetText, parseApplicationWidgetTextToAST

// Module 11489 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5080 */;
import MarkupRulesDefault from "MarkupRules" /* 5402 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 11490 */;
import combineMarkupRules from "combineMarkupRules" /* 5401 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser_mod from "MarkupParser" /* 8005 */;
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
export const parseApplicationWidgetText = function parseApplicationWidgetText(text, arg1) {
  const obj = { allowLinks: true };
  const merged = Object.assign(arg1);
  return closure_0(text, true, obj);
};
export const parseApplicationWidgetTextToAST = function parseApplicationWidgetTextToAST(arg0, arg1) {
  const obj = { allowLinks: true };
  const merged = Object.assign(arg1);
  return closure_1(arg0, true, obj);
};
