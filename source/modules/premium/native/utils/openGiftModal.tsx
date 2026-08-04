// Module ID: 9949
// Function ID: 9950
// Name: openGiftModal
// Dependencies: [4490, 9950, 1959, 2]
// Exports: openGiftModal

// Module 9949 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(9950, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
