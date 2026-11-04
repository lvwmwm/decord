// Module ID: 11586
// Function ID: 11587
// Name: CustomStatusUtils
// Dependencies: [6879, 11587, 2123, 2]
// Exports: openEditCustomStatusModal

// Module 11586 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11587, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
