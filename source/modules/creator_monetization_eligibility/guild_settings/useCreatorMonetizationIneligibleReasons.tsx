// Module ID: 17061
// Function ID: 17062
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [17033, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 17061 (useCreatorMonetizationIneligibleReasons)
import set from "set" /* 2 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 17033 */;

const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

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
