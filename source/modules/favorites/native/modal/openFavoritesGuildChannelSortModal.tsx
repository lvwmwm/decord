// Module ID: 15730
// Function ID: 15731
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4723, 15731, 2009, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15730 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4723.pushLazy(asyncRequireImpl(15731, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4723.popWithKey(FavoritesGuildChannelSortModal);
};
