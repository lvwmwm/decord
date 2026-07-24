// Module ID: 14366
// Function ID: 109951
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [6769, 6771, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14366 (prefetchFamilyCenterAgeGroupWhen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == _isNativeReflectConstruct.getAgeGroup();
  }
  if (tmp) {
    if (!_isNativeReflectConstruct.isLoading()) {
      if (_isNativeReflectConstruct.canRefetch()) {
        importDefault(6771).initialPageLoad();
        const obj = importDefault(6771);
      }
    }
  }
};
