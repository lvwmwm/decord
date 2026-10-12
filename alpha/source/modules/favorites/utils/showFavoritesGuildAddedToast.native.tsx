// Module ID: 10325
// Function ID: 10326
// Name: showFavoritesGuildAddedToast
// Dependencies: [4809, 1126, 9553, 2]
// Exports: default

// Module 10325 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import StarIcon from "StarIcon" /* 9553 */;
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
