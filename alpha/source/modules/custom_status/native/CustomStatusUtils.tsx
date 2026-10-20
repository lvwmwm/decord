// Module ID: 10864
// Function ID: 10865
// Name: CustomStatusUtils
// Dependencies: [6623, 10865, 2002, 2]
// Exports: openEditCustomStatusModal

// Module 10864 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10865, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
