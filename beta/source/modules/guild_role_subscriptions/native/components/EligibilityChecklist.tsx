// Module ID: 17519
// Function ID: 17520
// Name: EligibilityChecklist
// Dependencies: [19, 17, 21, 4836, 5899, 17520, 17521, 4832, 5281, 1177, 14762, 2]
// Exports: default

// Module 17519 (EligibilityChecklist)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
function EligibilityChecklistRow(item) {
  let items1;
  let items2;
  let obj8;
  let tmp5Result2;
  let tmp6Result;
  item = item.item;
  const isLast = item.isLast;
  const tmp = closure_7();
  const items = [tmp.row, ];
  let eligibleRow = item.checked;
  const tmp3 = metroRequire;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  const obj = { style: items, children: items1 };
  items[1] = eligibleRow;
  const obj2 = { style: tmp.rowStatusIcon, source: tmp6Result };
  const tmp8 = FastImageDefault;
  if (item.checked) {
    tmp6Result = tmp6(17520);
  } else {
    tmp6Result = tmp6(17521);
  }
  items1 = [React3(tmp8, obj2), ];
  const obj3 = { style: tmp.rowTextColumn, children: items2 };
  items2 = [, , ];
  const obj4 = { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel };
  items2[0] = React3(Text_Text.Text, obj4);
  const obj5 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
  items2[1] = React3(Text_Text.Text, obj5);
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj6 = { style: tmp.actionButtonWrapper, children: React3(components_Button_Button.Button, obj8) };
    obj8 = { text: null, onPress: null, grow: true };
    ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
    tmp5Result = tmp5(tmp4, obj6);
  }
  items2[2] = tmp5Result;
  items1[1] = hasOwnProperty(View, obj3);
  const children = [hasOwnProperty(View, obj), ];
  if (isLast) {
    tmp5Result2 = tmp5(tmp10(1177).Spacer, { size: 16 });
  } else {
    const obj15 = { style: tmp.divider };
    tmp5Result2 = tmp5(tmp6(14762), obj15);
  }
  children[1] = tmp5Result2;
  return hasOwnProperty(tmp3, { children });
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
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
