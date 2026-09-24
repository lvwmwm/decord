// Module ID: 2071
// Function ID: 2072
// Name: BridgedStore
// Dependencies: [2072, 2]
// Exports: ensureValidMode

// Module 2071 (BridgedStore)
import FluxApi from "FluxApi" /* 2072 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  }
  return str;
};
