// Module ID: 15759
// Function ID: 15760
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7816, 7818, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15759 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7818 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroup = function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!obj.isLoading()) {
      if (obj.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
  }
};
