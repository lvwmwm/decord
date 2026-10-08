// Module ID: 12698
// Function ID: 12699
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [11574, 12699, 1999, 5940, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12698 (openFavoritesGuildAddChannelModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 11574 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(12699, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildAddChannelModal);
};
