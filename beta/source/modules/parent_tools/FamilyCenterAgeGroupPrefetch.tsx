// Module ID: 17480
// Function ID: 17481
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7715, 7717, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17480 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7717 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7715 */;
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
