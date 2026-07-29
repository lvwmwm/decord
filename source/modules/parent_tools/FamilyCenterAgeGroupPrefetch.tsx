// Module ID: 14444
// Function ID: 14445
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [5793, 5795, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14444 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(5795).initialPageLoad();
        const obj2 = importDefault(5795);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
