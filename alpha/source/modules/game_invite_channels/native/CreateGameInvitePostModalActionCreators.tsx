// Module ID: 13604
// Function ID: 13605
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [6310, 13605, 2119, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 13604 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13605, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
