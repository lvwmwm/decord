// Module ID: 9535
// Function ID: 9536
// Name: CustomStatusUtils
// Dependencies: [6848, 9536, 2121, 2]
// Exports: openEditCustomStatusModal

// Module 9535 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(9536, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
