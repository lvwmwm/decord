// Module ID: 11067
// Function ID: 11068
// Name: utils/openGiftModal
// Dependencies: [6099, 11068, 2119, 2]
// Exports: openGiftModal

// Module 11067 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11068, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
