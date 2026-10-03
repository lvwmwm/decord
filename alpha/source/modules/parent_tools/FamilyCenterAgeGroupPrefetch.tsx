// Module ID: 15305
// Function ID: 15306
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7048, 7050, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15305 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7050 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
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
