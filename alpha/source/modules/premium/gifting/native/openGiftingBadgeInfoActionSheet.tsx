// Module ID: 10535
// Function ID: 10536
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5246, 10536, 1999, 2]
// Exports: default

// Module 10535 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10536, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
