// Module ID: 16063
// Function ID: 16064
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4731, 16064, 2008, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 16063 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4731.pushLazy(asyncRequireImpl(16064, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4731.popWithKey(FavoritesGuildChannelSortModal);
};
