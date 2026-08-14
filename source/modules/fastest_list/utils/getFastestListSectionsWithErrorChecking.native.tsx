// Module ID: 8607
// Function ID: 8608
// Name: getFastestListSectionsWithErrorChecking
// Dependencies: [8601, 2]
// Exports: default

// Module 8607 (getFastestListSectionsWithErrorChecking)
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx");

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    let obj = require(8601) /* logFastestListError */;
    obj = { itemSizesLength: null, itemKeysLength: null, listId: null, detail: "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration." };
    obj[0] = itemSizes.itemSizes.length;
    obj[1] = itemSizes.itemKeys.length;
    obj[2] = itemSizes.listId;
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj);
  }
  return itemSizes;
};
