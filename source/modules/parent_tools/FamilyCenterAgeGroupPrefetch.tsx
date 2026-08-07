// Module ID: 14598
// Function ID: 14599
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6936, 6938, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14598 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(6938).initialPageLoad();
        const obj2 = importDefault(6938);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
