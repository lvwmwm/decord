// Module ID: 10405
// Function ID: 10406
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4809, 10406, 1981, 2]
// Exports: default

// Module 10405 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10406, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
