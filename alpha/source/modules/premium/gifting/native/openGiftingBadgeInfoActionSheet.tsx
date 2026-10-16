// Module ID: 10344
// Function ID: 10345
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5118, 10345, 2002, 2]
// Exports: default

// Module 10344 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10345, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
