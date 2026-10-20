// Module ID: 13095
// Function ID: 13096
// Name: ApplicationCommandDiscoveryManager
// Dependencies: [570, 1274, 2]
// Exports: updateInitialSectionId

// Module 13095 (ApplicationCommandDiscoveryManager)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useCommandDiscoveryManager = module_570.create(() => ({ initialSectionId: "r" }));
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export { useCommandDiscoveryManager };
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => {
    let initialSectionId;
    return obj.setState(() => ({ initialSectionId }));
  });
};
