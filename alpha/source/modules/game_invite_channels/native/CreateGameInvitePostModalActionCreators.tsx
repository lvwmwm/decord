// Module ID: 13726
// Function ID: 13727
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [6429, 13727, 2119, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 13726 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13727, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
