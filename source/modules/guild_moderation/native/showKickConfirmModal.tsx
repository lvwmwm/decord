// Module ID: 11305
// Function ID: 11306
// Name: showKickConfirmModal
// Dependencies: [4310, 4550, 11306, 2007, 2]
// Exports: default

// Module 11305 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11306, dependencyMap.paths), closure_0);
};
