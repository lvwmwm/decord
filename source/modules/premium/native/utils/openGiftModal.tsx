// Module ID: 10334
// Function ID: 10335
// Name: openGiftModal
// Dependencies: [5265, 10335, 2008, 2]
// Exports: openGiftModal

// Module 10334 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef5265.pushLazy(asyncRequireImpl(10335, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
