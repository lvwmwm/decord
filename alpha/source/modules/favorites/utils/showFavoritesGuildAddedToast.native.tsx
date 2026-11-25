// Module ID: 10708
// Function ID: 10709
// Name: showFavoritesGuildAddedToast
// Dependencies: [5694, 1112, 9725, 2]
// Exports: default

// Module 10708 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import StarIcon from "StarIcon" /* 9725 */;
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
