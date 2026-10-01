// Module ID: 9688
// Function ID: 9689
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4800, 9689, 1981, 2]
// Exports: default

// Module 9688 (openFavoritesGuildLimitUpsell)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequire(9689, dependencyMap.paths), FavoritesGuildUpsellSheet, obj2);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
