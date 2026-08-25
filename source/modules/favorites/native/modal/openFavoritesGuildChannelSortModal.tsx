// Module ID: 15498
// Function ID: 15499
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4611, 15499, 2009, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15498 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4611.pushLazy(asyncRequireImpl(15499, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4611.popWithKey(FavoritesGuildChannelSortModal);
};
