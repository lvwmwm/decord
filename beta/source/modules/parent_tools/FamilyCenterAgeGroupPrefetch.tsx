// Module ID: 16902
// Function ID: 16903
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8335, 8337, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16902 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8337 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
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
