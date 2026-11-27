// Module ID: 17107
// Function ID: 17108
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8213, 8215, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17107 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8215 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8213 */;
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
