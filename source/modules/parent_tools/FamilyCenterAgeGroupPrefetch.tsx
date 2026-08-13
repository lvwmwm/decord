// Module ID: 14738
// Function ID: 14739
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [7044, 7046, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14738 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(7046).initialPageLoad();
        const obj2 = importDefault(7046);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
