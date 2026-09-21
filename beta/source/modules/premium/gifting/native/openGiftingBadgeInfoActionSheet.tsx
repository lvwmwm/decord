// Module ID: 11044
// Function ID: 11045
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4725, 11045, 1984, 2]
// Exports: default

// Module 11044 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11045, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
