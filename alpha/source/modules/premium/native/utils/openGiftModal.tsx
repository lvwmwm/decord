// Module ID: 10480
// Function ID: 10481
// Name: utils/openGiftModal
// Dependencies: [6707, 10481, 1999, 2]
// Exports: openGiftModal

// Module 10480 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10481, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
