// Module ID: 11167
// Function ID: 11168
// Name: showKickConfirmModal
// Dependencies: [4253, 4490, 11168, 1959, 2]
// Exports: default

// Module 11167 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11168, dependencyMap.paths), closure_0);
};
