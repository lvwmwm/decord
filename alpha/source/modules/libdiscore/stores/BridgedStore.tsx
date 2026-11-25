// Module ID: 4888
// Function ID: 4889
// Name: BridgedStore
// Dependencies: [4889, 2]
// Exports: ensureValidMode

// Module 4888 (BridgedStore)
import FluxApi from "FluxApi" /* 4889 */;
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
