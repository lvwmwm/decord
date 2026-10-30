// Module ID: 10823
// Function ID: 10824
// Name: showFavoritesGuildAddedToast
// Dependencies: [5707, 1114, 10042, 2]
// Exports: default

// Module 10823 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import StarIcon from "StarIcon" /* 10042 */;
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
