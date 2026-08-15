// Module ID: 11569
// Function ID: 11570
// Name: useCommandDiscoveryManager
// Dependencies: [644, 705, 2]
// Exports: updateInitialSectionId

// Module 11569 (useCommandDiscoveryManager)
import keys from "keys";

const obj = keys.create(() => ({ initialSectionId: "r" }));
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => outer1_2.setState(() => ({ initialSectionId: closure_0 })));
};
