// Module ID: 13805
// Function ID: 13806
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [12841, 13806, 2002, 6657, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 13805 (openFavoritesGuildAddChannelModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 12841 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(13806, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildAddChannelModal);
};
