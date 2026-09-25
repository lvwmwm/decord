// Module ID: 15010
// Function ID: 15011
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [6952, 6954, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15010 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6954 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6952 */;

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
