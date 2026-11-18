// Module ID: 8961
// Function ID: 8962
// Name: CustomStatusUtils
// Dependencies: [6337, 8962, 2121, 2]
// Exports: openEditCustomStatusModal

// Module 8961 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(8962, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
