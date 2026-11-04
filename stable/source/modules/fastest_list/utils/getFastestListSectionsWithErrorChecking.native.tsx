// Module ID: 7192
// Function ID: 7193
// Name: getFastestListSectionsWithErrorChecking
// Dependencies: [7186, 2]
// Exports: default

// Module 7192 (getFastestListSectionsWithErrorChecking)
import FastestListLogger from "FastestListLogger" /* 7186 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx");

export default function getFastestListSectionsWithErrorChecking(itemSizes) {
  const tmp = itemSizes.itemSizes.length > 1000 || itemSizes.itemKeys.length > 1000;
  if (tmp) {
    const obj2 = { itemSizesLength: itemSizes.itemSizes.length, itemKeysLength: itemSizes.itemKeys.length, listId: itemSizes.listId, detail: "Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration." };
    const obj = FastestListLogger;
    obj.logFastestListError("Non-uniform configuration with large data set detected.", obj2);
  }
  return itemSizes;
};
