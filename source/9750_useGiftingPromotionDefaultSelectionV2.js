// Module ID: 9750
// Function ID: 75863
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: []
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 9750 (useGiftingPromotionDefaultSelectionV2)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

export const useGiftingPromotionDefaultSelectionV2 = function useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward) {
  let first = selectedGiftingPromotionReward;
  if (null != claimableRewards) {
    if (0 !== claimableRewards.length) {
      if (null == first) {
        first = claimableRewards[0];
      }
      return first;
    }
  }
};
