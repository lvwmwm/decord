// Module ID: 10315
// Function ID: 10316
// Name: showFavoritesGuildAddedToast
// Dependencies: [4194, 1236, 9181, 2]
// Exports: default

// Module 10315 (showFavoritesGuildAddedToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import StarIcon from "StarIcon" /* 9181 */;

const result = set.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = dispatcherDefault;
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};
