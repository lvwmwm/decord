// Module ID: 11609
// Function ID: 11610
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5489, 11610, 2118, 2]
// Exports: default

// Module 11609 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11610, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
