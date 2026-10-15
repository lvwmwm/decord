// Module ID: 10327
// Function ID: 10328
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5115, 10328, 2000, 2]
// Exports: default

// Module 10327 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10328, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
