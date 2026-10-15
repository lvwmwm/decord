// Module ID: 17159
// Function ID: 17160
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [6150, 17160, 2000, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 17159 (openFavoritesGuildChannelSortModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(17160, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildChannelSortModal);
};
