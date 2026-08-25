// Module ID: 9867
// Function ID: 9868
// Name: showFavoritesGuildAddedToast
// Dependencies: [4098, 1236, 8891, 2]
// Exports: default

// Module 9867 (showFavoritesGuildAddedToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4098 */;
import StarIcon from "StarIcon" /* 8891 */;

const result = set.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = dispatcherDefault;
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};
