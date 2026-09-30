// Module ID: 15244
// Function ID: 15245
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7153, 7155, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15244 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7155 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7153 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroup = function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!obj.isLoading()) {
      if (obj.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
  }
};
