// Module ID: 14914
// Function ID: 14915
// Name: openTinyBroncoPromoSheet
// Dependencies: [5055, 14915, 2000, 2]
// Exports: default

// Module 14914 (openTinyBroncoPromoSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/tiny_bronco/native/openTinyBroncoPromoSheet.tsx");
const TINY_BRONCO_PROMO_SHEET_KEY_export = "TINY_BRONCO_PROMO_SHEET_KEY";

export default function openTinyBroncoPromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14915, dependencyMap.paths), TINY_BRONCO_PROMO_SHEET_KEY, arg0);
};
export { TINY_BRONCO_PROMO_SHEET_KEY_export as TINY_BRONCO_PROMO_SHEET_KEY };
