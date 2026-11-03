// Module ID: 5017
// Function ID: 5018
// Name: BridgedStore
// Dependencies: [5018, 2]
// Exports: ensureValidMode

// Module 5017 (BridgedStore)
import FluxApi from "FluxApi" /* 5018 */;
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
