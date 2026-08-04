// Module ID: 11169
// Function ID: 11170
// Name: showBanConfirmModal
// Dependencies: [4253, 4490, 11170, 1959, 2]
// Exports: default

// Module 11169 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11170, dependencyMap.paths), closure_0);
};
