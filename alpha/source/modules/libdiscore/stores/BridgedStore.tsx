// Module ID: 4670
// Function ID: 4671
// Name: BridgedStore
// Dependencies: [4671, 2]
// Exports: ensureValidMode

// Module 4670 (BridgedStore)
import FluxApi from "FluxApi" /* 4671 */;
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
