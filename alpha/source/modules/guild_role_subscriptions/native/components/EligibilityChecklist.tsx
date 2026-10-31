// Module ID: 19879
// Function ID: 19880
// Name: EligibilityChecklist
// Dependencies: [19, 17, 21, 5014, 7340, 575, 7092, 5624, 5634, 17195, 2]
// Exports: default

// Module 19879 (EligibilityChecklist)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
function EligibilityChecklistRow(item) {
  let items;
  let items2;
  let obj9;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp13Result2;
  let tmp5Result;
  item = item.item;
  const isLast = item.isLast;
  const tmp = closure_7();
  const obj = { style: tmp.row, children: items };
  const tmp3 = metroRequire;
  if (item.checked) {
    const obj2 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    const CircleCheckIcon = tmp6(7340).CircleCheckIcon;
    tmp5Result = tmp5(CircleCheckIcon, obj2);
    tmp10 = tmp6;
    tmp12 = importDefault;
    tmp13 = tmp5;
  } else {
    const obj3 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    const CircleXIcon = tmp6(7092).CircleXIcon;
    tmp5Result = tmp5(CircleXIcon, obj3);
    tmp10 = tmp6;
    tmp12 = importDefault;
    tmp13 = tmp5;
  }
  items = [tmp5Result, ];
  const items1 = [tmp.rowTextColumn, ];
  const obj4 = { style: items1, children: items2 };
  const tmp15 = item.checked && tmp.eligibleRow;
  items1[1] = tmp15;
  items2 = [, , ];
  const obj5 = { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel };
  items2[0] = tmp13(tmp10(5624).Text, obj5);
  const obj6 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
  items2[1] = tmp13(tmp10(5624).Text, obj6);
  let tmp13Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp13Result) {
    const obj7 = { style: tmp.actionButtonWrapper, children: tmp13(tmp10(5634).Button, obj9) };
    obj9 = { text: null, onPress: null, grow: true };
    ({ actionLabel: obj8.text, actionHandler: obj8.onPress } = item);
    tmp13Result = tmp13(tmp4, obj7);
  }
  items2[2] = tmp13Result;
  items[1] = hasOwnProperty(View, obj4);
  const children = [hasOwnProperty(View, obj), ];
  const obj17 = { style: null };
  if (isLast) {
    obj17.style = tmp.lastRowSpacer;
    tmp13Result2 = tmp13(tmp4, obj17);
  } else {
    obj17.style = tmp.divider;
    tmp13Result2 = tmp13(tmp12(17195), obj17);
  }
  children[1] = tmp13Result2;
  return hasOwnProperty(tmp3, { children });
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 }, lastRowSpacer: { height: 16 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    let obj = {
      style: tmp,
      children: items.map((item, index) => {
          const obj = { item, isLast: index === items.length - 1 };
          return React3(EligibilityChecklistRow, obj, item.checkedLabel);
        })
    };
    return closure_4(View, obj);
  }
};
