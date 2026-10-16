// Module ID: 10573
// Function ID: 10574
// Name: showFavoritesGuildAddedToast
// Dependencies: [4868, 1128, 9788, 2]
// Exports: default

// Module 10573 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4868 */;
import StarIcon from "StarIcon" /* 9788 */;
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
