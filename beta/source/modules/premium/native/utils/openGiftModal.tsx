// Module ID: 10957
// Function ID: 10958
// Name: utils/openGiftModal
// Dependencies: [4991, 10958, 1980, 2]
// Exports: openGiftModal

// Module 10957 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10958, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
