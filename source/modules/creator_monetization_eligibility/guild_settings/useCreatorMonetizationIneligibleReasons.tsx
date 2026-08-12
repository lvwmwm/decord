// Module ID: 16872
// Function ID: 16873
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [16844, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 16872 (useCreatorMonetizationIneligibleReasons)
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  const obj = importDefault(16844)(eligibility);
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
