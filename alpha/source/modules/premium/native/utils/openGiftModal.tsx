// Module ID: 9345
// Function ID: 9346
// Name: utils/openGiftModal
// Dependencies: [6310, 9346, 2119, 2]
// Exports: openGiftModal

// Module 9345 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(9346, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
