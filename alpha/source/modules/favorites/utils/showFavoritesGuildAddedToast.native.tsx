// Module ID: 9898
// Function ID: 9899
// Name: showFavoritesGuildAddedToast
// Dependencies: [4558, 1115, 9899, 2]
// Exports: default

// Module 9898 (showFavoritesGuildAddedToast)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4558 */;
import StarIcon from "StarIcon" /* 9899 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["4tSWQg"]);
  obj2.IconComponent = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open(obj2);
};
