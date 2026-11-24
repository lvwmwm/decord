// Module ID: 10968
// Function ID: 10969
// Name: utils/openGiftModal
// Dependencies: [6004, 10969, 2119, 2]
// Exports: openGiftModal

// Module 10968 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10969, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
