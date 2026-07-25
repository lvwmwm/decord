// Module ID: 9637
// Function ID: 75142
// Name: openGiftModal
// Dependencies: [4338, 9638, 1935, 2]
// Exports: openGiftModal

// Module 9637 (openGiftModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  let obj = Object.create(null);
  obj.navigationParams = 0;
  const merged = Object.assign(navigationParams, obj);
  obj = importDefault(4338);
  obj.pushLazy(require(1935) /* maybeLoadBundle */(9638, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
