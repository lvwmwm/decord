// Module ID: 19837
// Function ID: 19838
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 19838, 6963, 1125, 5247, 8962, 2000, 2]
// Exports: default

// Module 19837 (FormTrialActiveUserLimitPicker)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
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
  dependencyMap = onChange(19838)();
  let tmp2 = jsx;
  let obj = {
    label: intl.string(str(1125).t["/JD9oe"]),
    subLabel: intl2.string(str(1125).t.Cg5eBm),
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
      const tmp2 = asyncRequire(8962, dependencyMap.paths);
      intl = intl4.intl;
      openLazy(tmp2, GuildRoleSubscriptionTrialActiveUserLimitSelect, obj);
    },
    disabled
  };
  const TableRow = str(6963).TableRow;
  intl = str(1125).intl;
  intl2 = str(1125).intl;
  TrailingText = str(6963).TableRow.TrailingText;
  if (null == str) {
    const intl3 = tmp3(1125).intl;
    stringResult = intl3.string(tmp3(1125).t.GiTC5a);
  } else {
    stringResult = str.toString();
  }
  return tmp2(TableRow, obj);
};
