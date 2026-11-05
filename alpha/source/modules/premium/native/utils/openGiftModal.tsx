// Module ID: 10742
// Function ID: 10743
// Name: utils/openGiftModal
// Dependencies: [6882, 10743, 2123, 2]
// Exports: openGiftModal

// Module 10742 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10743, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
