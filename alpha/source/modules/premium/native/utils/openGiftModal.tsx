// Module ID: 10405
// Function ID: 10406
// Name: utils/openGiftModal
// Dependencies: [5099, 10406, 1987, 2]
// Exports: openGiftModal

// Module 10405 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10406, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
