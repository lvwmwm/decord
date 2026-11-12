// Module ID: 17839
// Function ID: 17840
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7824, 7826, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17839 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7826 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
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
