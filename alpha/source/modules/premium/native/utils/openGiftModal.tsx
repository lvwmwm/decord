// Module ID: 10375
// Function ID: 10376
// Name: utils/openGiftModal
// Dependencies: [6623, 10376, 2002, 2]
// Exports: openGiftModal

// Module 10375 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10376, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
