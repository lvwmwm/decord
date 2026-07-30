// Module ID: 9696
// Function ID: 9697
// Name: openGiftModal
// Dependencies: [4395, 9697, 1959, 2]
// Exports: openGiftModal

// Module 9696 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9697, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
