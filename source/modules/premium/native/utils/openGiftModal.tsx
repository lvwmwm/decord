// Module ID: 9677
// Function ID: 75272
// Name: openGiftModal
// Dependencies: [4372, 9678, 1935, 2]
// Exports: openGiftModal

// Module 9677 (openGiftModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  let obj = Object.create(null);
  obj.navigationParams = 0;
  const merged = Object.assign(navigationParams, obj);
  obj = importDefault(4372);
  obj.pushLazy(require(1935) /* maybeLoadBundle */(9678, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
