// Module ID: 11080
// Function ID: 11081
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4757, 11081, 1984, 2]
// Exports: default

// Module 11080 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11081, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
