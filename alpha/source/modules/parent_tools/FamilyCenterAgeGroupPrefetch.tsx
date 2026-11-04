// Module ID: 17725
// Function ID: 17726
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7855, 7857, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17725 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7857 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
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
