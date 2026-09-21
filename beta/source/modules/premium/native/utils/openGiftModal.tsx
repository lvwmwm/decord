// Module ID: 10959
// Function ID: 10960
// Name: utils/openGiftModal
// Dependencies: [4961, 10960, 1984, 2]
// Exports: openGiftModal

// Module 10959 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10960, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
