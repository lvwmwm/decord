// Module ID: 10364
// Function ID: 10365
// Name: utils/openGiftModal
// Dependencies: [6620, 10365, 2002, 2]
// Exports: openGiftModal

// Module 10364 (utils/openGiftModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10365, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
