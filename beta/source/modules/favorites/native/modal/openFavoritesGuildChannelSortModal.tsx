// Module ID: 18203
// Function ID: 18204
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [6744, 18204, 1994, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 18203 (openFavoritesGuildChannelSortModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(18204, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export function closeFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildChannelSortModal);
}
