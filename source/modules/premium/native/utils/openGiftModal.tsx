// Module ID: 10078
// Function ID: 10079
// Name: openGiftModal
// Dependencies: [4550, 10079, 2007, 2]
// Exports: openGiftModal

// Module 10078 (openGiftModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(10079, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
