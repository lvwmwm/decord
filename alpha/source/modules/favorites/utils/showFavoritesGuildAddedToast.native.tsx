// Module ID: 10979
// Function ID: 10980
// Name: showFavoritesGuildAddedToast
// Dependencies: [5867, 1113, 10201, 2]
// Exports: default

// Module 10979 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import StarIcon from "StarIcon" /* 10201 */;
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
