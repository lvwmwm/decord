// Module ID: 9951
// Function ID: 9952
// Name: openGiftModal
// Dependencies: [4490, 9952, 1988, 2]
// Exports: openGiftModal

// Module 9951 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(9952, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
