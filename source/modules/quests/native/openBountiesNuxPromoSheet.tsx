// Module ID: 15065
// Function ID: 15066
// Name: openBountiesNuxPromoSheet
// Dependencies: [4527, 15066, 1896, 2]
// Exports: default

// Module 15065 (openBountiesNuxPromoSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = set.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15066, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
