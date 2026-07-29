// Module ID: 9699
// Function ID: 9700
// Name: openGiftModal
// Dependencies: [4395, 9700, 1959, 2]
// Exports: openGiftModal

// Module 9699 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9700, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
