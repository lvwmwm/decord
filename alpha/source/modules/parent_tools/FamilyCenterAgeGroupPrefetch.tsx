// Module ID: 18109
// Function ID: 18110
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [8740, 8742, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 18109 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8742 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8740 */;
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
