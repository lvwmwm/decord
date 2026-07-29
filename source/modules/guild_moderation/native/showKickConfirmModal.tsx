// Module ID: 11046
// Function ID: 11047
// Name: showKickConfirmModal
// Dependencies: [4157, 4395, 11047, 1959, 2]
// Exports: default

// Module 11046 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11047, dependencyMap.paths), closure_0);
};
