// Module ID: 15093
// Function ID: 114906
// Name: useTotalPossibleBoostCount
// Dependencies: [31, 4018, 653, 2]
// Exports: default

// Module 15093 (useTotalPossibleBoostCount)
import { useMemo } from "result";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";

let closure_1;
let closure_2;
let closure_3;
let closure_4;
let closure_5;
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: closure_1, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: closure_2 } = BoostedGuildTiers);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_3, BoostedGuildTiers: closure_4, GuildFeatures: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default function useTotalPossibleBoostCount(arg0) {
  const useMemo = arg0;
  const items = [arg0];
  return useMemo(() => {
    if (null == num) {
      return 0;
    } else {
      let hasItem;
      if (null != num) {
        const features = num.features;
        hasItem = features.has(outer1_5.PREMIUM_TIER_3_OVERRIDE);
      }
      num = 0;
      if (true !== hasItem) {
        num = outer1_3[outer1_4.TIER_3];
      }
      const _Object = Object;
      const values = Object.values(outer1_2);
      const _Object2 = Object;
      const combined = values.concat(Object.values(outer1_1));
      const item = combined.forEach((includedInLevel) => {
        let tmp = null != includedInLevel.includedInLevel;
        if (!tmp) {
          let isEnabledResult;
          if (null != includedInLevel.isEnabled) {
            isEnabledResult = includedInLevel.isEnabled(num.id);
          }
          tmp = null != isEnabledResult && !isEnabledResult;
          const tmp4 = null != isEnabledResult && !isEnabledResult;
        }
        if (!tmp) {
          closure_0 = closure_0 + includedInLevel.boostPrice;
        }
      });
      return num;
    }
  }, items);
};
