// Module ID: 10588
// Function ID: 10589
// Name: CustomStatusUtils
// Dependencies: [5040, 10589, 1987, 2]
// Exports: openEditCustomStatusModal

// Module 10588 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10589, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
