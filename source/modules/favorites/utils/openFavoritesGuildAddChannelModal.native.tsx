// Module ID: 11959
// Function ID: 11960
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [9078, 11960, 2007, 5260, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 11959 (openFavoritesGuildAddChannelModal)
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(9078)(require(2007) /* asyncRequireImpl */(11960, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  importDefault(5260).popWithKey(FavoritesGuildAddChannelModal);
};
