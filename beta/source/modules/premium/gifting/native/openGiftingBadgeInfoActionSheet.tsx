// Module ID: 10532
// Function ID: 10533
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [5242, 10533, 2002, 2]
// Exports: default

// Module 10532 (openGiftingBadgeInfoActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10533, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
