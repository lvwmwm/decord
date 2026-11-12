// Module ID: 11594
// Function ID: 11595
// Name: utils/openGiftModal
// Dependencies: [6785, 11595, 2118, 2]
// Exports: openGiftModal

// Module 11594 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11595, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
