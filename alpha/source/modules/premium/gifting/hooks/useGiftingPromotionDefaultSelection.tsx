// Module ID: 14697
// Function ID: 14698
// Name: useGiftingPromotionDefaultSelection
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 14697 (useGiftingPromotionDefaultSelection)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

export function useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward) {
  if (null != claimableRewards) {
    if (0 !== claimableRewards.length) {
      let first = selectedGiftingPromotionReward;
      if (null == selectedGiftingPromotionReward) {
        first = claimableRewards[0];
      }
      return first;
    }
  }
}
