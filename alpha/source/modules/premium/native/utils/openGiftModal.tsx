// Module ID: 10448
// Function ID: 10449
// Name: utils/openGiftModal
// Dependencies: [6673, 10449, 1999, 2]
// Exports: openGiftModal

// Module 10448 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10449, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
