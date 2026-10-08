// Module ID: 13191
// Function ID: 13192
// Name: ApplicationWidgetMarkupUtils
// Dependencies: [5397, 12, 5398, 13192, 5078, 7978, 2]
// Exports: parseApplicationWidgetText, parseApplicationWidgetTextToAST

// Module 13191 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 5078 */;
import MarkupRulesDefault from "MarkupRules" /* 5398 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 13192 */;
import combineMarkupRules from "combineMarkupRules" /* 5397 */;
import module_12 from "module_12" /* 12 */;
import MarkupParser_mod from "MarkupParser" /* 7978 */;
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
