// Module ID: 9755
// Function ID: 75890
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: []
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 9755 (useGiftingPromotionDefaultSelectionV2)
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
