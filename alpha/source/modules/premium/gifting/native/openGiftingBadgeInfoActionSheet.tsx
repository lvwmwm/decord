// Module ID: 10594
// Function ID: 10595
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5253, 10595, 1995, 2]
// Exports: default

// Module 10594 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10595, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
