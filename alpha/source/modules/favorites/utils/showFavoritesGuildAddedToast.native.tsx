// Module ID: 10895
// Function ID: 10896
// Name: showFavoritesGuildAddedToast
// Dependencies: [5699, 1125, 9983, 2]
// Exports: default

// Module 10895 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import StarIcon from "StarIcon" /* 9983 */;
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
