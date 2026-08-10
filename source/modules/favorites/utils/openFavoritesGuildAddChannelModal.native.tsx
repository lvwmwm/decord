// Module ID: 12135
// Function ID: 12136
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [10237, 12136, 1988, 4509, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12135 (openFavoritesGuildAddChannelModal)
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(10237)(require(1988) /* asyncRequireImpl */(12136, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  importDefault(4509).popWithKey(FavoritesGuildAddChannelModal);
};
