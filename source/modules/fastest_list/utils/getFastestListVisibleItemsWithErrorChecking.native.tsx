// Module ID: 7009
// Function ID: 7010
// Name: getFastestListVisibleItemsWithErrorChecking
// Dependencies: [6999, 2]
// Exports: default

// Module 7009 (getFastestListVisibleItemsWithErrorChecking)
import set from "set" /* 2 */;
import logFastestListError from "logFastestListError" /* 6999 */;

const result = set.fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(arg0, sectionStart) {
  if (tmp) {
    let obj = logFastestListError;
    obj = { listId: null, sections: null, visibleItems: null };
    obj[0] = arg0;
    obj[1] = arg2;
    obj[2] = sectionStart;
    obj.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj);
  }
  if (tmp5) {
    obj = { listId: null, sections: null, visibleItems: null };
    obj[0] = arg0;
    obj[1] = arg2;
    obj[2] = sectionStart;
    logFastestListError.logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj);
    const obj3 = logFastestListError;
  }
  return sectionStart;
};
