// Module ID: 17114
// Function ID: 17115
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7680, 7682, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 17114 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7682 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7680 */;
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
