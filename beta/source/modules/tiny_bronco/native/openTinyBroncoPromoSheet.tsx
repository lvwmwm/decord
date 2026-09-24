// Module ID: 15019
// Function ID: 15020
// Name: openTinyBroncoPromoSheet
// Dependencies: [4757, 15020, 1984, 2]
// Exports: default

// Module 15019 (openTinyBroncoPromoSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/tiny_bronco/native/openTinyBroncoPromoSheet.tsx");

export default function openTinyBroncoPromoSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15020, dependencyMap.paths), TINY_BRONCO_PROMO_SHEET_KEY, arg0);
};
export const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
