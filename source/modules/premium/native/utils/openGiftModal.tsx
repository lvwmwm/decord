// Module ID: 10090
// Function ID: 10091
// Name: openGiftModal
// Dependencies: [4572, 10091, 2007, 2]
// Exports: openGiftModal

// Module 10090 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(10091, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
