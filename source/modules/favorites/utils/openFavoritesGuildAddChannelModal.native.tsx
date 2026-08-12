// Module ID: 12195
// Function ID: 12196
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [10283, 12196, 2007, 4549, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12195 (openFavoritesGuildAddChannelModal)
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(10283)(require(2007) /* asyncRequireImpl */(12196, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  importDefault(4549).popWithKey(FavoritesGuildAddChannelModal);
};
