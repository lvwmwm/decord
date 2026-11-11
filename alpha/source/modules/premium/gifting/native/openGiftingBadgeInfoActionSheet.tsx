// Module ID: 11615
// Function ID: 11616
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5489, 11616, 2118, 2]
// Exports: default

// Module 11615 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11616, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
