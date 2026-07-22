// Module ID: 13849
// Function ID: 104660
// Name: openBountiesNuxPromoSheet
// Dependencies: []
// Exports: default

// Module 13849 (openBountiesNuxPromoSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/quests/native/openBountiesNuxPromoSheet.tsx");

export default function openBountiesNuxPromoSheet() {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "BountiesNuxPromoSheet", {});
};
export const PROMO_SHEET_KEY = "BountiesNuxPromoSheet";
