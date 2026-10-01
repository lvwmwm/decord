// Module ID: 5913
// Function ID: 5914
// Name: TermsFieldList
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 4823, 5914, 2]
// Exports: default

// Module 5913 (TermsFieldList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRowDivider from "TableRowDivider" /* 5914 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function TermsFieldListItem(rowNumber) {
  let intl;
  let items;
  let obj4;
  let rowCount;
  let rule;
  let rulesChannelId;
  rowNumber = rowNumber.rowNumber;
  ({ rowCount, rule, rulesChannelId } = rowNumber);
  const tmp = closure_8();
  const obj = { style: tmp.termsRow, children: items };
  const obj2 = { style: tmp.termsRowNumber, variant: "text-sm/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(intl2.t.XpgzeO, { number: rowNumber, total: rowCount }), children: "" + rowNumber + "." };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.termsRowContent, variant: "text-md/medium", children: obj4.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }) };
  const Text2 = Text_Text.Text;
  obj4 = MarkupUtilsDefault;
  items[1] = hasOwnProperty(Text2, obj3);
  return metroRequire(View, obj);
}
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { termsContainer: obj2, firstItem: obj3, lastItem: obj4, termsRow: { flexDirection: "row" }, termsRowContent: { flex: 1, lineHeight: 20 }, termsRowNumber: { paddingRight: 8, width: 20, height: 20 }, title: { marginBottom: 16 } };
obj2 = { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj4 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginBottom: 12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default function TermsFieldList(rules) {
  let intl;
  let items;
  let termsContainer;
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  let tmp = closure_8();
  dependencyMap = tmp;
  let obj = { children: items };
  let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(rules(1115).t.prJqwT) };
  const Text = rules(4832).Text;
  intl = rules(1115).intl;
  items = [closure_5(Text, obj2), ];
  const obj3 = {
    accessibilityRole: "list",
    children: rules.map((rule, index) => {
      let obj2;
      const items = [termsContainer.termsContainer, , ];
      let firstItem = null;
      const Fragment = react.Fragment;
      const tmp = metroRequire;
      const tmp3 = View;
      if (0 === index) {
        firstItem = tmp4.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (index === rules.length - 1) {
        lastItem = tmp4.lastItem;
      }
      items[2] = lastItem;
      const obj = { style: items, children: hasOwnProperty(TermsFieldListItem, obj2) };
      obj2 = { rule, rowNumber: index + 1, rowCount: rules.length, rulesChannelId };
      const children = [hasOwnProperty(tmp3, obj), ];
      let tmp2Result = null;
      if (index !== rules.length - 1) {
        tmp2Result = tmp2(TableRowDivider.TableRowDivider, {});
      }
      children[1] = tmp2Result;
      return tmp(Fragment, { children }, "term-" + rule + "-" + index);
    })
  };
  items[1] = closure_5(View, obj3);
  return closure_6(closure_7, obj);
};
