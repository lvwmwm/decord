// Module ID: 10558
// Function ID: 10559
// Name: utils/openGiftModal
// Dependencies: [6744, 10559, 1994, 2]
// Exports: openGiftModal

// Module 10558 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10559, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
