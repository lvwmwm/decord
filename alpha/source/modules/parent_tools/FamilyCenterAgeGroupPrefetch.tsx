// Module ID: 16136
// Function ID: 16137
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7265, 7267, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16136 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7267 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7265 */;
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
