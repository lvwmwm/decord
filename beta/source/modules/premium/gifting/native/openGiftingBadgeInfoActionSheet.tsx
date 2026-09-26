// Module ID: 11043
// Function ID: 11044
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4755, 11044, 1980, 2]
// Exports: default

// Module 11043 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11044, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
