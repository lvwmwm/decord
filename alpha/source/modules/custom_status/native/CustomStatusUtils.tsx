// Module ID: 9529
// Function ID: 9530
// Name: CustomStatusUtils
// Dependencies: [6130, 9530, 2120, 2]
// Exports: openEditCustomStatusModal

// Module 9529 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(9530, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
