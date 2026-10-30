// Module ID: 19901
// Function ID: 19902
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 19902, 6969, 1114, 5253, 8993, 1995, 2]
// Exports: default

// Module 19901 (FormTrialActiveUserLimitPicker)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
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
  dependencyMap = onChange(19902)();
  let tmp2 = jsx;
  let obj = {
    label: intl.string(str(1114).t["/JD9oe"]),
    subLabel: intl2.string(str(1114).t.Cg5eBm),
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
      const tmp2 = asyncRequire(8993, dependencyMap.paths);
      intl = intl4.intl;
      openLazy(tmp2, GuildRoleSubscriptionTrialActiveUserLimitSelect, obj);
    },
    disabled
  };
  const TableRow = str(6969).TableRow;
  intl = str(1114).intl;
  intl2 = str(1114).intl;
  TrailingText = str(6969).TableRow.TrailingText;
  if (null == str) {
    const intl3 = tmp3(1114).intl;
    stringResult = intl3.string(tmp3(1114).t.GiTC5a);
  } else {
    stringResult = str.toString();
  }
  return tmp2(TableRow, obj);
};
