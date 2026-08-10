// Module ID: 11257
// Function ID: 11258
// Name: showBanConfirmModal
// Dependencies: [4271, 4509, 11258, 1988, 2]
// Exports: default

// Module 11257 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11258, dependencyMap.paths), closure_0);
};
