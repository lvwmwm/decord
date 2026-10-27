// Module ID: 16885
// Function ID: 16886
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7646, 7648, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 16885 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7648 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7646 */;
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
