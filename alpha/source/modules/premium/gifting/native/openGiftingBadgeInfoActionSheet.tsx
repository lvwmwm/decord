// Module ID: 10114
// Function ID: 10115
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5060, 10115, 2000, 2]
// Exports: default

// Module 10114 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10115, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
