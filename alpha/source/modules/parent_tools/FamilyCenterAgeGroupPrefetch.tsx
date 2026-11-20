// Module ID: 16771
// Function ID: 16772
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8215, 8217, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16771 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8217 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;
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
