// Module ID: 10734
// Function ID: 10735
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5374, 10735, 2118, 2]
// Exports: default

// Module 10734 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10735, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
