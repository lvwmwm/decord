// Module ID: 14194
// Function ID: 107429
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: []
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14194 (prefetchFamilyCenterAgeGroupWhen)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == closure_2.getAgeGroup();
  }
  if (tmp) {
    if (!closure_2.isLoading()) {
      if (closure_2.canRefetch()) {
        importDefault(dependencyMap[1]).initialPageLoad();
        const obj = importDefault(dependencyMap[1]);
      }
    }
  }
};
