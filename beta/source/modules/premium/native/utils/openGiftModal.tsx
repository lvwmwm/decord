// Module ID: 10709
// Function ID: 10710
// Name: utils/openGiftModal
// Dependencies: [6831, 10710, 2118, 2]
// Exports: openGiftModal

// Module 10709 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10710, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
