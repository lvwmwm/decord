// Module ID: 16904
// Function ID: 16905
// Name: FormTrialIntervalPicker
// Dependencies: [19, 21, 13310, 1236, 14532, 4312, 9013, 2007, 2]
// Exports: default

// Module 16904 (FormTrialIntervalPicker)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const result = require("LockedIcon").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(disabled) {
  let dependencyMap;
  let importDefault;
  const interval = disabled.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = disabled);
  if (null == interval) {
    let intl = interval(1236).intl;
    let stringResult = intl.string(interval(1236).t.WZG1BU);
  } else {
    let obj = interval(14532);
    stringResult = obj.formatPlanIntervalDuration(interval);
  }
  obj = {
    label: stringResult,
    onPress() {
      let obj = outer1_1(outer1_2[5]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = interval(outer1_2[3]).intl;
      obj[0] = intl.string(interval(outer1_2[3]).t.m1KuWd);
      obj[1] = closure_2;
      obj[2] = function onItemSelect(arg0) {
        if (closure_1 != null) {
          tmp(arg0);
        }
        outer1_1(outer1_2[5]).hideActionSheet(outer1_4);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj[3] = tmp3;
      obj.openLazy(interval(outer1_2[7])(outer1_2[6], outer1_2.paths), outer1_4, obj);
    },
    disabled: disabled.disabled
  };
  return jsx(importDefault(13310), {
    label: stringResult,
    onPress() {
      let obj = outer1_1(outer1_2[5]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = interval(outer1_2[3]).intl;
      obj[0] = intl.string(interval(outer1_2[3]).t.m1KuWd);
      obj[1] = closure_2;
      obj[2] = function onItemSelect(arg0) {
        if (closure_1 != null) {
          tmp(arg0);
        }
        outer1_1(outer1_2[5]).hideActionSheet(outer1_4);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj[3] = tmp3;
      obj.openLazy(interval(outer1_2[7])(outer1_2[6], outer1_2.paths), outer1_4, obj);
    },
    disabled: disabled.disabled
  });
};
