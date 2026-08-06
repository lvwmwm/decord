// Module ID: 11175
// Function ID: 11176
// Name: showBanConfirmModal
// Dependencies: [4253, 4490, 11176, 1988, 2]
// Exports: default

// Module 11175 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11176, dependencyMap.paths), closure_0);
};
