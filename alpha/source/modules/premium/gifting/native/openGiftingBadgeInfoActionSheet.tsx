// Module ID: 10101
// Function ID: 10102
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5546, 10102, 2121, 2]
// Exports: default

// Module 10101 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10102, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
