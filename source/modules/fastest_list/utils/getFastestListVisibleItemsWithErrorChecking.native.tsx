// Module ID: 9250
// Function ID: 72305
// Name: getFastestListVisibleItemsWithErrorChecking
// Dependencies: []
// Exports: default

// Module 9250 (getFastestListVisibleItemsWithErrorChecking)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  if (tmp) {
    let obj = require(dependencyMap[0]);
    obj = { listId, sections, visibleItems: sectionStart };
    obj.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj);
  }
  if (tmp5) {
    obj = { listId, sections, visibleItems: sectionStart };
    require(dependencyMap[0]).logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj);
    const obj3 = require(dependencyMap[0]);
  }
  return sectionStart;
};
