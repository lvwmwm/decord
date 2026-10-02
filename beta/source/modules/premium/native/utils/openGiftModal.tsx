// Module ID: 10163
// Function ID: 10164
// Name: utils/openGiftModal
// Dependencies: [5040, 10164, 1987, 2]
// Exports: openGiftModal

// Module 10163 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10164, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
