// Module ID: 12216
// Function ID: 12217
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [11138, 12217, 2007, 4572, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12216 (openFavoritesGuildAddChannelModal)
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(11138)(require(2007) /* asyncRequireImpl */(12217, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  importDefault(4572).popWithKey(FavoritesGuildAddChannelModal);
};
