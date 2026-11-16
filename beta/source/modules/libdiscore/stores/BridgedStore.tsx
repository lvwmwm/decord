// Module ID: 5182
// Function ID: 5183
// Name: BridgedStore
// Dependencies: [5183, 2]
// Exports: ensureValidMode

// Module 5182 (BridgedStore)
import FluxApi from "FluxApi" /* 5183 */;
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
