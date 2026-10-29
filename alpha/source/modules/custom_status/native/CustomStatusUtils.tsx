// Module ID: 11154
// Function ID: 11155
// Name: CustomStatusUtils
// Dependencies: [6731, 11155, 2000, 2]
// Exports: openEditCustomStatusModal

// Module 11154 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11155, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
