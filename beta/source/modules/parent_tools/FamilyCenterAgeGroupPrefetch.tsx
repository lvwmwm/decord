// Module ID: 15749
// Function ID: 15750
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7784, 7786, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15749 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7786 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7784 */;

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
