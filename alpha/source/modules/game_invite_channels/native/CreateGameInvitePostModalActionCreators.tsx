// Module ID: 12536
// Function ID: 12537
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [5934, 12537, 2000, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 12536 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12537, dependencyMap.paths), merged, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
