// Module ID: 19959
// Function ID: 19960
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 19960, 6975, 1113, 5258, 9002, 1994, 2]
// Exports: default

// Module 19959 (FormTrialActiveUserLimitPicker)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const GuildRoleSubscriptionTrialActiveUserLimitSelect = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  let TrailingText;
  let intl;
  let intl2;
  let items;
  let stringResult;
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const disabled = activeTrialUserlimit.disabled;
  dependencyMap = onChange(19960)();
  let tmp2 = jsx;
  let obj = {
    label: intl.string(str(1113).t["/JD9oe"]),
    subLabel: intl2.string(str(1113).t.Cg5eBm),
    trailing: tmp2(TrailingText, { text: stringResult }),
    arrow: true,
    onPress: function handleSelectLimit() {
      let intl;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let obj = {
        title: intl.string(intl4.t["/JD9oe"]),
        items,
        onItemSelect(arg0) {
          closure_1_1(arg0);
          const obj = onChange(items[5]);
          obj.hideActionSheet(GuildRoleSubscriptionTrialActiveUserLimitSelect);
        },
        selectedItem: str,
        hasIcons: false
      };
      const tmp2 = asyncRequire(9002, dependencyMap.paths);
      intl = intl4.intl;
      openLazy(tmp2, GuildRoleSubscriptionTrialActiveUserLimitSelect, obj);
    },
    disabled
  };
  const TableRow = str(6975).TableRow;
  intl = str(1113).intl;
  intl2 = str(1113).intl;
  TrailingText = str(6975).TableRow.TrailingText;
  if (null == str) {
    const intl3 = tmp3(1113).intl;
    stringResult = intl3.string(tmp3(1113).t.GiTC5a);
  } else {
    stringResult = str.toString();
  }
  return tmp2(TableRow, obj);
};
