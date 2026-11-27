// Module ID: 11155
// Function ID: 11156
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5257, 11156, 2120, 2]
// Exports: default

// Module 11155 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11156, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
