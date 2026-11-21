// Module ID: 9480
// Function ID: 9481
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5127, 9481, 2119, 2]
// Exports: default

// Module 9480 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9481, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
