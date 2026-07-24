// Module ID: 11029
// Function ID: 85787
// Name: showBanConfirmModal
// Dependencies: [4098, 4337, 11030, 1934, 2]
// Exports: default

// Module 11029 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  importDefault(4098).hideActionSheet();
  const obj = importDefault(4098);
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11030, dependencyMap.paths), merged);
};
