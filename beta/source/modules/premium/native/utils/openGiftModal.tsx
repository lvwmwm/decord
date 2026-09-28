// Module ID: 10124
// Function ID: 10125
// Name: utils/openGiftModal
// Dependencies: [5039, 10125, 1981, 2]
// Exports: openGiftModal

// Module 10124 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10125, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
