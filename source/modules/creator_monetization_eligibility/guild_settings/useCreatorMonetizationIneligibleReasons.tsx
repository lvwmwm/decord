// Module ID: 16874
// Function ID: 16875
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [16846, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 16874 (useCreatorMonetizationIneligibleReasons)
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = importDefault(16846)(eligibility);
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
