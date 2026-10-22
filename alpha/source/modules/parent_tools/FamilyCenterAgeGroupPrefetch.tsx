// Module ID: 16762
// Function ID: 16763
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7630, 7632, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16762 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7632 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7630 */;
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
