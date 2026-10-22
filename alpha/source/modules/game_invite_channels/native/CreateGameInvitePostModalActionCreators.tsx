// Module ID: 13653
// Function ID: 13654
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [6657, 13654, 2002, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 13653 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13654, dependencyMap.paths), merged, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
