// Module ID: 15683
// Function ID: 15684
// Name: openTinyBroncoPromoSheet
// Dependencies: [5118, 15684, 2002, 2]
// Exports: default

// Module 15683 (openTinyBroncoPromoSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_PROMO_SHEET_KEY = "TINY_BRONCO_PROMO_SHEET_KEY";
const result = size.fileFinishedImporting("modules/tiny_bronco/native/openTinyBroncoPromoSheet.tsx");
const TINY_BRONCO_PROMO_SHEET_KEY_export = "TINY_BRONCO_PROMO_SHEET_KEY";

export default function openTinyBroncoPromoSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15684, dependencyMap.paths), TINY_BRONCO_PROMO_SHEET_KEY, arg0);
};
export { TINY_BRONCO_PROMO_SHEET_KEY_export as TINY_BRONCO_PROMO_SHEET_KEY };
