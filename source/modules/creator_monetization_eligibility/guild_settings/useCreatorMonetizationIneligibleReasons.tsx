// Module ID: 16676
// Function ID: 16677
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [16648, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 16676 (useCreatorMonetizationIneligibleReasons)
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = importDefault(16648)(eligibility);
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
