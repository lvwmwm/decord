// Module ID: 10743
// Function ID: 10744
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5376, 10744, 2118, 2]
// Exports: default

// Module 10743 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10744, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
