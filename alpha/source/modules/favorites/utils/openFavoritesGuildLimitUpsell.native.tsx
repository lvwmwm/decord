// Module ID: 10843
// Function ID: 10844
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [5208, 10844, 2002, 2]
// Exports: default

// Module 10843 (openFavoritesGuildLimitUpsell)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { limit };
  obj.openLazy(asyncRequire(10844, dependencyMap.paths), FavoritesGuildUpsellSheet, obj2);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
