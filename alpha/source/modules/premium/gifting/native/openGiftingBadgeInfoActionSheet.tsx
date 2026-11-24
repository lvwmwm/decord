// Module ID: 11009
// Function ID: 11010
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5131, 11010, 2119, 2]
// Exports: default

// Module 11009 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11010, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
