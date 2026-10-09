// Module ID: 15699
// Function ID: 15700
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7252, 7254, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15699 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7254 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
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
