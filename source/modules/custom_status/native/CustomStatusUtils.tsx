// Module ID: 9668
// Function ID: 9669
// Name: openEditCustomStatusModal
// Dependencies: [4675, 9669, 2009, 2]
// Exports: openEditCustomStatusModal

// Module 9668 (openEditCustomStatusModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4675;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9669, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
