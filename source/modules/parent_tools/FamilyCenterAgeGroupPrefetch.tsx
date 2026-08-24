// Module ID: 14856
// Function ID: 14857
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [5301, 5303, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 14856 (prefetchFamilyCenterAgeGroupWhen)
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 5303 */;
import closure_2 from "freshTeenActivityWithMap" /* 5301 */;

const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == closure_2.getAgeGroup();
  }
  if (tmp) {
    if (!closure_2.isLoading()) {
      if (obj.canRefetch()) {
        maybeFetchCollectiblesForInvoicesDefault.initialPageLoad();
        const obj2 = maybeFetchCollectiblesForInvoicesDefault;
      }
    }
    obj = closure_2;
  }
};
