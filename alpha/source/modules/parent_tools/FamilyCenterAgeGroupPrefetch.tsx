// Module ID: 16947
// Function ID: 16948
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8216, 8218, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16947 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8218 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8216 */;
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
