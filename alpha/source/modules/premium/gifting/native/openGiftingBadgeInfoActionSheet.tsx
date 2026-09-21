// Module ID: 11007
// Function ID: 11008
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4723, 11008, 1980, 2]
// Exports: default

// Module 11007 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11008, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
