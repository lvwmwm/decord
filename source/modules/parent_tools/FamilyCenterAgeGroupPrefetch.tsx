// Module ID: 14530
// Function ID: 14531
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6893, 6895, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14530 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(6895).initialPageLoad();
        const obj2 = importDefault(6895);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
