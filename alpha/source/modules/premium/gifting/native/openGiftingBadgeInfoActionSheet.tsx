// Module ID: 11013
// Function ID: 11014
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4724, 11014, 1980, 2]
// Exports: default

// Module 11013 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11014, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
