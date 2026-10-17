// Module ID: 10350
// Function ID: 10351
// Name: utils/openGiftModal
// Dependencies: [6190, 10351, 2002, 2]
// Exports: openGiftModal

// Module 10350 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10351, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
