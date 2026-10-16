// Module ID: 10762
// Function ID: 10763
// Name: CustomStatusUtils
// Dependencies: [6153, 10763, 2002, 2]
// Exports: openEditCustomStatusModal

// Module 10762 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10763, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
