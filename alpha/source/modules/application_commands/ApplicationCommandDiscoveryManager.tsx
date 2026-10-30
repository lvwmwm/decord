// Module ID: 13911
// Function ID: 13912
// Name: ApplicationCommandDiscoveryManager
// Dependencies: [560, 1260, 2]
// Exports: updateInitialSectionId

// Module 13911 (ApplicationCommandDiscoveryManager)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useCommandDiscoveryManager = module_560.create(() => ({ initialSectionId: "getCurrentUser" }));
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export { useCommandDiscoveryManager };
export function updateInitialSectionId(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => {
    let initialSectionId;
    return obj.setState(() => ({ initialSectionId }));
  });
}
