// Module ID: 15760
// Function ID: 15761
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7779, 7781, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15760 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7781 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7779 */;

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
