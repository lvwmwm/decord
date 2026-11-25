// Module ID: 11236
// Function ID: 11237
// Name: showFavoritesGuildAddedToast
// Dependencies: [5595, 1112, 10011, 2]
// Exports: default

// Module 11236 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import StarIcon from "StarIcon" /* 10011 */;
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
