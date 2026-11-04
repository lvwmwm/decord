// Module ID: 14614
// Function ID: 14615
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [13602, 14615, 2123, 6879, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 14614 (openFavoritesGuildAddChannelModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13602 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(14615, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export function closeFavoritesGuildAddChannelModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(FavoritesGuildAddChannelModal);
}
