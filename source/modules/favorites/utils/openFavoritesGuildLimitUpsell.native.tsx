// Module ID: 9633
// Function ID: 9634
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4253, 9634, 1988, 2]
// Exports: default

// Module 9633 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4253);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9634, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
