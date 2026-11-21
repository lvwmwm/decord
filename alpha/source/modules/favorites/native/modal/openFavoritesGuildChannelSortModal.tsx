// Module ID: 17660
// Function ID: 17661
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [6429, 17661, 2119, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 17660 (openFavoritesGuildChannelSortModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(17661, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export function closeFavoritesGuildChannelSortModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildChannelSortModal);
}
