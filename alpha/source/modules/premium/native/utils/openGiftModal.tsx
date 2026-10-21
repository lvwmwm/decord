// Module ID: 10404
// Function ID: 10405
// Name: utils/openGiftModal
// Dependencies: [6651, 10405, 2002, 2]
// Exports: openGiftModal

// Module 10404 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10405, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
