// Module ID: 10039
// Function ID: 10040
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4854, 10040, 1987, 2]
// Exports: default

// Module 10039 (openFavoritesGuildLimitUpsell)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequire(10040, dependencyMap.paths), FavoritesGuildUpsellSheet, obj2);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
