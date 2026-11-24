// Module ID: 16928
// Function ID: 16929
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8071, 8073, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16928 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8073 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8071 */;
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
