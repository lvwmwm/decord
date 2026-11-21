// Module ID: 9465
// Function ID: 9466
// Name: utils/openGiftModal
// Dependencies: [6429, 9466, 2119, 2]
// Exports: openGiftModal

// Module 9465 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(9466, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
