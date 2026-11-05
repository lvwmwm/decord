// Module ID: 17752
// Function ID: 17753
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7860, 7862, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17752 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7862 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7860 */;
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
