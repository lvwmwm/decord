// Module ID: 10651
// Function ID: 10652
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [10652, 10653, 2010, 4689, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 10651 (openFavoritesGuildAddChannelModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10652 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(10653, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  _modDef4689.popWithKey(FavoritesGuildAddChannelModal);
};
