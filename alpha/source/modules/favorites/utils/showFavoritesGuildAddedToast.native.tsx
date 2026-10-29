// Module ID: 10800
// Function ID: 10801
// Name: showFavoritesGuildAddedToast
// Dependencies: [5701, 1125, 10015, 2]
// Exports: default

// Module 10800 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import StarIcon from "StarIcon" /* 10015 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let intl;
  const obj = { text: intl.string(intl2.t["4tSWQg"]), icon: StarIcon.StarIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("FAVORITE_ADDED", obj);
};
