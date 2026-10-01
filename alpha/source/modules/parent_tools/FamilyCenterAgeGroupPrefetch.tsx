// Module ID: 15249
// Function ID: 15250
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7145, 7147, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15249 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7147 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7145 */;

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
