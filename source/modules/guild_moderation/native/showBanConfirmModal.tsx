// Module ID: 11307
// Function ID: 11308
// Name: showBanConfirmModal
// Dependencies: [4310, 4550, 11308, 2007, 2]
// Exports: default

// Module 11307 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11308, dependencyMap.paths), closure_0);
};
