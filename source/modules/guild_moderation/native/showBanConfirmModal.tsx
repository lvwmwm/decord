// Module ID: 10985
// Function ID: 85407
// Name: showBanConfirmModal
// Dependencies: [4099, 4338, 10986, 1935, 2]
// Exports: default

// Module 10985 (showBanConfirmModal)
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  importDefault(4099).hideActionSheet();
  const obj = importDefault(4099);
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(10986, dependencyMap.paths), merged);
};
