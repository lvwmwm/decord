// Module ID: 11048
// Function ID: 11049
// Name: showBanConfirmModal
// Dependencies: [4157, 4395, 11049, 1959, 2]
// Exports: default

// Module 11048 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11049, dependencyMap.paths), closure_0);
};
