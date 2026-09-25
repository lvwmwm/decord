// Module ID: 10200
// Function ID: 10201
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4796, 10201, 1980, 2]
// Exports: default

// Module 10200 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10201, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
