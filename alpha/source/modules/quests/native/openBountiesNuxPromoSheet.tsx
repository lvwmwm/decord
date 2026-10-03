// Module ID: 14865
// Function ID: 14866
// Name: openBountiesNuxPromoSheet
// Dependencies: [4854, 14866, 1987, 2]
// Exports: default

// Module 14865 (openBountiesNuxPromoSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14866, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
