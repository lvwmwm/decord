// Module ID: 14670
// Function ID: 14671
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6996, 6998, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14670 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(6998).initialPageLoad();
        const obj2 = importDefault(6998);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
