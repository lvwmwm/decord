// Module ID: 9758
// Function ID: 9759
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4312, 9759, 2007, 2]
// Exports: default

// Module 9758 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4312);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9759, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
