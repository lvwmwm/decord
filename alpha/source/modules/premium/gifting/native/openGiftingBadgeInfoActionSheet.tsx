// Module ID: 9360
// Function ID: 9361
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5006, 9361, 2121, 2]
// Exports: default

// Module 9360 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9361, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
