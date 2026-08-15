// Module ID: 9982
// Function ID: 9983
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4342, 9983, 2007, 2]
// Exports: default

// Module 9982 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4342);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9983, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
