// Module ID: 4789
// Function ID: 4790
// Name: BridgedStore
// Dependencies: [4790, 2]
// Exports: ensureValidMode

// Module 4789 (BridgedStore)
import FluxApi from "FluxApi" /* 4790 */;
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
