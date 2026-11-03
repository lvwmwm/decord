// Module ID: 18347
// Function ID: 18348
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [6864, 18348, 2123, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 18347 (openFavoritesGuildChannelSortModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(18348, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export function closeFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildChannelSortModal);
}
