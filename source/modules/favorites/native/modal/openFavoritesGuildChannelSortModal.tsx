// Module ID: 15402
// Function ID: 15403
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [5260, 15403, 2007, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 15402 (openFavoritesGuildChannelSortModal)
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(15403, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  importDefault(5260).popWithKey(FavoritesGuildChannelSortModal);
};
