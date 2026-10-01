// Module ID: 10575
// Function ID: 10576
// Name: CustomStatusUtils
// Dependencies: [5039, 10576, 1981, 2]
// Exports: openEditCustomStatusModal

// Module 10575 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10576, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
