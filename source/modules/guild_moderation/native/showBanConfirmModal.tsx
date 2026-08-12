// Module ID: 11316
// Function ID: 11317
// Name: showBanConfirmModal
// Dependencies: [4312, 4549, 11317, 2007, 2]
// Exports: default

// Module 11316 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4312).hideActionSheet();
  const obj = importDefault(4312);
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11317, dependencyMap.paths), closure_0);
};
