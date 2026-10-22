// Module ID: 10416
// Function ID: 10417
// Name: utils/openGiftModal
// Dependencies: [6658, 10417, 2002, 2]
// Exports: openGiftModal

// Module 10416 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10417, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
