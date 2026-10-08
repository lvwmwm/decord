// Module ID: 10492
// Function ID: 10493
// Name: CustomStatusUtils
// Dependencies: [5940, 10493, 1999, 2]
// Exports: openEditCustomStatusModal

// Module 10492 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10493, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
