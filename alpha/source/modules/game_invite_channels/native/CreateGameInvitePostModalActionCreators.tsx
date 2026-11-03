// Module ID: 14513
// Function ID: 14514
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [6864, 14514, 2123, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 14513 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14514, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
