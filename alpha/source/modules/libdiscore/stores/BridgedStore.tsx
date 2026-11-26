// Module ID: 4919
// Function ID: 4920
// Name: BridgedStore
// Dependencies: [4920, 2]
// Exports: ensureValidMode

// Module 4919 (BridgedStore)
import FluxApi from "FluxApi" /* 4920 */;
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
