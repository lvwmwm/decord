// Module ID: 10677
// Function ID: 10678
// Name: utils/openGiftModal
// Dependencies: [6799, 10678, 2118, 2]
// Exports: openGiftModal

// Module 10677 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10678, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
