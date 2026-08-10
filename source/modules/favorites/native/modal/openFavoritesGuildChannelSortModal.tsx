// Module ID: 15271
// Function ID: 15272
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4509, 15272, 1988, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15271 (openFavoritesGuildChannelSortModal)
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(15272, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  importDefault(4509).popWithKey(FavoritesGuildChannelSortModal);
};
