// Module ID: 11322
// Function ID: 11323
// Name: showKickConfirmModal
// Dependencies: [4310, 4572, 11323, 2007, 2]
// Exports: default

// Module 11322 (showKickConfirmModal)
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11323, dependencyMap.paths), closure_0);
};
