// Module ID: 10804
// Function ID: 10805
// Name: showFavoritesGuildAddedToast
// Dependencies: [5645, 1128, 9907, 2]
// Exports: default

// Module 10804 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5645 */;
import StarIcon from "StarIcon" /* 9907 */;
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
