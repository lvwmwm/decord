// Module ID: 16520
// Function ID: 128624
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: [16492, 2]
// Exports: useCreatorMonetizationIneligibleReasons

// Module 16520 (useCreatorMonetizationIneligibleReasons)
const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  let flatMapResult;
  const obj = importDefault(16492)(eligibility);
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
