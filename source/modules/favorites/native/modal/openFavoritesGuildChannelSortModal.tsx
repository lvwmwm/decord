// Module ID: 15353
// Function ID: 15354
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4572, 15354, 2007, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15353 (openFavoritesGuildChannelSortModal)
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(15354, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  importDefault(4572).popWithKey(FavoritesGuildChannelSortModal);
};
