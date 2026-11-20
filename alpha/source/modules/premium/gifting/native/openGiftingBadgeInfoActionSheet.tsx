// Module ID: 9360
// Function ID: 9361
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5008, 9361, 2119, 2]
// Exports: default

// Module 9360 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9361, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
