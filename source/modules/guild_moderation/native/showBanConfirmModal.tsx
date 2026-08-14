// Module ID: 11324
// Function ID: 11325
// Name: showBanConfirmModal
// Dependencies: [4310, 4572, 11325, 2007, 2]
// Exports: default

// Module 11324 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11325, dependencyMap.paths), closure_0);
};
