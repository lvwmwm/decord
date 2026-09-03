// Module ID: 10679
// Function ID: 10680
// Name: openGiftModal
// Dependencies: [4724, 10680, 2008, 2]
// Exports: openGiftModal

// Module 10679 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4724.pushLazy(asyncRequireImpl(10680, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
