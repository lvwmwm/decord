// Module ID: 10234
// Function ID: 10235
// Name: showFavoritesGuildAddedToast
// Dependencies: [4259, 1114, 10235, 2]
// Exports: default

// Module 10234 (showFavoritesGuildAddedToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import dispatcherDefault from "dispatcher" /* 4259 */;
import StarIcon from "StarIcon" /* 10235 */;

const result = set.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = dispatcherDefault;
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};
