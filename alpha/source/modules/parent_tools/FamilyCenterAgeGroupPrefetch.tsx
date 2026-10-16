// Module ID: 16465
// Function ID: 16466
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7477, 7479, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16465 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7479 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7477 */;
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
