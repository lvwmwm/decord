// Module ID: 9817
// Function ID: 9818
// Name: showFavoritesGuildAddedToast
// Dependencies: [4531, 1127, 9716, 2]
// Exports: default

// Module 9817 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1127 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import StarIcon from "StarIcon" /* 9716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let intl;
  const obj = { key: "FAVORITE_ADDED", content: intl.string(intl2.t["4tSWQg"]), IconComponent: StarIcon.StarIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open(obj);
};
