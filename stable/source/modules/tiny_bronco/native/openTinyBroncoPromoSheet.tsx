// Module ID: 14266
// Function ID: 14267
// Name: openTinyBroncoPromoSheet
// Dependencies: [4801, 14267, 1987, 2]
// Exports: default

// Module 14266 (openTinyBroncoPromoSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/tiny_bronco/native/openTinyBroncoPromoSheet.tsx");
const TINY_BRONCO_PROMO_SHEET_KEY_export = "TINY_BRONCO_PROMO_SHEET_KEY";

export default function openTinyBroncoPromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14267, dependencyMap.paths), TINY_BRONCO_PROMO_SHEET_KEY, arg0);
};
export { TINY_BRONCO_PROMO_SHEET_KEY_export as TINY_BRONCO_PROMO_SHEET_KEY };
