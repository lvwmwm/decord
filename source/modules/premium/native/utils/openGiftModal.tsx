// Module ID: 10590
// Function ID: 10591
// Name: openGiftModal
// Dependencies: [4731, 10591, 2008, 2]
// Exports: openGiftModal

// Module 10590 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4731.pushLazy(asyncRequireImpl(10591, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
