// Module ID: 16606
// Function ID: 16607
// Name: openTinyBroncoPromoSheet
// Dependencies: [5258, 16607, 1994, 2]
// Exports: default

// Module 16606 (openTinyBroncoPromoSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/tiny_bronco/native/openTinyBroncoPromoSheet.tsx");
const TINY_BRONCO_PROMO_SHEET_KEY_export = "TINY_BRONCO_PROMO_SHEET_KEY";

export default function openTinyBroncoPromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16607, dependencyMap.paths), TINY_BRONCO_PROMO_SHEET_KEY, arg0);
};
export { TINY_BRONCO_PROMO_SHEET_KEY_export as TINY_BRONCO_PROMO_SHEET_KEY };
