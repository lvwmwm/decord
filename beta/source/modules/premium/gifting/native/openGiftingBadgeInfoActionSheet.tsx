// Module ID: 10105
// Function ID: 10106
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5056, 10106, 2000, 2]
// Exports: default

// Module 10105 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10106, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
