// Module ID: 15577
// Function ID: 15578
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4675, 15578, 2009, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15577 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4675.pushLazy(asyncRequireImpl(15578, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4675.popWithKey(FavoritesGuildChannelSortModal);
};
