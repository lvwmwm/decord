// Module ID: 15586
// Function ID: 15587
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7247, 7249, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15586 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7249 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;
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
