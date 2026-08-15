// Module ID: 14792
// Function ID: 14793
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [5296, 5298, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14792 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(5298).initialPageLoad();
        const obj2 = importDefault(5298);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
