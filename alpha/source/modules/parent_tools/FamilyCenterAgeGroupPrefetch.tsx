// Module ID: 16671
// Function ID: 16672
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7622, 7624, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16671 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7624 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7622 */;
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
