// Module ID: 10046
// Function ID: 10047
// Name: utils/openGiftModal
// Dependencies: [5934, 10047, 2000, 2]
// Exports: openGiftModal

// Module 10046 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10047, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
