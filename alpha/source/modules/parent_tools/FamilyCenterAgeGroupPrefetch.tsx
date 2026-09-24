// Module ID: 15840
// Function ID: 15841
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7867, 7869, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15840 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7869 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7867 */;

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
