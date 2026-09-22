// Module ID: 11248
// Function ID: 11249
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [11249, 11250, 1980, 4960, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 11248 (openFavoritesGuildAddChannelModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 11249 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(11250, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildAddChannelModal);
};
