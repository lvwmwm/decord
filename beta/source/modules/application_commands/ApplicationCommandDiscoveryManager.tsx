// Module ID: 11784
// Function ID: 11785
// Name: ApplicationCommandDiscoveryManager
// Dependencies: [570, 1260, 2]
// Exports: updateInitialSectionId

// Module 11784 (ApplicationCommandDiscoveryManager)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useCommandDiscoveryManager = module_570.create(() => ({ initialSectionId: "call" }));
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
