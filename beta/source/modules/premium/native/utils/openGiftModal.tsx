// Module ID: 10995
// Function ID: 10996
// Name: utils/openGiftModal
// Dependencies: [4993, 10996, 1984, 2]
// Exports: openGiftModal

// Module 10995 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10996, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
