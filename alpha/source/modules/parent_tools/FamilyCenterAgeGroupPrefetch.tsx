// Module ID: 16595
// Function ID: 16596
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7594, 7596, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16595 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7596 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7594 */;
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
