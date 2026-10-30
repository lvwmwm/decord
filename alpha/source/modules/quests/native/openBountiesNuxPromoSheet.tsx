// Module ID: 16913
// Function ID: 16914
// Name: openBountiesNuxPromoSheet
// Dependencies: [5253, 16914, 1995, 2]
// Exports: default

// Module 16913 (openBountiesNuxPromoSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = size.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16914, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
