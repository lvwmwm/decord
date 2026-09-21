// Module ID: 9291
// Function ID: 9292
// Name: ApplicationWidgetMarkupUtils
// Dependencies: [5210, 12, 5211, 9292, 4749, 8250, 2]
// Exports: parseApplicationWidgetText, parseApplicationWidgetTextToAST

// Module 9291 (ApplicationWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4749 */;
import MarkupRulesDefault from "MarkupRules" /* 5211 */;
import MarkupLiteralImageRuleDefault from "MarkupLiteralImageRule" /* 9292 */;
import combineMarkupRules from "combineMarkupRules" /* 5210 */;
import apply from "module_12" /* 12 */;
import MarkupParser_mod from "MarkupParser" /* 8250 */;

const items = ["text", "link", "emoji"];
const items1 = [apply.pick(MarkupRulesDefault.RULES, items), { image: MarkupLiteralImageRuleDefault }, MarkupReactRulesDefault()];
const importDefaultResultResult = combineMarkupRules(items1);
let MarkupParser = MarkupParser_mod;
let closure_0 = MarkupParser.reactParserFor(importDefaultResultResult);
let MarkupParser = MarkupParser_mod;
let closure_1 = MarkupParser.astParserFor(importDefaultResultResult);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetMarkupUtils.native.tsx");

export const APPLICATION_WIDGET_TEXT_RULE_KEYS = items;
export const parseApplicationWidgetText = function parseApplicationWidgetText(text, arg1) {
  const merged = Object.assign(arg1);
  return closure_0(text, true, { allowLinks: true });
};
export const parseApplicationWidgetTextToAST = function parseApplicationWidgetTextToAST(arg0, arg1) {
  const merged = Object.assign(arg1);
  return closure_1(arg0, true, { allowLinks: true });
};
