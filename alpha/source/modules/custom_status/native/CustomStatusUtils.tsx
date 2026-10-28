// Module ID: 11100
// Function ID: 11101
// Name: CustomStatusUtils
// Dependencies: [6707, 11101, 1999, 2]
// Exports: openEditCustomStatusModal

// Module 11100 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11101, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
