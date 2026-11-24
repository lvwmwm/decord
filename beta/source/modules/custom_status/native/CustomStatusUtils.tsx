// Module ID: 9055
// Function ID: 9056
// Name: CustomStatusUtils
// Dependencies: [6429, 9056, 2119, 2]
// Exports: openEditCustomStatusModal

// Module 9055 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(9056, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
