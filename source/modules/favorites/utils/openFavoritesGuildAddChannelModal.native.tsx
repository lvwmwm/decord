// Module ID: 12198
// Function ID: 12199
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [11122, 12199, 2007, 4550, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12198 (openFavoritesGuildAddChannelModal)
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(11122)(require(2007) /* asyncRequireImpl */(12199, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  importDefault(4550).popWithKey(FavoritesGuildAddChannelModal);
};
