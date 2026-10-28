// Module ID: 19603
// Function ID: 19604
// Name: FormTrialIntervalPicker
// Dependencies: [19, 21, 15405, 1125, 16859, 5246, 8959, 1999, 2]
// Exports: default

// Module 19603 (FormTrialIntervalPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import FormDropdownDefault from "FormDropdown" /* 15405 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(interval) {
  let items;
  let stringResult;
  interval = interval.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = interval);
  let tmp2 = dependencyMap;
  const disabled = interval.disabled;
  let tmp = jsx;
  let tmp3 = FormDropdownDefault;
  if (null == interval) {
    let intl = interval(1125).intl;
    stringResult = intl.string(interval(1125).t.WZG1BU);
  } else {
    let tmp4 = interval;
    let obj = interval(16859);
    stringResult = obj.formatPlanIntervalDuration(interval);
  }
  const obj2 = {
    label: stringResult,
    onPress: function handleSelectTrialInterval() {
      let intl;
      let tmp4;
      const tmp = ActionSheetActionCreatorsDefault;
      const openLazy = tmp.openLazy;
      let obj = {
        title: intl.string(intl2.t.m1KuWd),
        items: dependencyMap,
        onItemSelect(arg0) {
          if (closure_1_1 != null) {
            tmp(arg0);
          }
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(GuildRoleSubscriptionTrialIntervalSelect);
        },
        selectedItem: tmp4,
        hasIcons: false
      };
      const tmp2 = asyncRequire(8959, dependencyMap.paths);
      intl = intl2.intl;
      tmp4 = interval;
      const tmp3 = GuildRoleSubscriptionTrialIntervalSelect;
      if (interval == null) {
        tmp4 = null;
      }
      openLazy(tmp2, tmp3, obj);
    },
    disabled
  };
  return tmp(tmp3, obj2);
};
