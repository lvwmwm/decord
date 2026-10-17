// Module ID: 16543
// Function ID: 16544
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7525, 7527, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16543 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7527 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7525 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroup = function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!FamilyCenterStore.isLoading()) {
      if (FamilyCenterStore.canRefetch()) {
        const obj2 = FamilyCenterActionCreatorsDefault;
        obj2.initialPageLoad();
      }
    }
  }
};
