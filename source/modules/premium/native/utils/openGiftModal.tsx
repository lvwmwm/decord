// Module ID: 9967
// Function ID: 9968
// Name: openGiftModal
// Dependencies: [4507, 9968, 1988, 2]
// Exports: openGiftModal

// Module 9967 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(9968, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
