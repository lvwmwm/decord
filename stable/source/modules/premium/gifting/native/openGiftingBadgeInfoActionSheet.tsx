// Module ID: 10404
// Function ID: 10405
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5155, 10405, 2002, 2]
// Exports: default

// Module 10404 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10405, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
