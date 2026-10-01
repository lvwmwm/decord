// Module ID: 9697
// Function ID: 9698
// Name: showFavoritesGuildAddedToast
// Dependencies: [4528, 1115, 9698, 2]
// Exports: default

// Module 9697 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import StarIcon from "StarIcon" /* 9698 */;
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
