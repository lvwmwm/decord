// Module ID: 10039
// Function ID: 10040
// Name: openGiftModal
// Dependencies: [4509, 10040, 2007, 2]
// Exports: openGiftModal

// Module 10039 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(10040, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
