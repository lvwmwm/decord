// Module ID: 8546
// Function ID: 8547
// Name: getFastestListVisibleItemsWithErrorChecking
// Dependencies: [8536, 2]
// Exports: default

// Module 8546 (getFastestListVisibleItemsWithErrorChecking)
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(arg0, sectionStart) {
  if (tmp) {
    let obj = require(8536) /* logFastestListError */;
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
    require(8536) /* logFastestListError */.logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj);
    const obj3 = require(8536) /* logFastestListError */;
  }
  return sectionStart;
};
