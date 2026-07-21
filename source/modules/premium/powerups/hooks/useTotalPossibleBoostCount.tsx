// Module ID: 14922
// Function ID: 112374
// Name: useTotalPossibleBoostCount
// Dependencies: []
// Exports: default

// Module 14922 (useTotalPossibleBoostCount)
const useMemo = require(dependencyMap[0]).useMemo;
const _module = require(dependencyMap[1]);
({ MULTIPLE_PURCHASEABLE_PREMIUM_FEATURES_BOOST_INFO: closure_1, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: closure_2 } = _module);
const _module1 = require(dependencyMap[2]);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_3, BoostedGuildTiers: closure_4, GuildFeatures: closure_5 } = _module1);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/hooks/useTotalPossibleBoostCount.tsx");

export default function useTotalPossibleBoostCount(arg0) {
  const useMemo = arg0;
  const items = [arg0];
  return useMemo(() => {
    if (null == arg0) {
      return 0;
    } else {
      let hasItem;
      if (null != arg0) {
        const features = arg0.features;
        hasItem = features.has(obj.PREMIUM_TIER_3_OVERRIDE);
      }
      let num = 0;
      if (true !== hasItem) {
        num = closure_3[closure_4.TIER_3];
      }
      const arg0 = num;
      const _Object = Object;
      const values = Object.values(closure_2);
      const _Object2 = Object;
      const combined = values.concat(Object.values(closure_1));
      const item = combined.forEach((includedInLevel) => {
        let tmp = null != includedInLevel.includedInLevel;
        if (!tmp) {
          let isEnabledResult;
          if (null != includedInLevel.isEnabled) {
            isEnabledResult = includedInLevel.isEnabled(id.id);
          }
          tmp = null != isEnabledResult && !isEnabledResult;
          const tmp4 = null != isEnabledResult && !isEnabledResult;
        }
        if (!tmp) {
          const id = id + includedInLevel.boostPrice;
        }
      });
      return arg0;
    }
  }, items);
};
