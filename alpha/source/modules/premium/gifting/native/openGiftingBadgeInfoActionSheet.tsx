// Module ID: 10568
// Function ID: 10569
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5247, 10569, 2000, 2]
// Exports: default

// Module 10568 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10569, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
