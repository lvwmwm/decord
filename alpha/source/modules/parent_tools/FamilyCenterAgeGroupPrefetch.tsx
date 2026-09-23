// Module ID: 15826
// Function ID: 15827
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7865, 7867, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15826 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7867 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7865 */;

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
