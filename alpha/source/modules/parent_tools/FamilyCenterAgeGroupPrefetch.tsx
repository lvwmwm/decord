// Module ID: 15761
// Function ID: 15762
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7258, 7260, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15761 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7260 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
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
