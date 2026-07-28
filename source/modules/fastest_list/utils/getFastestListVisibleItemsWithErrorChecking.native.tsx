// Module ID: 9230
// Function ID: 72194
// Name: getFastestListVisibleItemsWithErrorChecking
// Dependencies: [9221, 2]
// Exports: default

// Module 9230 (getFastestListVisibleItemsWithErrorChecking)
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  if (tmp) {
    let obj = require(9221) /* logFastestListError */;
    obj = { listId, sections, visibleItems: sectionStart };
    obj.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj);
  }
  if (tmp5) {
    obj = { listId, sections, visibleItems: sectionStart };
    require(9221) /* logFastestListError */.logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj);
    const obj3 = require(9221) /* logFastestListError */;
  }
  return sectionStart;
};
