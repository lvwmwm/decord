// Module ID: 14111
// Function ID: 14112
// Name: openBountiesNuxPromoSheet
// Dependencies: [4161, 14112, 1959, 2]
// Exports: default

// Module 14111 (openBountiesNuxPromoSheet)
const BountiesNuxPromoSheet = "BountiesNuxPromoSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(14112, dependencyMap.paths), BountiesNuxPromoSheet, {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
