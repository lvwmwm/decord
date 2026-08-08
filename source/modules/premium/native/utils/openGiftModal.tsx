// Module ID: 10033
// Function ID: 10034
// Name: openGiftModal
// Dependencies: [4509, 10034, 1988, 2]
// Exports: openGiftModal

// Module 10033 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(10034, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
