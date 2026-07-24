// Module ID: 11469
// Function ID: 89233
// Name: useCommandDiscoveryManager
// Dependencies: [621, 682, 2]
// Exports: updateInitialSectionId

// Module 11469 (useCommandDiscoveryManager)
import keys from "keys";

const obj = keys.create(() => ({ initialSectionId: undefined }));
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_2.setState(() => ({ initialSectionId: outer1_0 })));
};
