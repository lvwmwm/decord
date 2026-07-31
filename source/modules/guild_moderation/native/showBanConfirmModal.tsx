// Module ID: 11062
// Function ID: 11063
// Name: showBanConfirmModal
// Dependencies: [4161, 4399, 11063, 1959, 2]
// Exports: default

// Module 11062 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4161).hideActionSheet();
  const obj = importDefault(4161);
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(11063, dependencyMap.paths), closure_0);
};
