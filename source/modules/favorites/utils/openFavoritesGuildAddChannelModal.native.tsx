// Module ID: 10976
// Function ID: 10977
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [10977, 10978, 1896, 4763, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 10976 (openFavoritesGuildAddChannelModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10977 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(10978, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  _modDef4763.popWithKey(FavoritesGuildAddChannelModal);
};
