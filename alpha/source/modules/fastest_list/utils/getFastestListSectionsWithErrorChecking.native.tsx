// Module ID: 7398
// Function ID: 7399
// Name: getFastestListSectionsWithErrorChecking
// Dependencies: [7392, 2]
// Exports: default

// Module 7398 (getFastestListSectionsWithErrorChecking)
import FastestListLogger from "FastestListLogger" /* 7392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx");

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  if (tmp) {
    const obj2 = { itemSizesLength: itemSizes.itemSizes.length, itemKeysLength: itemSizes.itemKeys.length, listId: itemSizes.listId, detail: "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration." };
    FastestListLogger.logFastestListError("Non-uniform configuration with large data set detected.", obj2);
  }
  return itemSizes;
};
