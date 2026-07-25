// Module ID: 14377
// Function ID: 110078
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [5765, 5767, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14377 (prefetchFamilyCenterAgeGroupWhen)
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
        importDefault(5767).initialPageLoad();
        const obj = importDefault(5767);
      }
    }
  }
};
