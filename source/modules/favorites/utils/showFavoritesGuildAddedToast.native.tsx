// Module ID: 9714
// Function ID: 9715
// Name: showFavoritesGuildAddedToast
// Dependencies: [4021, 1236, 8750, 2]
// Exports: default

// Module 9714 (showFavoritesGuildAddedToast)
const result = require("StarIcon").fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = importDefault(4021);
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["4tSWQg"]);
  obj[2] = require(8750) /* StarIcon */.StarIcon;
  obj.open(obj);
};
