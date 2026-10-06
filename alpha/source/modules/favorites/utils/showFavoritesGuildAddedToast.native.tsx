// Module ID: 10059
// Function ID: 10060
// Name: showFavoritesGuildAddedToast
// Dependencies: [4574, 1126, 9956, 2]
// Exports: default

// Module 10059 (showFavoritesGuildAddedToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import StarIcon from "StarIcon" /* 9956 */;
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
