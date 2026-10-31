// Module ID: 4890
// Function ID: 4891
// Name: BridgedStore
// Dependencies: [4891, 2]
// Exports: ensureValidMode

// Module 4890 (BridgedStore)
import FluxApi from "FluxApi" /* 4891 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  } else {
    FluxApi;
  }
  return str;
}
