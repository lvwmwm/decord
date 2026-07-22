// Module ID: 16269
// Function ID: 125677
// Name: EligibilityChecklistRow
// Dependencies: []
// Exports: default

// Module 16269 (EligibilityChecklistRow)
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
    let tmp7Result = tmp7(tmp8[5]);
  } else {
    tmp7Result = tmp7(tmp8[6]);
  }
  obj.source = tmp7Result;
  const items1 = [callback(importDefault(dependencyMap[4]), obj), ];
  const obj1 = { style: tmp.rowTextColumn };
  const obj2 = { "Null": true, "Null": true, alignItems: true, style: tmp.rowLabel, children: item.checked ? item.checkedLabel : item.uncheckedLabel };
  const items2 = [callback(arg1(dependencyMap[7]).Text, obj2), callback(arg1(dependencyMap[7]).Text, { children: item.description }), ];
  let tmp13 = null != item.actionHandler && null != item.actionLabel;
  if (tmp13) {
    const obj4 = { style: tmp.actionButtonWrapper };
    const obj5 = {};
    ({ actionLabel: obj8.text, actionHandler: obj8.onPress } = item);
    obj5.grow = true;
    obj4.children = callback(arg1(dependencyMap[8]).Button, obj5);
    tmp13 = callback(View, obj4);
  }
  items2[2] = tmp13;
  obj1.children = items2;
  items1[1] = closure_5(View, obj1);
  obj.children = items1;
  const items3 = [closure_5(View, obj), ];
  if (item.isLast) {
    const obj6 = { size: 16 };
    let tmp19Result = tmp19(arg1(dependencyMap[9]).Spacer, obj6);
  } else {
    const obj7 = { style: tmp.divider };
    tmp19Result = tmp19(importDefault(dependencyMap[10]), obj7);
  }
  items3[1] = tmp19Result;
  obj.children = items3;
  return closure_5(closure_6, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ row: {}, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { "Null": "ADBE Vector Group", "Null": false, -9223372036854775808: "staff" }, rowTextColumn: { marginLeft: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003183821265432445, marginVertical: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003136903938464816 }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default function EligibilityChecklist(items) {
  items = items.items;
  const arg1 = items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: tmp, children: items.map((checkedLabel) => callback(closure_8, { item: checkedLabel, isLast: arg1 === items.length - 1 }, checkedLabel.checkedLabel)) };
    return callback(View, obj);
  }
};
