// Module ID: 16954
// Function ID: 16955
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8247, 8249, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16954 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8249 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!FamilyCenterStore.isLoading()) {
      if (FamilyCenterStore.canRefetch()) {
        const obj2 = FamilyCenterActionCreatorsDefault;
        obj2.initialPageLoad();
      }
    }
  }
}
