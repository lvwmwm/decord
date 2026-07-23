// Module ID: 16442
// Function ID: 128148
// Name: FormTrialIntervalPicker
// Dependencies: [31, 33, 12903, 1212, 14120, 4098, 8382, 1934, 2]
// Exports: default

// Module 16442 (FormTrialIntervalPicker)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("LockedIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(interval) {
  let dependencyMap;
  let importDefault;
  interval = interval.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = interval);
  let obj = {};
  if (null == interval) {
    let intl = interval(1212).intl;
    let stringResult = intl.string(interval(1212).t.WZG1BU);
  } else {
    stringResult = interval(14120).formatPlanIntervalDuration(interval);
    const obj2 = interval(14120);
  }
  obj.label = stringResult;
  obj.onPress = function onPress() {
    let obj = outer1_1(outer1_2[5]);
    obj = {};
    const intl = interval(outer1_2[3]).intl;
    obj.title = intl.string(interval(outer1_2[3]).t.m1KuWd);
    obj.items = closure_2;
    obj.onItemSelect = function onItemSelect(arg0) {
      if (null != outer1_1) {
        outer1_1(arg0);
      }
      outer2_1(outer2_2[5]).hideActionSheet("GuildRoleSubscriptionTrialIntervalSelect");
    };
    let tmp2 = null;
    if (null != interval) {
      tmp2 = interval;
    }
    obj.selectedItem = tmp2;
    obj.hasIcons = false;
    obj.openLazy(interval(outer1_2[7])(outer1_2[6], outer1_2.paths), "GuildRoleSubscriptionTrialIntervalSelect", obj);
  };
  obj.disabled = interval.disabled;
  return jsx(importDefault(12903), {});
};
