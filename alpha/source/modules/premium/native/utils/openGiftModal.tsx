// Module ID: 10688
// Function ID: 10689
// Name: utils/openGiftModal
// Dependencies: [6864, 10689, 2123, 2]
// Exports: openGiftModal

// Module 10688 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10689, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
