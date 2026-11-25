// Module ID: 20169
// Function ID: 20170
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 20170, 6113, 1112, 5226, 8457, 2119, 2]
// Exports: default

// Module 20169 (FormTrialActiveUserLimitPicker)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
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
  dependencyMap = onChange(20170)();
  let tmp2 = jsx;
  let obj = {
    label: intl.string(str(1112).t["/JD9oe"]),
    subLabel: intl2.string(str(1112).t.Cg5eBm),
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
      const tmp2 = asyncRequire(8457, dependencyMap.paths);
      intl = intl4.intl;
      openLazy(tmp2, GuildRoleSubscriptionTrialActiveUserLimitSelect, obj);
    },
    disabled
  };
  const TableRow = str(6113).TableRow;
  intl = str(1112).intl;
  intl2 = str(1112).intl;
  TrailingText = str(6113).TableRow.TrailingText;
  if (null == str) {
    const intl3 = tmp3(1112).intl;
    stringResult = intl3.string(tmp3(1112).t.GiTC5a);
  } else {
    stringResult = str.toString();
  }
  return tmp2(TableRow, obj);
};
