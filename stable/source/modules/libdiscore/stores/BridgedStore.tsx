// Module ID: 2068
// Function ID: 2069
// Name: BridgedStore
// Dependencies: [2069, 2]
// Exports: ensureValidMode

// Module 2068 (BridgedStore)
import FluxApi from "FluxApi" /* 2069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  }
  return str;
};
