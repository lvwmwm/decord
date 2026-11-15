// Module ID: 11569
// Function ID: 11570
// Name: CustomStatusUtils
// Dependencies: [6831, 11570, 2118, 2]
// Exports: openEditCustomStatusModal

// Module 11569 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11570, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
