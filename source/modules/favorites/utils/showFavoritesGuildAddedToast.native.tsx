// Module ID: 9777
// Function ID: 9778
// Name: showFavoritesGuildAddedToast
// Dependencies: [4062, 1236, 8807, 2]
// Exports: default

// Module 9777 (showFavoritesGuildAddedToast)
const result = require("StarIcon").fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = importDefault(4062);
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["4tSWQg"]);
  obj[2] = require(8807) /* StarIcon */.StarIcon;
  obj.open(obj);
};
