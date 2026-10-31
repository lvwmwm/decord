// Module ID: 10614
// Function ID: 10615
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5258, 10615, 1994, 2]
// Exports: default

// Module 10614 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10615, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
