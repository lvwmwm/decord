// Module ID: 2072
// Function ID: 2073
// Name: BridgedStore
// Dependencies: [2073, 2]
// Exports: ensureValidMode

// Module 2072 (BridgedStore)
import FluxApi from "FluxApi" /* 2073 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  }
  return str;
};
