// Module ID: 11108
// Function ID: 11109
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5226, 11109, 2119, 2]
// Exports: default

// Module 11108 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11109, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
