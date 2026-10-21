// Module ID: 11008
// Function ID: 11009
// Name: CustomStatusUtils
// Dependencies: [6651, 11009, 2002, 2]
// Exports: openEditCustomStatusModal

// Module 11008 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(11009, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
