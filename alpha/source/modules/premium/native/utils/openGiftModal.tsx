// Module ID: 10061
// Function ID: 10062
// Name: utils/openGiftModal
// Dependencies: [5939, 10062, 2000, 2]
// Exports: openGiftModal

// Module 10061 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10062, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
