// Module ID: 10297
// Function ID: 10298
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [5054, 10298, 1999, 2]
// Exports: default

// Module 10297 (openFavoritesGuildLimitUpsell)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequire(10298, dependencyMap.paths), FavoritesGuildUpsellSheet, obj2);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
