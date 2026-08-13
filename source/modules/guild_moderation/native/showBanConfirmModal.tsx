// Module ID: 11308
// Function ID: 11309
// Name: showBanConfirmModal
// Dependencies: [4310, 4550, 11309, 2007, 2]
// Exports: default

// Module 11308 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11309, dependencyMap.paths), closure_0);
};
