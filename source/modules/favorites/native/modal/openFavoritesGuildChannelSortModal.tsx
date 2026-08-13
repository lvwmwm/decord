// Module ID: 15338
// Function ID: 15339
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4550, 15339, 2007, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15338 (openFavoritesGuildChannelSortModal)
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(15339, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  importDefault(4550).popWithKey(FavoritesGuildChannelSortModal);
};
