// Module ID: 15772
// Function ID: 15773
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7782, 7784, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15772 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7784 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7782 */;

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
