// Module ID: 11065
// Function ID: 11066
// Name: CustomStatusUtils
// Dependencies: [6673, 11066, 1999, 2]
// Exports: openEditCustomStatusModal

// Module 11065 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11066, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
