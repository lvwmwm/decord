// Module ID: 12336
// Function ID: 12337
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [11232, 12337, 2009, 4611, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12336 (openFavoritesGuildAddChannelModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 11232 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(12337, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  _modDef4611.popWithKey(FavoritesGuildAddChannelModal);
};
