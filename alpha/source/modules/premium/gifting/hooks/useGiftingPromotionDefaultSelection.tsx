// Module ID: 13822
// Function ID: 13823
// Name: useGiftingPromotionDefaultSelection
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 13822 (useGiftingPromotionDefaultSelection)
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
