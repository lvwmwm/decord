// Module ID: 11872
// Function ID: 11873
// Name: ApplicationCommandDiscoveryManager
// Dependencies: [560, 1248, 2]
// Exports: updateInitialSectionId

// Module 11872 (ApplicationCommandDiscoveryManager)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useCommandDiscoveryManager = module_560.create(() => ({ initialSectionId: "r" }));
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export { useCommandDiscoveryManager };
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(() => ({ initialSectionId })));
};
