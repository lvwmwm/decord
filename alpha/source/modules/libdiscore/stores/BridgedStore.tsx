// Module ID: 4793
// Function ID: 4794
// Name: BridgedStore
// Dependencies: [4794, 2]
// Exports: ensureValidMode

// Module 4793 (BridgedStore)
import FluxApi from "FluxApi" /* 4794 */;
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
