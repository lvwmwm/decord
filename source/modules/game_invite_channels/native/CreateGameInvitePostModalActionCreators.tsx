// Module ID: 12702
// Function ID: 12703
// Name: openCreateGameInvitePostModal
// Dependencies: [4731, 12703, 2008, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 12702 (openCreateGameInvitePostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "create-game-invite-post";
const result = set.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(closure_0) {
  _modDef4731.pushLazy(asyncRequireImpl(12703, dependencyMap.paths), closure_0, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  _modDef4731.popWithKey(c3);
};
