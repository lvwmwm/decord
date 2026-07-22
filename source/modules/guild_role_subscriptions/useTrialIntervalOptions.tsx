// Module ID: 14007
// Function ID: 106520
// Name: useTrialIntervalOptions
// Dependencies: []
// Exports: default

// Module 14007 (useTrialIntervalOptions)
let closure_2 = importAll(dependencyMap[0]);
const TIER_TRIAL_INTERVALS = arg1(dependencyMap[1]).TIER_TRIAL_INTERVALS;
const SubscriptionIntervalTypes = arg1(dependencyMap[2]).SubscriptionIntervalTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const mapped = closure_3.map((interval) => {
      let obj = { value: interval };
      if (interval.interval === constants.DAY) {
        if (7 === interval.interval_count) {
          const intl = lib(closure_1[3]).intl;
          obj = { defaultLimit: lib(closure_1[4]).formatPlanIntervalDuration(interval) };
          let formatToPlainStringResult = intl.formatToPlainString(lib(closure_1[3]).t.XfSsr1, obj);
          const obj4 = lib(closure_1[4]);
        }
        obj.label = formatToPlainStringResult;
        let tmp5 = interval.interval === constants.DAY;
        if (tmp5) {
          tmp5 = 7 === interval.interval_count;
        }
        obj.isDefault = tmp5;
        return obj;
      }
      formatToPlainStringResult = lib(closure_1[4]).formatPlanIntervalDuration(interval);
    });
    if (null != arg0) {
      const iter = mapped.find((value) => {
        let tmp = null != value.value;
        if (tmp) {
          tmp = value.value.interval === lib.interval;
        }
        if (tmp) {
          tmp = value.value.interval_count === lib.interval_count;
        }
        return tmp;
      });
      let value;
      if (null != iter) {
        value = iter.value;
      }
      let tmp = value;
    } else {
      tmp = arg0;
    }
    const obj = { options: mapped, selectedOption: tmp };
    return obj;
  }, items);
};
