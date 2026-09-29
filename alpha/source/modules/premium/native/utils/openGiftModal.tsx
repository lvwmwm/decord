// Module ID: 10291
// Function ID: 10292
// Name: utils/openGiftModal
// Dependencies: [5039, 10292, 1981, 2]
// Exports: openGiftModal

// Module 10291 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10292, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
