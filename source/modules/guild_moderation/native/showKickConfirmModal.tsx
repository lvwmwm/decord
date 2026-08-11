// Module ID: 11260
// Function ID: 11261
// Name: showKickConfirmModal
// Dependencies: [4271, 4509, 11261, 2007, 2]
// Exports: default

// Module 11260 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(11261, dependencyMap.paths), closure_0);
};
