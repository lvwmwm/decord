// Module ID: 11262
// Function ID: 11263
// Name: showBanConfirmModal
// Dependencies: [4271, 4509, 11263, 2007, 2]
// Exports: default

// Module 11262 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(11263, dependencyMap.paths), closure_0);
};
