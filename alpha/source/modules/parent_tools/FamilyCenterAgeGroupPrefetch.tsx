// Module ID: 17623
// Function ID: 17624
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7839, 7841, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17623 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7841 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7839 */;
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
