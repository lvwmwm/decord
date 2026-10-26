// Module ID: 10500
// Function ID: 10501
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5210, 10501, 2002, 2]
// Exports: default

// Module 10500 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10501, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
