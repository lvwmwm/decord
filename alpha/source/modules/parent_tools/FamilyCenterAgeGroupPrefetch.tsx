// Module ID: 17407
// Function ID: 17408
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7708, 7710, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17407 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7710 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
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
