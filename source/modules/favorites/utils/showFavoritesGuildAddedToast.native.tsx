// Module ID: 10163
// Function ID: 10164
// Name: showFavoritesGuildAddedToast
// Dependencies: [4194, 1233, 10164, 2]
// Exports: default

// Module 10163 (showFavoritesGuildAddedToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import StarIcon from "StarIcon" /* 10164 */;

const result = set.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = dispatcherDefault;
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};
