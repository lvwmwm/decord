// Module ID: 10050
// Function ID: 10051
// Name: utils/openGiftModal
// Dependencies: [5934, 10051, 2000, 2]
// Exports: openGiftModal

// Module 10050 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10051, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
