// Module ID: 17353
// Function ID: 17354
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7703, 7705, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17353 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7705 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7703 */;
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
