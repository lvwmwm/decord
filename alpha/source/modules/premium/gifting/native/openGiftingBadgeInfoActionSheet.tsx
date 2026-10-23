// Module ID: 10499
// Function ID: 10500
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5208, 10500, 2002, 2]
// Exports: default

// Module 10499 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10500, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
