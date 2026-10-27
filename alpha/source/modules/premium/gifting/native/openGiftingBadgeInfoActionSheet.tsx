// Module ID: 10503
// Function ID: 10504
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5211, 10504, 1999, 2]
// Exports: default

// Module 10503 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10504, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
