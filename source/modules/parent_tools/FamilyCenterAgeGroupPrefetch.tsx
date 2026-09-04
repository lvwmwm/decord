// Module ID: 15408
// Function ID: 15409
// Name: prefetchFamilyCenterAgeGroupWhen
// Dependencies: [7470, 7472, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 15408 (prefetchFamilyCenterAgeGroupWhen)
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 7472 */;
import closure_2 from "freshTeenActivityWithMap" /* 7470 */;

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
