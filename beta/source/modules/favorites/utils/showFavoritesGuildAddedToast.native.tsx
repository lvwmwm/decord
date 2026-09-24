// Module ID: 10650
// Function ID: 10651
// Name: showFavoritesGuildAddedToast
// Dependencies: [4490, 1119, 10551, 2]
// Exports: default

// Module 10650 (showFavoritesGuildAddedToast)
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import StarIcon from "StarIcon" /* 10551 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["4tSWQg"]);
  obj2.IconComponent = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open(obj2);
};
