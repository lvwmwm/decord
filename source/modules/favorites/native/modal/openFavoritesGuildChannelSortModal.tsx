// Module ID: 16141
// Function ID: 16142
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4763, 16142, 1896, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 16141 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4763.pushLazy(asyncRequireImpl(16142, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4763.popWithKey(FavoritesGuildChannelSortModal);
};
