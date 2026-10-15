// Module ID: 16432
// Function ID: 16433
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7475, 7477, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16432 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7477 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7475 */;
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
