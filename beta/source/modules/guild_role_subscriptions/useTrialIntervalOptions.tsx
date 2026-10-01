// Module ID: 14777
// Function ID: 14778
// Name: useTrialIntervalOptions
// Dependencies: [19, 14750, 1374, 1115, 14776, 2]
// Exports: default

// Module 14777 (useTrialIntervalOptions)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const TIER_TRIAL_INTERVALS = GuildRoleSubscriptionsConstants.TIER_TRIAL_INTERVALS;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialIntervalOptions.tsx");

export default function useTrialIntervalOptions(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const options = TIER_TRIAL_INTERVALS.map((value) => {
      let obj4;
      const obj = { value, label: null, isDefault: null };
      if (value.interval === constants.DAY) {
        let formatToPlainStringResult;
        if (7 === value.interval_count) {
          const intl = closure_1_0(closure_1_1[3]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj3 = { defaultLimit: obj4.formatPlanIntervalDuration(value) };
          const XfSsr1 = closure_1_0(closure_1_1[3]).t.XfSsr1;
          obj4 = closure_1_0(closure_1_1[4]);
          formatToPlainStringResult = formatToPlainString(XfSsr1, obj3);
        }
        obj.label = formatToPlainStringResult;
        const tmp5 = value.interval === tmp.DAY && 7 === value.interval_count;
        obj.isDefault = tmp5;
        return obj;
      }
      const obj2 = closure_1_0(closure_1_1[4]);
      formatToPlainStringResult = obj2.formatPlanIntervalDuration(value);
    });
    let selectedOption = closure_0;
    if (null != closure_0) {
      const iter = options.find((value) => null != value.value && value.value.interval === closure_1_0.interval && value.value.interval_count === closure_1_0.interval_count);
      let value;
      if (iter != null) {
        value = iter.value;
      }
      selectedOption = value;
    }
    return { options, selectedOption };
  }, items);
};
