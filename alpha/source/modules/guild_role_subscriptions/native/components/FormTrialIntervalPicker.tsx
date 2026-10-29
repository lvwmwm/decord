// Module ID: 19836
// Function ID: 19837
// Name: FormTrialIntervalPicker
// Dependencies: [19, 21, 6963, 1125, 17097, 5247, 8962, 2000, 2]
// Exports: default

// Module 19836 (FormTrialIntervalPicker)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(interval) {
  let TrailingText;
  let intl;
  let intl2;
  let items;
  let stringResult;
  interval = interval.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = interval);
  let tmp = jsx;
  let tmp2 = interval;
  let tmp3 = dependencyMap;
  const disabled = interval.disabled;
  let obj = {
    label: intl.string(interval(1125).t.m1KuWd),
    subLabel: intl2.string(interval(1125).t.NB9NLF),
    trailing: tmp(TrailingText, { text: stringResult }),
    arrow: true,
    onPress: function handleSelectTrialInterval() {
      let intl;
      let tmp4;
      const tmp = ActionSheetActionCreatorsDefault;
      const openLazy = tmp.openLazy;
      let obj = {
        title: intl.string(intl4.t.m1KuWd),
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
      const tmp2 = asyncRequire(8962, dependencyMap.paths);
      intl = intl4.intl;
      tmp4 = interval;
      const tmp3 = GuildRoleSubscriptionTrialIntervalSelect;
      if (interval == null) {
        tmp4 = null;
      }
      openLazy(tmp2, tmp3, obj);
    },
    disabled
  };
  const TableRow = interval(6963).TableRow;
  intl = interval(1125).intl;
  intl2 = interval(1125).intl;
  TrailingText = interval(6963).TableRow.TrailingText;
  if (null == interval) {
    const intl3 = tmp2(1125).intl;
    stringResult = intl3.string(tmp2(1125).t.WZG1BU);
  } else {
    const tmp2Result = tmp2(17097);
    stringResult = tmp2Result.formatPlanIntervalDuration(interval);
  }
  return tmp(TableRow, obj);
};
