// Module ID: 15324
// Function ID: 15325
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7061, 7063, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15324 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7063 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;
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
