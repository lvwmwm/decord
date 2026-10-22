// Module ID: 10477
// Function ID: 10478
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5196, 10478, 2002, 2]
// Exports: default

// Module 10477 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10478, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
