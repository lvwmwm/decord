// Module ID: 9029
// Function ID: 9030
// Name: openEditCustomStatusModal
// Dependencies: [4689, 9030, 2010, 2]
// Exports: openEditCustomStatusModal

// Module 9029 (openEditCustomStatusModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4689;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9030, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
