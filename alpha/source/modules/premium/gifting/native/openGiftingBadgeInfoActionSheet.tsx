// Module ID: 10792
// Function ID: 10793
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5382, 10793, 2123, 2]
// Exports: default

// Module 10792 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10793, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
