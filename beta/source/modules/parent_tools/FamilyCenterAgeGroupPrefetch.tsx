// Module ID: 15024
// Function ID: 15025
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [6961, 6963, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15024 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6963 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroup = function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!FamilyCenterStore.isLoading()) {
      if (FamilyCenterStore.canRefetch()) {
        const obj2 = FamilyCenterActionCreatorsDefault;
        obj2.initialPageLoad();
      }
    }
  }
};
