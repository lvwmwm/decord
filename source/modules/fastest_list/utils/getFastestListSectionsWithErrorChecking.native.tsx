// Module ID: 9241
// Function ID: 72252
// Name: getFastestListSectionsWithErrorChecking
// Dependencies: []
// Exports: default

// Module 9241 (getFastestListSectionsWithErrorChecking)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx");

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    let obj = require(dependencyMap[0]);
    obj = { itemSizesLength: itemSizes.itemSizes.length, itemKeysLength: itemSizes.itemKeys.length, listId: itemSizes.listId, detail: "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration." };
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj);
  }
  return itemSizes;
};
