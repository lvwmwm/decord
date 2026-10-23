// Module ID: 16806
// Function ID: 16807
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7643, 7645, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16806 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7645 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7643 */;
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
