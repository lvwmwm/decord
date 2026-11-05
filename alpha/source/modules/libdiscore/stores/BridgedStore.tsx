// Module ID: 5019
// Function ID: 5020
// Name: BridgedStore
// Dependencies: [5020, 2]
// Exports: ensureValidMode

// Module 5019 (BridgedStore)
import FluxApi from "FluxApi" /* 5020 */;
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
