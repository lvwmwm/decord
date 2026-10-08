// Module ID: 10304
// Function ID: 10305
// Name: showFavoritesGuildAddedToast
// Dependencies: [4766, 1126, 9483, 2]
// Exports: default

// Module 10304 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import StarIcon from "StarIcon" /* 9483 */;
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
