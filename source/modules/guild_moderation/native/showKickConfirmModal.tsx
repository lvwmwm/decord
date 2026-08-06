// Module ID: 11173
// Function ID: 11174
// Name: showKickConfirmModal
// Dependencies: [4253, 4490, 11174, 1988, 2]
// Exports: default

// Module 11173 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11174, dependencyMap.paths), closure_0);
};
