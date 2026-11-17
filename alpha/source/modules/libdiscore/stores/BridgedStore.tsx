// Module ID: 5186
// Function ID: 5187
// Name: BridgedStore
// Dependencies: [5187, 2]
// Exports: ensureValidMode

// Module 5186 (BridgedStore)
import FluxApi from "FluxApi" /* 5187 */;
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
