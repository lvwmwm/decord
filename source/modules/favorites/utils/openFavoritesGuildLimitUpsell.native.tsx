// Module ID: 9649
// Function ID: 9650
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4270, 9650, 1988, 2]
// Exports: default

// Module 9649 (openFavoritesGuildLimitUpsell)
const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = importDefault(4270);
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(require(1988) /* asyncRequireImpl */(9650, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
