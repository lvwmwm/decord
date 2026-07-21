// Module ID: 9671
// Function ID: 75270
// Name: openGiftModal
// Dependencies: []
// Exports: openGiftModal

// Module 9671 (openGiftModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  let obj = Object.create(null);
  obj.navigationParams = 0;
  const merged = Object.assign(navigationParams, obj);
  obj = importDefault(dependencyMap[0]);
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
