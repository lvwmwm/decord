// Module ID: 15347
// Function ID: 15348
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4550, 15348, 2007, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15347 (openFavoritesGuildChannelSortModal)
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(15348, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  importDefault(4550).popWithKey(FavoritesGuildChannelSortModal);
};
