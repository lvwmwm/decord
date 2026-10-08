// Module ID: 15147
// Function ID: 15148
// Name: openBountiesNuxPromoSheet
// Dependencies: [5054, 15148, 1999, 2]
// Exports: default

// Module 15147 (openBountiesNuxPromoSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15148, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
