// Module ID: 9763
// Function ID: 75944
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 9763 (useGiftingPromotionDefaultSelectionV2)
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
