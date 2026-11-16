// Module ID: 10994
// Function ID: 10995
// Name: showFavoritesGuildAddedToast
// Dependencies: [5869, 1113, 10216, 2]
// Exports: default

// Module 10994 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import StarIcon from "StarIcon" /* 10216 */;
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
