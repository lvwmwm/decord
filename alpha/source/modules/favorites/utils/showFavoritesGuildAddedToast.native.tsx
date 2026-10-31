// Module ID: 10843
// Function ID: 10844
// Name: showFavoritesGuildAddedToast
// Dependencies: [5712, 1113, 10063, 2]
// Exports: default

// Module 10843 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import StarIcon from "StarIcon" /* 10063 */;
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
