// Module ID: 11045
// Function ID: 11046
// Name: openEditCustomStatusModal
// Dependencies: [4731, 11046, 2008, 2]
// Exports: openEditCustomStatusModal

// Module 11045 (openEditCustomStatusModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4731;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(11046, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
