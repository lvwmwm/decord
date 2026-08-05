// Module ID: 9920
// Function ID: 9921
// Name: openGiftModal
// Dependencies: [4460, 9921, 1959, 2]
// Exports: openGiftModal

// Module 9920 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(9921, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
