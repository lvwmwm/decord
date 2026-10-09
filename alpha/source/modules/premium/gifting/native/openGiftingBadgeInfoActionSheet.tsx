// Module ID: 10074
// Function ID: 10075
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5055, 10075, 2000, 2]
// Exports: default

// Module 10074 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10075, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
