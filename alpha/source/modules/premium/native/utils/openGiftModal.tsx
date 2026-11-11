// Module ID: 11600
// Function ID: 11601
// Name: utils/openGiftModal
// Dependencies: [6785, 11601, 2118, 2]
// Exports: openGiftModal

// Module 11600 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11601, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
