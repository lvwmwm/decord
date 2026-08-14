// Module ID: 9773
// Function ID: 9774
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4310, 9774, 2007, 2]
// Exports: default

// Module 9773 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4310);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9774, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
