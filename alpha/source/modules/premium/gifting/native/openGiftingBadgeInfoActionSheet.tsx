// Module ID: 11676
// Function ID: 11677
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5552, 11677, 2121, 2]
// Exports: default

// Module 11676 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11677, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
