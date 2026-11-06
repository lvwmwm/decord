// Module ID: 17741
// Function ID: 17742
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7814, 7816, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17741 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7816 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7814 */;
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
