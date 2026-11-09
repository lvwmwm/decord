// Module ID: 14618
// Function ID: 14619
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [6799, 14619, 2118, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 14618 (CreateGameInvitePostModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(14619, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
