// Module ID: 16293
// Function ID: 125750
// Name: useCreatorMonetizationIneligibleReasons
// Dependencies: []
// Exports: useCreatorMonetizationIneligibleReasons

// Module 16293 (useCreatorMonetizationIneligibleReasons)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx");

export const useCreatorMonetizationIneligibleReasons = function useCreatorMonetizationIneligibleReasons(eligibility) {
  let flatMapResult;
  const obj = importDefault(dependencyMap[0])(eligibility);
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
