// Module ID: 9289
// Function ID: 72538
// Name: getFastestListSectionsWithErrorChecking
// Dependencies: [9284, 2]
// Exports: default

// Module 9289 (getFastestListSectionsWithErrorChecking)
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx");

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    let obj = require(9284) /* logFastestListError */;
    obj = { itemSizesLength: itemSizes.itemSizes.length, itemKeysLength: itemSizes.itemKeys.length, listId: itemSizes.listId, detail: "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration." };
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj);
  }
  return itemSizes;
};
