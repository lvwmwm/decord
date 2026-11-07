// Module ID: 17790
// Function ID: 17791
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7791, 7793, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17790 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7793 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7791 */;
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
