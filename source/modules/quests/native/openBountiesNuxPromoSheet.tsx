// Module ID: 14893
// Function ID: 14894
// Name: openBountiesNuxPromoSheet
// Dependencies: [4445, 14894, 2008, 2]
// Exports: default

// Module 14893 (openBountiesNuxPromoSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = set.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14894, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
