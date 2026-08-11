// Module ID: 14680
// Function ID: 14681
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6999, 7001, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14680 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(7001).initialPageLoad();
        const obj2 = importDefault(7001);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
