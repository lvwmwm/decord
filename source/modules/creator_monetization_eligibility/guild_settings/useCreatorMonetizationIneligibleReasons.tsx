// Module ID: 16468
// Function ID: 128416
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [16440, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 16468 (useCreatorMonetizationIneligibleReasons)
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  let flatMapResult;
  const obj = importDefault(16440)(eligibility);
  if (null != obj) {
    flatMapResult = obj.flatMap((checked) => {
      if (checked.checked) {
        let items = [];
      } else {
        items = [checked.key];
      }
      return items;
    });
  }
  let tmp2 = null;
  if (null != flatMapResult) {
    tmp2 = flatMapResult;
  }
  return tmp2;
};
