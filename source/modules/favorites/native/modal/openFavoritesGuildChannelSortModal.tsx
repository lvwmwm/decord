// Module ID: 15466
// Function ID: 15467
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [5265, 15467, 2008, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15466 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef5265.pushLazy(asyncRequireImpl(15467, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef5265.popWithKey(FavoritesGuildChannelSortModal);
};
