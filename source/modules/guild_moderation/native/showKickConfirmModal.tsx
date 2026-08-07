// Module ID: 11188
// Function ID: 11189
// Name: showKickConfirmModal
// Dependencies: [4270, 4507, 11189, 1988, 2]
// Exports: default

// Module 11188 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4270).hideActionSheet();
  const obj = importDefault(4270);
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11189, dependencyMap.paths), closure_0);
};
