// Module ID: 11538
// Function ID: 11539
// Name: CustomStatusUtils
// Dependencies: [6799, 11539, 2118, 2]
// Exports: openEditCustomStatusModal

// Module 11538 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11539, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
