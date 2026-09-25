// Module ID: 10113
// Function ID: 10114
// Name: utils/openGiftModal
// Dependencies: [5032, 10114, 1980, 2]
// Exports: openGiftModal

// Module 10113 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10114, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
