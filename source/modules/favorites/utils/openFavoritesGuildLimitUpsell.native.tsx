// Module ID: 9719
// Function ID: 9720
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4271, 9720, 2007, 2]
// Exports: default

// Module 9719 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4271);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(2007) /* asyncRequireImpl */(9720, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
