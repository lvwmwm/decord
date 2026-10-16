// Module ID: 16479
// Function ID: 16480
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7479, 7481, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16479 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7481 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7479 */;
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
