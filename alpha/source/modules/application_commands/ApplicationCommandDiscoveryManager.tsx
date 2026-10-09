// Module ID: 12065
// Function ID: 12066
// Name: ApplicationCommandDiscoveryManager
// Dependencies: [570, 1272, 2]
// Exports: updateInitialSectionId

// Module 12065 (ApplicationCommandDiscoveryManager)
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
