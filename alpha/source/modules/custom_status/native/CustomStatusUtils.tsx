// Module ID: 11396
// Function ID: 11397
// Name: CustomStatusUtils
// Dependencies: [6744, 11397, 1994, 2]
// Exports: openEditCustomStatusModal

// Module 11396 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11397, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
