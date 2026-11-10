// Module ID: 11547
// Function ID: 11548
// Name: CustomStatusUtils
// Dependencies: [6801, 11548, 2118, 2]
// Exports: openEditCustomStatusModal

// Module 11547 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11548, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
