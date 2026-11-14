// Module ID: 11661
// Function ID: 11662
// Name: utils/openGiftModal
// Dependencies: [6848, 11662, 2121, 2]
// Exports: openGiftModal

// Module 11661 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11662, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
