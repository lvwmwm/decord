// Module ID: 9986
// Function ID: 9987
// Name: showFavoritesGuildAddedToast
// Dependencies: [4094, 1236, 9410, 2]
// Exports: default

// Module 9986 (showFavoritesGuildAddedToast)
const result = require("StarIcon").fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = importDefault(4094);
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["4tSWQg"]);
  obj[2] = require(9410) /* StarIcon */.StarIcon;
  obj.open(obj);
};
