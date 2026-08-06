// Module ID: 14582
// Function ID: 14583
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6917, 6919, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14582 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(6919).initialPageLoad();
        const obj2 = importDefault(6919);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
