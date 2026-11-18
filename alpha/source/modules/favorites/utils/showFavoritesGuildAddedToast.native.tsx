// Module ID: 11191
// Function ID: 11192
// Name: showFavoritesGuildAddedToast
// Dependencies: [5505, 1113, 9909, 2]
// Exports: default

// Module 11191 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5505 */;
import StarIcon from "StarIcon" /* 9909 */;
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
