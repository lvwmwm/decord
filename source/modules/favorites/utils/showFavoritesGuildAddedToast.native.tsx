// Module ID: 9709
// Function ID: 9710
// Name: showFavoritesGuildAddedToast
// Dependencies: [4002, 1236, 8744, 2]
// Exports: default

// Module 9709 (showFavoritesGuildAddedToast)
const result = require("StarIcon").fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = importDefault(4002);
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["4tSWQg"]);
  obj[2] = require(8744) /* StarIcon */.StarIcon;
  obj.open(obj);
};
