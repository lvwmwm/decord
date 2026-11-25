// Module ID: 17049
// Function ID: 17050
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8170, 8172, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17049 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8172 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8170 */;
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
