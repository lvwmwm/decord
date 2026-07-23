// Module ID: 14121
// Function ID: 108676
// Name: useTrialIntervalOptions
// Dependencies: [31, 14094, 1851, 1212, 14120, 2]
// Exports: default

// Module 14121 (useTrialIntervalOptions)
import result from "result";
import { TIER_TRIAL_INTERVALS } from "MAX_SUBSCRIPTION_TIERS";
import { SubscriptionIntervalTypes } from "GuildFeatures";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const mapped = outer1_3.map((interval) => {
      let obj = { value: interval };
      if (interval.interval === outer2_4.DAY) {
        if (7 === interval.interval_count) {
          const intl = callback(outer2_1[3]).intl;
          obj = { defaultLimit: callback(outer2_1[4]).formatPlanIntervalDuration(interval) };
          let formatToPlainStringResult = intl.formatToPlainString(callback(outer2_1[3]).t.XfSsr1, obj);
          const obj4 = callback(outer2_1[4]);
        }
        obj.label = formatToPlainStringResult;
        let tmp5 = interval.interval === outer2_4.DAY;
        if (tmp5) {
          tmp5 = 7 === interval.interval_count;
        }
        obj.isDefault = tmp5;
        return obj;
      }
      formatToPlainStringResult = callback(outer2_1[4]).formatPlanIntervalDuration(interval);
    });
    if (null != closure_0) {
      const iter = mapped.find((value) => {
        let tmp = null != value.value;
        if (tmp) {
          tmp = value.value.interval === outer1_0.interval;
        }
        if (tmp) {
          tmp = value.value.interval_count === outer1_0.interval_count;
        }
        return tmp;
      });
      let value;
      if (null != iter) {
        value = iter.value;
      }
      let tmp = value;
    } else {
      tmp = closure_0;
    }
    let obj = { options: mapped, selectedOption: tmp };
    return obj;
  }, items);
};
