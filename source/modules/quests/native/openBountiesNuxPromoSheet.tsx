// Module ID: 14516
// Function ID: 14517
// Name: openBountiesNuxPromoSheet
// Dependencies: [4347, 14517, 2009, 2]
// Exports: default

// Module 14516 (openBountiesNuxPromoSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = set.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14517, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
