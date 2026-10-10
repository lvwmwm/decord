// Module ID: 10516
// Function ID: 10517
// Name: CustomStatusUtils
// Dependencies: [5934, 10517, 2000, 2]
// Exports: openEditCustomStatusModal

// Module 10516 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10517, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
