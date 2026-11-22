// Module ID: 19989
// Function ID: 19990
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [19938, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 19989 (useCreatorMonetizationIneligibleReasons)
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 19938 */;
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
