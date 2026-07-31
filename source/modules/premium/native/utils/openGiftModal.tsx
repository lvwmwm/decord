// Module ID: 9713
// Function ID: 9714
// Name: openGiftModal
// Dependencies: [4399, 9714, 1959, 2]
// Exports: openGiftModal

// Module 9713 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(9714, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
