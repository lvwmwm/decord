// Module ID: 9719
// Function ID: 75733
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 9719 (useGiftingPromotionDefaultSelectionV2)
const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

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
