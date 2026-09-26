// Module ID: 10524
// Function ID: 10525
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4755, 10525, 1980, 2]
// Exports: default

// Module 10524 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10525, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit, variant: "limit_reached", source: "limit_reached" });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
