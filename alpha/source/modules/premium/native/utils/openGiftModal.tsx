// Module ID: 10694
// Function ID: 10695
// Name: utils/openGiftModal
// Dependencies: [6824, 10695, 2118, 2]
// Exports: openGiftModal

// Module 10694 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10695, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
