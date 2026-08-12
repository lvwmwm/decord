// Module ID: 10080
// Function ID: 10081
// Name: openGiftModal
// Dependencies: [4549, 10081, 2007, 2]
// Exports: openGiftModal

// Module 10080 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(10081, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
