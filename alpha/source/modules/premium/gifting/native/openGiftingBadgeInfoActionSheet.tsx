// Module ID: 9382
// Function ID: 9383
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5037, 9383, 2121, 2]
// Exports: default

// Module 9382 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9383, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
