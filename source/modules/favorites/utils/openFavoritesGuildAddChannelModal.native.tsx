// Module ID: 12008
// Function ID: 12009
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [9115, 12009, 2008, 5265, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12008 (openFavoritesGuildAddChannelModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 9115 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(12009, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  _modDef5265.popWithKey(FavoritesGuildAddChannelModal);
};
