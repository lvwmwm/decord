// Module ID: 10575
// Function ID: 10576
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4796, 10576, 1980, 2]
// Exports: default

// Module 10575 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10576, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit, variant: "limit_reached", source: "limit_reached" });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
