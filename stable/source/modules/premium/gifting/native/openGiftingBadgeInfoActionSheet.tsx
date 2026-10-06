// Module ID: 10250
// Function ID: 10251
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4801, 10251, 1987, 2]
// Exports: default

// Module 10250 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10251, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
