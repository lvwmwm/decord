// Module ID: 10295
// Function ID: 10296
// Name: openGiftModal
// Dependencies: [5260, 10296, 2007, 2]
// Exports: openGiftModal

// Module 10295 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(10296, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
