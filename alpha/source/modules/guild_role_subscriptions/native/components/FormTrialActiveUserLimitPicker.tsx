// Module ID: 18275
// Function ID: 18276
// Name: FormTrialActiveUserLimitPicker
// Dependencies: [19, 21, 18276, 13948, 1126, 5054, 8529, 1999, 2]
// Exports: default

// Module 18275 (FormTrialActiveUserLimitPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const GuildRoleSubscriptionTrialActiveUserLimitSelect = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  let items;
  let stringResult;
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const disabled = activeTrialUserlimit.disabled;
  dependencyMap = onChange(18276)();
  let tmp2 = jsx;
  const tmp3 = onChange(13948);
  if (null == str) {
    let intl = str(1126).intl;
    stringResult = intl.string(str(1126).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  let obj = {
    label: stringResult,
    onPress: function handleSelectLimit() {
      let intl;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let obj = {
        title: intl.string(intl2.t["/JD9oe"]),
        items,
        onItemSelect(arg0) {
          closure_1_1(arg0);
          const obj = onChange(items[5]);
          obj.hideActionSheet(GuildRoleSubscriptionTrialActiveUserLimitSelect);
        },
        selectedItem: str,
        hasIcons: false
      };
      const tmp2 = asyncRequire(8529, dependencyMap.paths);
      intl = intl2.intl;
      openLazy(tmp2, GuildRoleSubscriptionTrialActiveUserLimitSelect, obj);
    },
    disabled
  };
  return tmp2(tmp3, obj);
};
