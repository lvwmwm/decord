// Module ID: 4699
// Function ID: 4700
// Name: BridgedStore
// Dependencies: [4700, 2]
// Exports: ensureValidMode

// Module 4699 (BridgedStore)
import FluxApi from "FluxApi" /* 4700 */;
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
