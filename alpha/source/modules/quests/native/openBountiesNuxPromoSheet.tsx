// Module ID: 15992
// Function ID: 15993
// Name: openBountiesNuxPromoSheet
// Dependencies: [5115, 15993, 2000, 2]
// Exports: default

// Module 15992 (openBountiesNuxPromoSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15993, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
