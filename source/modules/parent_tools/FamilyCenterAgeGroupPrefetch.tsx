// Module ID: 14752
// Function ID: 14753
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [7066, 7068, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14752 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(7068).initialPageLoad();
        const obj2 = importDefault(7068);
      }
    }
    obj = freshTeenActivityWithMap;
  }
};
