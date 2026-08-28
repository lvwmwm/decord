// Module ID: 15660
// Function ID: 15661
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4689, 15661, 2010, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15660 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4689.pushLazy(asyncRequireImpl(15661, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4689.popWithKey(FavoritesGuildChannelSortModal);
};
