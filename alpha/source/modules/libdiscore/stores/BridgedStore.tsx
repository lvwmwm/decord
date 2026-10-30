// Module ID: 4885
// Function ID: 4886
// Name: BridgedStore
// Dependencies: [4886, 2]
// Exports: ensureValidMode

// Module 4885 (BridgedStore)
import FluxApi from "FluxApi" /* 4886 */;
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
