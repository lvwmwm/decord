// Module ID: 11034
// Function ID: 11035
// Name: CustomStatusUtils
// Dependencies: [6657, 11035, 2002, 2]
// Exports: openEditCustomStatusModal

// Module 11034 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11035, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
