// Module ID: 17399
// Function ID: 17400
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [6651, 17400, 2002, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 17399 (openFavoritesGuildChannelSortModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(17400, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildChannelSortModal);
};
