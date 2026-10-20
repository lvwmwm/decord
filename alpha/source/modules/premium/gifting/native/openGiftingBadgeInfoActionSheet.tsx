// Module ID: 10418
// Function ID: 10419
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5171, 10419, 2002, 2]
// Exports: default

// Module 10418 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10419, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
