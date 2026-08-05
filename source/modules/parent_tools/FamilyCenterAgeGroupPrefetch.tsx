// Module ID: 14544
// Function ID: 14545
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6890, 6892, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14544 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(6892).initialPageLoad();
        const obj2 = importDefault(6892);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
