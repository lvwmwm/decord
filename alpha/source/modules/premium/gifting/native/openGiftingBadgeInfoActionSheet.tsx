// Module ID: 10089
// Function ID: 10090
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5054, 10090, 1999, 2]
// Exports: default

// Module 10089 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10090, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
