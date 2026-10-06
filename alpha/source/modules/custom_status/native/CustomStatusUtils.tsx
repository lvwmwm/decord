// Module ID: 10841
// Function ID: 10842
// Name: CustomStatusUtils
// Dependencies: [5099, 10842, 1987, 2]
// Exports: openEditCustomStatusModal

// Module 10841 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10842, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
