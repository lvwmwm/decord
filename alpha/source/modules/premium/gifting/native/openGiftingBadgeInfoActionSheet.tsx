// Module ID: 11154
// Function ID: 11155
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5257, 11155, 2120, 2]
// Exports: default

// Module 11154 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11155, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
