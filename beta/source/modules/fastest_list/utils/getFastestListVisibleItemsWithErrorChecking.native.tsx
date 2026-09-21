// Module ID: 7316
// Function ID: 7317
// Name: getFastestListVisibleItemsWithErrorChecking
// Dependencies: [7306, 2]
// Exports: default

// Module 7316 (getFastestListVisibleItemsWithErrorChecking)
import FastestListLogger from "FastestListLogger" /* 7306 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  if (tmp) {
    const obj2 = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj2);
  }
  if (tmp5) {
    const obj4 = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj4);
  }
  return sectionStart;
};
