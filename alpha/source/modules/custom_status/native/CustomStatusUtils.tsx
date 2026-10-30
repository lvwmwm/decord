// Module ID: 11360
// Function ID: 11361
// Name: CustomStatusUtils
// Dependencies: [6738, 11361, 1995, 2]
// Exports: openEditCustomStatusModal

// Module 11360 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11361, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
