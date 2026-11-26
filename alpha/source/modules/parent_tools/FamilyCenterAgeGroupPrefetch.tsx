// Module ID: 17100
// Function ID: 17101
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8212, 8214, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17100 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8214 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;
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
