// Module ID: 10121
// Function ID: 10122
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 10121 (useGiftingPromotionDefaultSelectionV2)
const result = require("set").fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

export const useGiftingPromotionDefaultSelectionV2 = function useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward) {
  if (null != claimableRewards) {
    if (0 !== claimableRewards.length) {
      let first = selectedGiftingPromotionReward;
      if (null == selectedGiftingPromotionReward) {
        first = claimableRewards[0];
      }
      return first;
    }
  }
};
