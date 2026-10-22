// Module ID: 10829
// Function ID: 10830
// Name: showFavoritesGuildAddedToast
// Dependencies: [5649, 1128, 9926, 2]
// Exports: default

// Module 10829 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import StarIcon from "StarIcon" /* 9926 */;
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
