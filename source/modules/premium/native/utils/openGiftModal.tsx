// Module ID: 9713
// Function ID: 75547
// Name: openGiftModal
// Dependencies: [4337, 9714, 1934, 2]
// Exports: openGiftModal

// Module 9713 (openGiftModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  let obj = Object.create(null);
  obj.navigationParams = 0;
  const merged = Object.assign(navigationParams, obj);
  obj = importDefault(4337);
  obj.pushLazy(require(1934) /* maybeLoadBundle */(9714, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
