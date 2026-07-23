// Module ID: 16386
// Function ID: 127851
// Name: EligibilityChecklistRow
// Dependencies: [31, 27, 33, 4130, 5085, 16387, 16388, 4126, 4543, 1273, 14106, 2]
// Exports: default

// Module 16386 (EligibilityChecklistRow)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = callback2();
  let obj = {};
  obj = {};
  const items = [tmp.row, ];
  let eligibleRow = item.checked;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  items[1] = eligibleRow;
  obj.style = items;
  obj = { style: tmp.rowStatusIcon };
  if (item.checked) {
    let tmp7Result = tmp7(16387);
  } else {
    tmp7Result = tmp7(16388);
  }
  obj.source = tmp7Result;
  const items1 = [callback(importDefault(5085), obj), ];
  const obj1 = { style: tmp.rowTextColumn };
  const obj2 = { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel };
  const items2 = [callback(require(4126) /* Text */.Text, obj2), , ];
  const obj3 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  let tmp13 = null != item.actionHandler && null != item.actionLabel;
  if (tmp13) {
    const obj4 = { style: tmp.actionButtonWrapper };
    const obj5 = {};
    ({ actionLabel: obj8.text, actionHandler: obj8.onPress } = item);
    obj5.grow = true;
    obj4.children = callback(require(4543) /* Button */.Button, obj5);
    tmp13 = callback(View, obj4);
  }
  items2[2] = tmp13;
  obj1.children = items2;
  items1[1] = closure_5(View, obj1);
  obj.children = items1;
  const items3 = [closure_5(View, obj), ];
  if (item.isLast) {
    const obj6 = { size: 16 };
    let tmp19Result = tmp19(require(1273) /* Button */.Spacer, obj6);
  } else {
    const obj7 = { style: tmp.divider };
    tmp19Result = tmp19(importDefault(14106), obj7);
  }
  items3[1] = tmp19Result;
  obj.children = items3;
  return closure_5(closure_6, obj);
}
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: tmp, children: items.map((checkedLabel) => outer1_4(outer1_8, { item: checkedLabel, isLast: arg1 === items.length - 1 }, checkedLabel.checkedLabel)) };
    return callback(View, obj);
  }
};
