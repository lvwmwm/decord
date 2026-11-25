// Module ID: 20000
// Function ID: 20001
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [19949, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 20000 (useCreatorMonetizationIneligibleReasons)
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 19949 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = useCreatorMonetizationEligibilityItemsDefault(eligibility);
  let flatMapResult;
  if (obj != null) {
    flatMapResult = obj.flatMap((checked) => {
      let items;
      if (checked.checked) {
        items = [];
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
}
