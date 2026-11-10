// Module ID: 5018
// Function ID: 5019
// Name: BridgedStore
// Dependencies: [5019, 2]
// Exports: ensureValidMode

// Module 5018 (BridgedStore)
import FluxApi from "FluxApi" /* 5019 */;
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
