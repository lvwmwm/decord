// Module ID: 5124
// Function ID: 44437
// Name: TermsFieldListItem
// Dependencies: [31, 27, 33, 4130, 689, 4126, 4120, 1212, 5125, 2]
// Exports: default

// Module 5124 (TermsFieldListItem)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function TermsFieldListItem(arg0) {
  let rowNumber;
  let rule;
  let rulesChannelId;
  ({ rowNumber, rule, rulesChannelId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.termsRow };
  obj = { style: tmp.termsRowNumber, variant: "text-sm/medium", color: "text-muted", children: "" + rowNumber + "." };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.termsRowContent, variant: "text-md/medium", children: importDefault(4120).parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }) };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.termsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.firstItem = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const obj1 = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.lastItem = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginBottom: 12 };
_createForOfIteratorHelperLoose.termsRow = { flexDirection: "row" };
_createForOfIteratorHelperLoose.termsRowContent = { flex: 1, lineHeight: 20 };
_createForOfIteratorHelperLoose.termsRowNumber = { paddingRight: 8, width: 20, height: 20 };
_createForOfIteratorHelperLoose.title = { marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginBottom: 12 };
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default function TermsFieldList(rules) {
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = {};
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
  const intl = rules(1212).intl;
  obj.children = intl.string(rules(1212).t.prJqwT);
  let items = [
    callback(rules(4126).Text, obj),
    rules.map((rule) => {
      let obj = {};
      obj = {};
      const items = [tmp.termsContainer, , ];
      let firstItem = null;
      if (0 === arg1) {
        firstItem = tmp.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (arg1 === rules.length - 1) {
        lastItem = tmp.lastItem;
      }
      items[2] = lastItem;
      obj.style = items;
      obj = { rule, rowNumber: arg1 + 1, rulesChannelId };
      obj.children = outer1_5(outer1_9, obj);
      const items1 = [outer1_5(outer1_4, obj), ];
      let tmp8 = null;
      if (arg1 !== rules.length - 1) {
        tmp8 = outer1_5(rules(tmp[8]).TableRowDivider, {});
      }
      items1[1] = tmp8;
      obj.children = items1;
      return outer1_6(outer1_3.Fragment, obj, "term-" + rule + "-" + arg1);
    })
  ];
  obj.children = items;
  return callback2(closure_7, obj);
};
