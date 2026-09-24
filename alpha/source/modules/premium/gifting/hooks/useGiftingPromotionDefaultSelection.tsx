// Module ID: 11401
// Function ID: 11402
// Name: useGiftingPromotionDefaultSelection
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 11401 (useGiftingPromotionDefaultSelection)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

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
