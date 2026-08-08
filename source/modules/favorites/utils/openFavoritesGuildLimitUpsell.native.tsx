// Module ID: 9714
// Function ID: 9715
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4271, 9715, 1988, 2]
// Exports: default

// Module 9714 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4271);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9715, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
