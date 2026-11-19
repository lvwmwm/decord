// Module ID: 11169
// Function ID: 11170
// Name: showFavoritesGuildAddedToast
// Dependencies: [5474, 1113, 9888, 2]
// Exports: default

// Module 11169 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import StarIcon from "StarIcon" /* 9888 */;
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
