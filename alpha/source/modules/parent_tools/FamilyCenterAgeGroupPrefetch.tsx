// Module ID: 15211
// Function ID: 15212
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7123, 7125, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15211 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7125 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7123 */;

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
