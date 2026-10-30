// Module ID: 10538
// Function ID: 10539
// Name: utils/openGiftModal
// Dependencies: [6738, 10539, 1995, 2]
// Exports: openGiftModal

// Module 10538 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10539, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
