// Module ID: 13630
// Function ID: 13631
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [12685, 13631, 2002, 6190, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 13630 (openFavoritesGuildAddChannelModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 12685 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(13631, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildAddChannelModal);
};
