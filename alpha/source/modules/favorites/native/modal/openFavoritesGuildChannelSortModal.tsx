// Module ID: 17193
// Function ID: 17194
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [6152, 17194, 2002, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 17193 (openFavoritesGuildChannelSortModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(17194, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildChannelSortModal);
};
