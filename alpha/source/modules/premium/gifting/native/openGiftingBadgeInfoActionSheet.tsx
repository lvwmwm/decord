// Module ID: 10793
// Function ID: 10794
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5382, 10794, 2123, 2]
// Exports: default

// Module 10793 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10794, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
