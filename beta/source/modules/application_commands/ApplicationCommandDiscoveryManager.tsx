// Module ID: 12546
// Function ID: 12547
// Name: ApplicationCommandDiscoveryManager
// Dependencies: [562, 1252, 2]
// Exports: updateInitialSectionId

// Module 12546 (ApplicationCommandDiscoveryManager)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useCommandDiscoveryManager = module_562.create(() => ({ initialSectionId: "emoji" }));
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export { useCommandDiscoveryManager };
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(() => ({ initialSectionId })));
};
