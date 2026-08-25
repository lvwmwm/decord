// Module ID: 10269
// Function ID: 10270
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 10269 (useGiftingPromotionDefaultSelectionV2)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

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
