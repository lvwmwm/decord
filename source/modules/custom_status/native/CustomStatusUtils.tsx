// Module ID: 9108
// Function ID: 9109
// Name: openEditCustomStatusModal
// Dependencies: [4724, 9109, 2008, 2]
// Exports: openEditCustomStatusModal

// Module 9108 (openEditCustomStatusModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4724;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9109, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
