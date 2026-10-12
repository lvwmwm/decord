// Module ID: 15784
// Function ID: 15785
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7259, 7261, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15784 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7261 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7259 */;
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
