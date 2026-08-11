// Module ID: 12138
// Function ID: 12139
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [10242, 12139, 2007, 4509, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12138 (openFavoritesGuildAddChannelModal)
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(10242)(require(2007) /* asyncRequireImpl */(12139, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  importDefault(4509).popWithKey(FavoritesGuildAddChannelModal);
};
