// Module ID: 10558
// Function ID: 10559
// Name: showFavoritesGuildAddedToast
// Dependencies: [4865, 1126, 9772, 2]
// Exports: default

// Module 10558 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4865 */;
import StarIcon from "StarIcon" /* 9772 */;
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
