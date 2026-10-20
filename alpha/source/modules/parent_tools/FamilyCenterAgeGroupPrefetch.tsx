// Module ID: 16576
// Function ID: 16577
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7591, 7593, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16576 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7593 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7591 */;
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
