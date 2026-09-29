// Module ID: 15763
// Function ID: 15764
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7811, 7813, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15763 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7813 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7811 */;

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
