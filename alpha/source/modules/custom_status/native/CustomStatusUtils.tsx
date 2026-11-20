// Module ID: 8935
// Function ID: 8936
// Name: CustomStatusUtils
// Dependencies: [6310, 8936, 2119, 2]
// Exports: openEditCustomStatusModal

// Module 8935 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(8936, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
}
