// Module ID: 11113
// Function ID: 11114
// Name: utils/openGiftModal
// Dependencies: [6130, 11114, 2120, 2]
// Exports: openGiftModal

// Module 11113 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11114, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
