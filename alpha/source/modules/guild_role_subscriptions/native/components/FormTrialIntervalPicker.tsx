// Module ID: 19302
// Function ID: 19303
// Name: FormTrialIntervalPicker
// Dependencies: [19, 21, 15144, 1128, 16588, 5210, 8925, 2002, 2]
// Exports: default

// Module 19302 (FormTrialIntervalPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import FormDropdownDefault from "FormDropdown" /* 15144 */;
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
    let intl = interval(1128).intl;
    stringResult = intl.string(interval(1128).t.WZG1BU);
  } else {
    let tmp4 = interval;
    let obj = interval(16588);
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
      const tmp2 = asyncRequire(8925, dependencyMap.paths);
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
