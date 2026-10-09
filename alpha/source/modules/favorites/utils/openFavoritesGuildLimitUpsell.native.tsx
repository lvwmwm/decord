// Module ID: 10282
// Function ID: 10283
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [5055, 10283, 2000, 2]
// Exports: default

// Module 10282 (openFavoritesGuildLimitUpsell)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequire(10283, dependencyMap.paths), FavoritesGuildUpsellSheet, obj2);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
