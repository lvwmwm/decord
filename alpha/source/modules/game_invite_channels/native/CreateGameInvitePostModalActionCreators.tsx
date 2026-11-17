// Module ID: 14348
// Function ID: 14349
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [6833, 14349, 2121, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 14348 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14349, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
