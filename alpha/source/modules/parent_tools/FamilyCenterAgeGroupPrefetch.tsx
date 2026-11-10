// Module ID: 17828
// Function ID: 17829
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7794, 7796, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17828 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7796 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7794 */;
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
