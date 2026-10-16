// Module ID: 15789
// Function ID: 15790
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7254, 7256, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15789 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7256 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7254 */;
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
