// Module ID: 10686
// Function ID: 10687
// Name: utils/openGiftModal
// Dependencies: [6801, 10687, 2118, 2]
// Exports: openGiftModal

// Module 10686 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10687, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
}
