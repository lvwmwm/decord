// Module ID: 10269
// Function ID: 10270
// Name: utils/openGiftModal
// Dependencies: [6150, 10270, 2000, 2]
// Exports: openGiftModal

// Module 10269 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10270, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
