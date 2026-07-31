// Module ID: 14463
// Function ID: 14464
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [5798, 5800, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14463 (prefetchFamilyCenterAgeGroupWhen)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == freshTeenActivityWithMap.getAgeGroup();
  }
  if (tmp) {
    if (!freshTeenActivityWithMap.isLoading()) {
      if (obj.canRefetch()) {
        importDefault(5800).initialPageLoad();
        const obj2 = importDefault(5800);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
