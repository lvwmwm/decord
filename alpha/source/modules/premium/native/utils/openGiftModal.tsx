// Module ID: 10021
// Function ID: 10022
// Name: utils/openGiftModal
// Dependencies: [5941, 10022, 2000, 2]
// Exports: openGiftModal

// Module 10021 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10022, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
