// Module ID: 18152
// Function ID: 18153
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8751, 8753, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 18152 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8753 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8751 */;
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
