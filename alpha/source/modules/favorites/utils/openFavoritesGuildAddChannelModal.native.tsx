// Module ID: 12692
// Function ID: 12693
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [11555, 12693, 2000, 5934, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 12692 (openFavoritesGuildAddChannelModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 11555 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(12693, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildAddChannelModal);
};
