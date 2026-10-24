// Module ID: 16838
// Function ID: 16839
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7645, 7647, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16838 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7647 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7645 */;
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
