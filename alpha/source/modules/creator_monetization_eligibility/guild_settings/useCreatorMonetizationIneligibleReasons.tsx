// Module ID: 18186
// Function ID: 18187
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [18158, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 18186 (useCreatorMonetizationIneligibleReasons)
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 18158 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = useCreatorMonetizationEligibilityItemsDefault(eligibility);
  let flatMapResult;
  if (obj != null) {
    flatMapResult = obj.flatMap((checked) => {
      if (checked.checked) {
        let items = [];
      } else {
        items = [checked.key];
      }
      return items;
    });
  }
  if (flatMapResult == null) {
    flatMapResult = null;
  }
  return flatMapResult;
};
