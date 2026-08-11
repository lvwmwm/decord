// Module ID: 15281
// Function ID: 15282
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4509, 15282, 2007, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15281 (openFavoritesGuildChannelSortModal)
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(15282, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  importDefault(4509).popWithKey(FavoritesGuildChannelSortModal);
};
